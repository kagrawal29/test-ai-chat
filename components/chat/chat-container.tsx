'use client';

import { useState } from 'react';
import { Message } from '@/lib/types';
import { generateId } from '@/lib/chat-utils';
import { MessageList } from './message-list';
import { MessageInput } from './message-input';

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hello! How can I help you today?',
  timestamp: new Date(),
};

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: 'This is a simulated response. In a real application, this would be connected to an AI service.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-[600px] w-full flex-col rounded-lg border bg-background shadow-lg">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <h2 className="text-lg font-semibold">AI Chat Assistant</h2>
        <span className="text-sm text-muted-foreground">
          {isLoading ? 'Thinking...' : 'Online'}
        </span>
      </div>
      <MessageList messages={messages} />
      <div className="border-t p-4">
        <MessageInput onSend={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}