'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { PortfolioData, Strength } from "@/types";
import { Zap, Plus, Trash2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type StrengthsFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function StrengthsForm({ data, setData }: StrengthsFormProps) {
  const handleStrengthChange = (index: number, field: keyof Strength, value: string) => {
    const newStrengths = [...data.strengths];
    (newStrengths[index] as any)[field] = value;
    setData((prev) => ({ ...prev, strengths: newStrengths }));
  };

  const addStrength = () => {
    const newStrength: Strength = {
      id: `str-${Date.now()}`,
      name: 'New Strength',
      category: 'Personal',
    };
    setData((prev) => ({ ...prev, strengths: [...prev.strengths, newStrength] }));
  };

  const removeStrength = (index: number) => {
    const newStrengths = data.strengths.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, strengths: newStrengths }));
  };

  return (
    <AccordionItem value="item-3b">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          <span className="font-semibold">Strengths</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-2 space-y-4">
        <div className="space-y-4">
          {data.strengths.map((strength, index) => (
            <div key={strength.id} className="flex items-end gap-2">
              <div className="flex-1 space-y-1.5">
                <Label htmlFor={`str-name-${index}`} className="sr-only">Strength Name</Label>
                <Input id={`str-name-${index}`} value={strength.name} onChange={(e) => handleStrengthChange(index, 'name', e.target.value)} />
              </div>
              <div className="w-[140px] space-y-1.5">
                <Label htmlFor={`str-cat-${index}`} className="sr-only">Category</Label>
                <Select value={strength.category} onValueChange={(value) => handleStrengthChange(index, 'category', value)}>
                  <SelectTrigger id={`str-cat-${index}`}>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal">Personal</SelectItem>
                    <SelectItem value="Programming">Programming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-destructive" onClick={() => removeStrength(index)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" onClick={addStrength} className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Strength
        </Button>
      </AccordionContent>
    </AccordionItem>
  );
}
