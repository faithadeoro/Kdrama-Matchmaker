import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MoodButtonProps {
  emoji: string;
  label: string;
  description: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export function MoodButton({ 
  emoji, 
  label, 
  description, 
  onClick, 
  disabled = false,
  className 
}: MoodButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      className={cn(
        'h-auto p-4 flex flex-col items-center space-y-2 border-2 transition-all duration-200',
        'hover:border-primary hover:bg-primary/5 hover:scale-105',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'font-nunito',
        className
      )}
    >
      <span className="text-2xl">{emoji}</span>
      <div className="text-center">
        <p className="font-baloo font-semibold text-sm">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Button>
  );
}
