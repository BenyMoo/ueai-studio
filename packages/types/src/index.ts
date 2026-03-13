export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface ChatParams {
  messages: Message[];
  model: string;
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  tools?: Tool[];
  stream?: boolean;
}

export interface ChatResponse {
  id: string;
  content: string;
  finishReason: 'stop' | 'length' | 'tool_calls';
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  toolCalls?: ToolCall[];
}

export interface ChatChunk {
  id: string;
  content: string;
  delta: string;
  finishReason?: 'stop' | 'length' | 'tool_calls';
}

export interface Tool {
  type: 'function';
  function: {
    name: string;
    description: string;
    parameters: Record<string, any>;
  };
}

export interface ToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

export interface ToolResult {
  toolCallId: string;
  content: string;
  isError?: boolean;
}

export interface ProviderConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  maxRetries?: number;
  proxy?: {
    host: string;
    port: number;
    protocol?: 'http' | 'https';
  };
}

export interface AIProvider {
  name: string;
  type: 'openai' | 'anthropic' | 'google' | 'deepseek' | 'ollama' | 'custom' | 'openclaw';
  
  configure(config: ProviderConfig): void;
  
  chat(params: ChatParams): Promise<ChatResponse>;
  
  streamChat(params: ChatParams): AsyncGenerator<ChatChunk>;
  
  supports(feature: 'vision' | 'tools' | 'streaming' | 'function_calling'): boolean;
  
  getModels(): Promise<Model[]>;
}

export interface Model {
  id: string;
  name: string;
  provider: string;
  capabilities: {
    vision: boolean;
    tools: boolean;
    streaming: boolean;
    functionCalling: boolean;
  };
  contextLength: number;
  pricing?: {
    input: number;
    output: number;
  };
}

export interface Conversation {
  id: string;
  provider: string;
  model: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  metadata?: Record<string, any>;
}

export interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number;
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, any>;
  execute: (params: any) => Promise<any>;
}

export type Platform = 'desktop' | 'web' | 'mobile';
