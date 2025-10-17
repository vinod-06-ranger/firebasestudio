import type { PortfolioData } from '@/types';
import { HeroSection } from './hero-section';
import { AboutSection } from './about-section';
import { ProjectsSection } from './projects-section';
import { SkillsSection } from './skills-section';
import { ExperienceSection } from './experience-section';
import { Separator } from '../ui/separator';

type PortfolioPreviewProps = {
  data: PortfolioData;
  techSummary: string | null;
};

export function PortfolioPreview({ data, techSummary }: PortfolioPreviewProps) {
  return (
    <div className="bg-card text-card-foreground shadow-lg rounded-xl max-w-5xl mx-auto my-8 p-4 sm:p-8 md:p-12 print:shadow-none print:my-0 print:p-0">
      <HeroSection profile={data.profile} />
      <Separator className="my-8 md:my-12" />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <AboutSection bio={data.profile.bio} />
          <ProjectsSection projects={data.projects} techSummary={techSummary} />
        </div>
        <div className="space-y-12">
          <SkillsSection skills={data.skills} />
          <ExperienceSection education={data.education} achievements={data.achievements} />
        </div>
      </div>
    </div>
  );
}
