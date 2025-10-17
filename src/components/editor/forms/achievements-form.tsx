'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Achievement, PortfolioData } from "@/types";
import { Award, Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type AchievementsFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function AchievementsForm({ data, setData }: AchievementsFormProps) {
  const handleAchievementChange = (index: number, field: keyof Achievement, value: string) => {
    const newAchievements = [...data.achievements];
    (newAchievements[index] as any)[field] = value;
    setData((prev) => ({ ...prev, achievements: newAchievements }));
  };

  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: `ach-${Date.now()}`,
      title: 'New Achievement',
      description: 'Description of the achievement.',
      year: new Date().getFullYear().toString(),
    };
    setData((prev) => ({ ...prev, achievements: [...prev.achievements, newAchievement] }));
  };

  const removeAchievement = (index: number) => {
    const newAchievements = data.achievements.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, achievements: newAchievements }));
  };

  return (
    <AccordionItem value="item-5">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          <span className="font-semibold">Achievements</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2 space-y-4">
        {data.achievements.map((ach, index) => (
          <div key={ach.id} className="p-4 border rounded-lg space-y-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-destructive"
              onClick={() => removeAchievement(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="space-y-2">
              <Label htmlFor={`ach-title-${index}`}>Title</Label>
              <Input id={`ach-title-${index}`} value={ach.title} onChange={(e) => handleAchievementChange(index, 'title', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`ach-desc-${index}`}>Description</Label>
              <Textarea id={`ach-desc-${index}`} value={ach.description} onChange={(e) => handleAchievementChange(index, 'description', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`ach-year-${index}`}>Year</Label>
              <Input id={`ach-year-${index}`} value={ach.year} onChange={(e) => handleAchievementChange(index, 'year', e.target.value)} />
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={addAchievement} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Achievement
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
