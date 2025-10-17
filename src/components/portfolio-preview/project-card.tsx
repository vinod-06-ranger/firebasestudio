import type { Project } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-xl">
      <div className="aspect-[3/2] bg-muted relative">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="gap-2">
        {project.demoUrl && (
          <Button asChild variant="secondary">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" /> Live Demo
            </a>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="outline">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" /> Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
