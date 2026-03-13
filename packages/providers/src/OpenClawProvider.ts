import { BaseProvider } from '@ueai/ai-core';
import type {
  ChatParams,
  ChatResponse,
  ChatChunk,
  Model
} from '@ueai/types';
import { generateId } from '@ueai/shared';

export class OpenClawProvider extends BaseProvider {
  private gatewayUrl: string = 'http://localhost:18789';

  constructor() {
    super('openclaw', 'custom');
  }

  configure(config: any): void {
    super.configure(config);
    if (config.gatewayUrl) {
      this.gatewayUrl = config.gatewayUrl;
    }
  }

  protected getDefaultBaseUrl(): string {
    return this.gatewayUrl;
  }

  async chat(params: ChatParams): Promise<ChatResponse> {
    const url = `${this.getBaseUrl()}/v1/chat/completions`;
    
    const response = await this.fetchWithRetry(url, {
      method: 'POST',
      body: JSON.stringify({
        model: params.model,
        messages: params.messages.map(m => ({
          role: m.role,
          content: m.content
        })),
        temperature: params.temperature,
        max_tokens: params.maxTokens,
        top_p: params.topP,
        tools: params.tools?.map(t => ({
          type: t.type,
          function: t.function
        }))
      })
    });

    const data = await response.json();
    const choice = data.choices[0];

    return {
      id: data.id,
      content: choice.message.content || '',
      finishReason: choice.finish_reason,
      usage: data.usage ? {
        promptTokens: data.usage.prompt_tokens,
        completionTokens: data.usage.completion_tokens,
        totalTokens: data.usage.total_tokens
      } : undefined,
      toolCalls: choice.message.tool_calls?.map((tc: any) => ({
        id: tc.id,
        type: tc.type,
        function: {
          name: tc.function.name,
          arguments: tc.function.arguments
        }
      }))
    };
  }

  async *streamChat(params: ChatParams): AsyncGenerator<ChatChunk> {
    const url = `${this.getBaseUrl()}/v1/chat/completions`;
    
    const response = await this.fetchWithRetry(url, {
      method: 'POST',
      body: JSON.stringify({
        model: params.model,
        messages: params.messages.map(m => ({
          role: m.role,
          content: m.content
        })),
        temperature: params.temperature,
        max_tokens: params.maxTokens,
        top_p: params.topP,
        tools: params.tools?.map(t => ({
          type: t.type,
          function: t.function
        })),
        stream: true
      })
    });

    yield* this.parseStream(response);
  }

  supports(feature: 'vision' | 'tools' | 'streaming' | 'function_calling'): boolean {
    switch (feature) {
      case 'vision':
        return true;
      case 'tools':
        return true;
      case 'streaming':
        return true;
      case 'function_calling':
        return true;
      default:
        return false;
    }
  }

  async getModels(): Promise<Model[]> {
    const url = `${this.getBaseUrl()}/v1/models`;
    const response = await this.fetchWithRetry(url, { method: 'GET' });
    const data = await response.json();

    return data.data.map((model: any) => ({
      id: model.id,
      name: model.id,
      provider: 'openclaw',
      capabilities: {
        vision: true,
        tools: true,
        streaming: true,
        functionCalling: true
      },
      contextLength: 128000,
      pricing: {
        input: 0,
        output: 0
      }
    }));
  }

  protected parseChunk(data: any): ChatChunk {
    const choice = data.choices?.[0];
    if (!choice) {
      return {
        id: data.id,
        content: '',
        delta: ''
      };
    }

    return {
      id: data.id,
      content: choice.delta.content || '',
      delta: choice.delta.content || '',
      finishReason: choice.finish_reason
    };
  }

  async setupOpenClaw(config: OpenClawConfig): Promise<void> {
    const commands = [
      `openclaw config set model.provider ${config.provider || 'openai'}`,
      `openclaw config set model.openai.api_key ${config.apiKey}`,
      `openclaw config set model.name ${config.model || 'gpt-4'}`
    ];

    for (const cmd of commands) {
      await this.executeCommand(cmd);
    }
  }

  private async executeCommand(command: string): Promise<void> {
    console.log(`Executing OpenClaw command: ${command}`);
  }

  async deployLocal(): Promise<void> {
    console.log('Deploying OpenClaw locally...');
  }

  async testConnection(): Promise<boolean> {
    try {
      const url = `${this.getBaseUrl()}/health`;
      const response = await fetch(url);
      return response.ok;
    } catch {
      return false;
    }
  }
}

interface OpenClawConfig {
  provider?: string;
  apiKey: string;
  model?: string;
  gatewayUrl?: string;
}
