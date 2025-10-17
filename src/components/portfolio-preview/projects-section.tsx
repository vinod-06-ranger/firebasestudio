import type { Project } from '@/types';
import { ProjectCard } from './project-card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles } from 'lucide-react';

type ProjectsSectionProps = {
  projects: Project[];
  techSummary: string | null;
};

export function ProjectsSection({ projects, techSummary }: ProjectsSectionProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold text-primary mb-6">Projects</h3>
      {techSummary && (
        <Alert className="mb-8 border-accent/50 bg-accent/5">
           <Sparkles className="h-5 w-5 text-accent" />
          <AlertTitle className="text-accent font-semibold">Prominent Technologies</AlertTitle>
          <AlertDescription className="text-accent/80">
            {techSummary}
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
