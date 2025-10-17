'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Education, PortfolioData } from "@/types";
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type EducationFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function EducationForm({ data, setData }: EducationFormProps) {
  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const newEducation = [...data.education];
    (newEducation[index] as any)[field] = value;
    setData((prev) => ({ ...prev, education: newEducation }));
  };

  const addEducation = () => {
    const newEducationItem: Education = {
      id: `edu-${Date.now()}`,
      institution: 'University Name',
      degree: 'Degree',
      field: 'Field of Study',
      startYear: '2020',
      endYear: '2024',
    };
    setData((prev) => ({ ...prev, education: [...prev.education, newEducationItem] }));
  };

  const removeEducation = (index: number) => {
    const newEducation = data.education.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, education: newEducation }));
  };

  return (
    <AccordionItem value="item-4">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <span className="font-semibold">Education</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2 space-y-4">
        {data.education.map((edu, index) => (
          <div key={edu.id} className="p-4 border rounded-lg space-y-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:text-destructive"
              onClick={() => removeEducation(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="space-y-2">
              <Label htmlFor={`edu-inst-${index}`}>Institution</Label>
              <Input id={`edu-inst-${index}`} value={edu.institution} onChange={(e) => handleEducationChange(index, 'institution', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edu-degree-${index}`}>Degree</Label>
              <Input id={`edu-degree-${index}`} value={edu.degree} onChange={(e) => handleEducationChange(index, 'degree', e.target.value)} />
            </div>
             <div className="space-y-2">
              <Label htmlFor={`edu-field-${index}`}>Field of Study</Label>
              <Input id={`edu-field-${index}`} value={edu.field} onChange={(e) => handleEducationChange(index, 'field', e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`edu-start-${index}`}>Start Year</Label>
                <Input id={`edu-start-${index}`} value={edu.startYear} onChange={(e) => handleEducationChange(index, 'startYear', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`edu-end-${index}`}>End Year</Label>
                <Input id={`edu-end-${index}`} value={edu.endYear} onChange={(e) => handleEducationChange(index, 'endYear', e.target.value)} />
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={addEducation} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
