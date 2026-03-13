import { BaseProvider } from '@ueai/ai-core';
import type {
  ChatParams,
  ChatResponse,
  ChatChunk,
  Model
} from '@ueai/types';
import { generateId } from '@ueai/shared';

export class OpenAIProvider extends BaseProvider {
  constructor() {
    super('openai', 'openai');
  }

  protected getDefaultBaseUrl(): string {
    return 'https://api.openai.com/v1';
  }

  async chat(params: ChatParams): Promise<ChatResponse> {
    const url = `${this.getBaseUrl()}/chat/completions`;
    
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
    const url = `${this.getBaseUrl()}/chat/completions`;
    
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
        return ['gpt-4-vision-preview', 'gpt-4o'].includes(this.getCurrentModel());
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
    const url = `${this.getBaseUrl()}/models`;
    const response = await this.fetchWithRetry(url, { method: 'GET' });
    const data = await response.json();

    return data.data
      .filter((model: any) => model.id.startsWith('gpt-'))
      .map((model: any) => ({
        id: model.id,
        name: model.id,
        provider: 'openai',
        capabilities: {
          vision: model.id.includes('vision') || model.id === 'gpt-4o',
          tools: true,
          streaming: true,
          functionCalling: true
        },
        contextLength: this.getContextLength(model.id),
        pricing: {
          input: this.getPricing(model.id, 'input'),
          output: this.getPricing(model.id, 'output')
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

  private getCurrentModel(): string {
    return 'gpt-4';
  }

  private getContextLength(modelId: string): number {
    const contextLengths: Record<string, number> = {
      'gpt-4': 8192,
      'gpt-4-32k': 32768,
      'gpt-4-turbo': 128000,
      'gpt-4o': 128000,
      'gpt-3.5-turbo': 16385
    };
    return contextLengths[modelId] || 4096;
  }

  private getPricing(modelId: string, type: 'input' | 'output'): number {
    const pricing: Record<string, { input: number; output: number }> = {
      'gpt-4': { input: 0.03, output: 0.06 },
      'gpt-4-turbo': { input: 0.01, output: 0.03 },
      'gpt-4o': { input: 0.005, output: 0.015 },
      'gpt-3.5-turbo': { input: 0.0005, output: 0.0015 }
    };
    return pricing[modelId]?.[type] || 0;
  }
}
