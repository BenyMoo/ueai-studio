import type { ToolDefinition, ToolResult } from '@ueai/types';
import { EventEmitter } from 'eventemitter3';

export class ToolRegistry extends EventEmitter {
  private tools: Map<string, ToolDefinition> = new Map();
  private permissions: Map<string, Set<string>> = new Map();

  register(tool: ToolDefinition): void {
    this.tools.set(tool.name, tool);
    this.emit('tool-registered', tool.name);
  }

  unregister(name: string): boolean {
    const deleted = this.tools.delete(name);
    if (deleted) {
      this.emit('tool-unregistered', name);
    }
    return deleted;
  }

  get(name: string): ToolDefinition | undefined {
    return this.tools.get(name);
  }

  getAll(): ToolDefinition[] {
    return Array.from(this.tools.values());
  }

  has(name: string): boolean {
    return this.tools.has(name);
  }

  async execute(name: string, params: any): Promise<ToolResult> {
    const tool = this.tools.get(name);
    if (!tool) {
      throw new Error(`Tool ${name} not found`);
    }

    try {
      const result = await tool.execute(params);
      return {
        toolCallId: generateId(),
        content: typeof result === 'string' ? result : JSON.stringify(result),
        isError: false
      };
    } catch (error) {
      return {
        toolCallId: generateId(),
        content: error instanceof Error ? error.message : 'Unknown error',
        isError: true
      };
    }
  }

  grantPermission(conversationId: string, toolName: string): void {
    if (!this.permissions.has(conversationId)) {
      this.permissions.set(conversationId, new Set());
    }
    this.permissions.get(conversationId)!.add(toolName);
    this.emit('permission-granted', conversationId, toolName);
  }

  revokePermission(conversationId: string, toolName: string): void {
    const permissions = this.permissions.get(conversationId);
    if (permissions) {
      permissions.delete(toolName);
      this.emit('permission-revoked', conversationId, toolName);
    }
  }

  hasPermission(conversationId: string, toolName: string): boolean {
    const permissions = this.permissions.get(conversationId);
    return permissions ? permissions.has(toolName) : false;
  }

  clearPermissions(conversationId: string): void {
    this.permissions.delete(conversationId);
    this.emit('permissions-cleared', conversationId);
  }

  search(query: string): ToolDefinition[] {
    const lowerQuery = query.toLowerCase();
    return this.getAll().filter(tool =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery)
    );
  }

  getByCategory(category: string): ToolDefinition[] {
    return this.getAll().filter(tool => tool.parameters.category === category);
  }
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
