'use client';

import { Message } from '@/lib/types';
import { formatTimestamp } from '@/lib/chat-utils';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex w-full gap-3 p-4',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'flex max-w-[80%] flex-col gap-2',
          isUser ? 'items-end' : 'items-start'
        )}
      >
        <div className="flex items-center gap-2">
          <div
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full',
              isUser ? 'bg-primary' : 'bg-muted'
            )}
          >
            {isUser ? (
              <User className="h-5 w-5 text-primary-foreground" />
            ) : (
              <Bot className="h-5 w-5 text-foreground" />
            )}
          </div>
          <span className="text-sm text-muted-foreground">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
        <div
          className={cn(
            'rounded-lg px-4 py-2',
            isUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground'
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}