'use client';

import { useState, useEffect, useTransition } from 'react';
import type { PortfolioData } from '@/types';
import { initialData } from '@/data/initial-data';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { EditorSidebar } from '@/components/editor/editor-sidebar';
import { PortfolioPreview } from '@/components/portfolio-preview/portfolio-preview';
import { getTechnologySummary } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Header } from './shared/header';

export function PortfolioEditor() {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [techSummary, setTechSummary] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [theme, setTheme] = useState('theme-default');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleSummarize = () => {
    startTransition(async () => {
      const descriptions = data.projects.map((p) => p.description);
      const result = await getTechnologySummary(descriptions);
      if (result.summary) {
        setTechSummary(result.summary);
        toast({
          title: 'Analysis Complete',
          description: 'Prominent technologies have been summarized.',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'Could not generate summary.',
        });
      }
    });
  };

  return (
    <SidebarProvider>
      <EditorSidebar
        data={data}
        setData={setData}
        onSummarize={handleSummarize}
        isSummarizing={isPending}
        setTheme={setTheme}
        currentTheme={theme}
      />
      <SidebarInset>
        <Header />
        <div className="flex-1 overflow-auto">
          <PortfolioPreview data={data} techSummary={techSummary} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
