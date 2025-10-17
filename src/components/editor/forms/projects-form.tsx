'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PortfolioData, Project } from "@/types";
import { Briefcase, Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type ProjectsFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function ProjectsForm({ data, setData }: ProjectsFormProps) {
  const handleProjectChange = (index: number, field: keyof Project, value: string) => {
    const newProjects = [...data.projects];
    (newProjects[index] as any)[field] = value;
    setData((prev) => ({ ...prev, projects: newProjects }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: 'New Project',
      description: 'A brief description of your project.',
      imageUrl: 'https://picsum.photos/seed/new/600/400',
      imageHint: 'project work',
    };
    setData((prev) => ({ ...prev, projects: [...prev.projects, newProject] }));
  };

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, projects: newProjects }));
  };

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          <span className="font-semibold">Projects</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2 space-y-4">
        {data.projects.map((project, index) => (
          <div key={project.id} className="p-4 border rounded-lg space-y-4 relative">
             <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-destructive"
              onClick={() => removeProject(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="space-y-2">
              <Label htmlFor={`project-title-${index}`}>Title</Label>
              <Input id={`project-title-${index}`} value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`project-desc-${index}`}>Description</Label>
              <Textarea id={`project-desc-${index}`} value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`project-img-${index}`}>Image URL</Label>
              <Input id={`project-img-${index}`} value={project.imageUrl} onChange={(e) => handleProjectChange(index, 'imageUrl', e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`project-demo-${index}`}>Demo URL</Label>
                <Input id={`project-demo-${index}`} value={project.demoUrl || ''} onChange={(e) => handleProjectChange(index, 'demoUrl', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-repo-${index}`}>Repo URL</Label>
                <Input id={`project-repo-${index}`} value={project.repoUrl || ''} onChange={(e) => handleProjectChange(index, 'repoUrl', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={addProject} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
