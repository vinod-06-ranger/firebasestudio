'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { PortfolioData, Skill } from "@/types";
import { Lightbulb, Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type SkillsFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function SkillsForm({ data, setData }: SkillsFormProps) {
  const handleSkillChange = (index: number, field: keyof Skill, value: string) => {
    const newSkills = [...data.skills];
    (newSkills[index] as any)[field] = value;
    setData((prev) => ({ ...prev, skills: newSkills }));
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: `skill-${Date.now()}`,
      name: 'New Skill',
      category: 'Other',
    };
    setData((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const removeSkill = (index: number) => {
    const newSkills = data.skills.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, skills: newSkills }));
  };

  return (
    <AccordionItem value="item-3">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          <span className="font-semibold">Skills & Expertise</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2 space-y-4">
        <div className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-end gap-2">
              <div className="flex-1 space-y-1.5">
                <Label htmlFor={`skill-name-${index}`} className="sr-only">Skill Name</Label>
                <Input id={`skill-name-${index}`} value={skill.name} onChange={(e) => handleSkillChange(index, 'name', e.target.value)} />
              </div>
              <div className="w-[120px] space-y-1.5">
                <Label htmlFor={`skill-cat-${index}`} className="sr-only">Category</Label>
                <Select value={skill.category} onValueChange={(value) => handleSkillChange(index, 'category', value)}>
                  <SelectTrigger id={`skill-cat-${index}`}>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Language">Language</SelectItem>
                    <SelectItem value="Framework">Framework</SelectItem>
                    <SelectItem value="Tool">Tool</SelectItem>
                    <SelectItem value="Platform">Platform</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-destructive" onClick={() => removeSkill(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={addSkill} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Skill
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
