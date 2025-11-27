import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KDrama } from '@/data/kdramas';
import { cn } from '@/lib/utils';

interface DramaCardProps {
  drama: KDrama;
  className?: string;
}

export function DramaCard({ drama, className }: DramaCardProps) {
  return (
    <Card className={cn(
      'border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg chat-bubble',
      className
    )}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-baloo font-bold text-lg text-primary">
              {drama.title}
            </h3>
            <p className="text-sm text-muted-foreground font-nunito">
              {drama.year} • {drama.episodes} episodes
            </p>
          </div>
          
          <p className="text-sm font-nunito leading-relaxed">
            {drama.tagline}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {drama.genre.slice(0, 3).map((genre) => (
              <Badge 
                key={genre} 
                variant="secondary" 
                className="text-xs font-nunito"
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
