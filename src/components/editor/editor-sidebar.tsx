'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { PortfolioData } from '@/types';
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { ProfileForm } from './forms/profile-form';
import { ProjectsForm } from './forms/projects-form';
import { SkillsForm } from './forms/skills-form';
import { StrengthsForm } from './forms/strengths-form';
import { EducationForm } from './forms/education-form';
import { AchievementsForm } from './forms/achievements-form';
import { ThemeSelector } from './theme-selector';

type EditorSidebarProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
  onSummarize: () => void;
  isSummarizing: boolean;
  setTheme: (theme: string) => void;
  currentTheme: string;
};

export function EditorSidebar({ data, setData, onSummarize, isSummarizing, setTheme, currentTheme }: EditorSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold">Editor Controls</h2>
      </SidebarHeader>
      <SidebarContent>
        <Accordion type="multiple" defaultValue={['item-1', 'item-3', 'item-3b', 'item-4', 'item-5']} className="w-full">
          <ThemeSelector setTheme={setTheme} currentTheme={currentTheme} />
          <ProfileForm data={data} setData={setData} />
          <ProjectsForm data={data} setData={setData} />
          <SkillsForm data={data} setData={setData} />
          <StrengthsForm data={data} setData={setData} />
          <EducationForm data={data} setData={setData} />
          <AchievementsForm data={data} setData={setData} />
        </Accordion>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={onSummarize} disabled={isSummarizing}>
          {isSummarizing ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          Analyze Projects
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
