import React from 'react';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
  className?: string;
}

export function ChatBubble({ message, isUser, isTyping = false, className }: ChatBubbleProps) {
  return (
    <div className={cn(
      'flex w-full mb-4',
      isUser ? 'justify-end' : 'justify-start',
      className
    )}>
      <div className={cn(
        'max-w-[80%] px-4 py-3 rounded-2xl chat-bubble',
        isUser 
          ? 'bg-primary text-primary-foreground ml-12' 
          : 'bg-card border border-border mr-12',
        isTyping && 'typing-indicator'
      )}>
        {isTyping ? (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        ) : (
          <p className={cn(
            'text-sm leading-relaxed font-nunito',
            isUser ? 'text-primary-foreground' : 'text-foreground'
          )}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
