import type { Conversation, Message } from '@ueai/types';
import { generateId, getCurrentTimestamp } from '@ueai/shared';
import { EventEmitter } from 'eventemitter3';

export class ConversationManager extends EventEmitter {
  private conversations: Map<string, Conversation> = new Map();
  private activeConversationId: string | null = null;

  createConversation(provider: string, model: string): string {
    const id = generateId();
    const conversation: Conversation = {
      id,
      provider,
      model,
      messages: [],
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp()
    };

    this.conversations.set(id, conversation);
    this.emit('conversation-created', conversation);

    return id;
  }

  getConversation(id: string): Conversation | undefined {
    return this.conversations.get(id);
  }

  getAllConversations(): Conversation[] {
    return Array.from(this.conversations.values()).sort(
      (a, b) => b.updatedAt - a.updatedAt
    );
  }

  deleteConversation(id: string): boolean {
    const deleted = this.conversations.delete(id);
    if (deleted) {
      this.emit('conversation-deleted', id);
      
      if (this.activeConversationId === id) {
        this.activeConversationId = null;
      }
    }
    return deleted;
  }

  setActiveConversation(id: string | null): void {
    this.activeConversationId = id;
    this.emit('active-conversation-changed', id);
  }

  getActiveConversation(): Conversation | undefined {
    if (!this.activeConversationId) return undefined;
    return this.conversations.get(this.activeConversationId);
  }

  addMessage(conversationId: string, message: Message): void {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    conversation.messages.push(message);
    conversation.updatedAt = getCurrentTimestamp();
    this.emit('message-added', conversationId, message);
  }

  updateMessage(conversationId: string, messageId: string, updates: Partial<Message>): void {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    const message = conversation.messages.find(m => m.id === messageId);
    if (!message) {
      throw new Error(`Message ${messageId} not found`);
    }

    Object.assign(message, updates);
    conversation.updatedAt = getCurrentTimestamp();
    this.emit('message-updated', conversationId, messageId, updates);
  }

  deleteMessage(conversationId: string, messageId: string): void {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    const index = conversation.messages.findIndex(m => m.id === messageId);
    if (index === -1) {
      throw new Error(`Message ${messageId} not found`);
    }

    conversation.messages.splice(index, 1);
    conversation.updatedAt = getCurrentTimestamp();
    this.emit('message-deleted', conversationId, messageId);
  }

  clearConversation(conversationId: string): void {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    conversation.messages = [];
    conversation.updatedAt = getCurrentTimestamp();
    this.emit('conversation-cleared', conversationId);
  }

  updateConversationMetadata(conversationId: string, metadata: Record<string, any>): void {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    conversation.metadata = { ...conversation.metadata, ...metadata };
    conversation.updatedAt = getCurrentTimestamp();
    this.emit('conversation-updated', conversationId, metadata);
  }

  exportConversation(conversationId: string): string {
    const conversation = this.conversations.get(conversationId);
    if (!conversation) {
      throw new Error(`Conversation ${conversationId} not found`);
    }

    return JSON.stringify(conversation, null, 2);
  }

  importConversation(data: string): Conversation {
    const conversation = JSON.parse(data) as Conversation;
    this.conversations.set(conversation.id, conversation);
    this.emit('conversation-imported', conversation);
    return conversation;
  }

  getConversationsByProvider(provider: string): Conversation[] {
    return this.getAllConversations().filter(c => c.provider === provider);
  }

  getConversationsByModel(model: string): Conversation[] {
    return this.getAllConversations().filter(c => c.model === model);
  }

  searchConversations(query: string): Conversation[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllConversations().filter(conversation =>
      conversation.messages.some(message =>
        message.content.toLowerCase().includes(lowerQuery)
      )
    );
  }
}
