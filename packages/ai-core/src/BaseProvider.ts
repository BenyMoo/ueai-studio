import type {
  AIProvider,
  ChatParams,
  ChatResponse,
  ChatChunk,
  ProviderConfig,
  Model
} from '@ueai/types';
import { EventEmitter } from 'eventemitter3';

export abstract class BaseProvider extends EventEmitter implements AIProvider {
  protected config: ProviderConfig;
  protected models: Model[] = [];

  constructor(
    public name: string,
    public type: AIProvider['type']
  ) {
    super();
    this.config = {} as ProviderConfig;
  }

  configure(config: ProviderConfig): void {
    this.config = config;
    this.emit('configured', config);
  }

  abstract chat(params: ChatParams): Promise<ChatResponse>;

  abstract streamChat(params: ChatParams): AsyncGenerator<ChatChunk>;

  abstract supports(feature: 'vision' | 'tools' | 'streaming' | 'function_calling'): boolean;

  abstract getModels(): Promise<Model[]>;

  protected getBaseUrl(): string {
    return this.config.baseUrl || this.getDefaultBaseUrl();
  }

  protected abstract getDefaultBaseUrl(): string;

  protected getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };

    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey}`;
    }

    return headers;
  }

  protected async fetchWithRetry(
    url: string,
    options: RequestInit,
    retries: number = this.config.maxRetries || 3
  ): Promise<Response> {
    let lastError: Error | null = null;

    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            ...this.getHeaders(),
            ...options.headers
          },
          signal: AbortSignal.timeout(this.config.timeout || 30000)
        });

        if (!response.ok) {
          const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
          throw error;
        }

        return response;
      } catch (error) {
        lastError = error as Error;
        
        if (i < retries - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
      }
    }

    throw lastError;
  }

  protected parseStream(response: Response): AsyncGenerator<ChatChunk> {
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    return (async function* () {
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;

          if (trimmed.startsWith('data: ')) {
            try {
              const data = JSON.parse(trimmed.slice(6));
              yield this.parseChunk(data);
            } catch (error) {
              console.error('Failed to parse SSE data:', error);
            }
          }
        }
      }
    }).bind(this)();
  }

  protected abstract parseChunk(data: any): ChatChunk;
}
