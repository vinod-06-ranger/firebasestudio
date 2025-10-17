'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'Default', value: 'theme-default', colors: ['bg-primary', 'bg-accent', 'bg-card'] },
  { name: 'Forest', value: 'theme-forest', colors: ['bg-primary', 'bg-accent', 'bg-card'] },
  { name: 'Ocean', value: 'theme-ocean', colors: ['bg-primary', 'bg-accent', 'bg-card'] },
  { name: 'Dusk', value: 'theme-dusk', colors: ['bg-primary', 'bg-accent', 'bg-card'] },
];

type ThemeSelectorProps = {
  setTheme: (theme: string) => void;
  currentTheme: string;
};

export function ThemeSelector({ setTheme, currentTheme }: ThemeSelectorProps) {
  return (
    <AccordionItem value="item-0">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5" />
          <span className="font-semibold">Theme</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2">
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => setTheme(theme.value)}
              className={cn(
                'rounded-lg border-2 p-2 text-left transition-all hover:border-ring',
                currentTheme === theme.value ? 'border-ring' : 'border-transparent'
              )}
            >
              <div className={cn('space-y-1', theme.value)}>
                <p className="font-medium text-sm text-foreground">{theme.name}</p>
                <div className="flex -space-x-1 rtl:space-x-reverse">
                  {theme.colors.map((color, i) => (
                    <div
                      key={i}
                      className={cn(
                        'h-5 w-5 rounded-full border-2 border-card',
                        color
                      )}
                    />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
