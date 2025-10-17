'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PortfolioData } from "@/types";
import { User } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type ProfileFormProps = {
  data: PortfolioData;
  setData: Dispatch<SetStateAction<PortfolioData>>;
};

export function ProfileForm({ data, setData }: ProfileFormProps) {
  const handleProfileChange = (field: string, value: string) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, [field]: value } }));
  };

  const handleContactChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        contact: { ...prev.profile.contact, [field]: value },
      },
    }));
  };

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span className="font-semibold">Profile</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4 p-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={data.profile.name} onChange={(e) => handleProfileChange('name', e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input id="title" value={data.profile.title} onChange={(e) => handleProfileChange('title', e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Biography</Label>
          <Textarea id="bio" value={data.profile.bio} onChange={(e) => handleProfileChange('bio', e.target.value)} rows={5} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="headshotUrl">Headshot URL</Label>
          <Input id="headshotUrl" value={data.profile.headshotUrl} onChange={(e) => handleProfileChange('headshotUrl', e.target.value)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={data.profile.contact.email} onChange={(e) => handleContactChange('email', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={data.profile.contact.phone} onChange={(e) => handleContactChange('phone', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn URL</Label>
              <Input id="linkedin" value={data.profile.contact.linkedin} onChange={(e) => handleContactChange('linkedin', e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github">GitHub URL</Label>
              <Input id="github" value={data.profile.contact.github} onChange={(e) => handleContactChange('github', e.target.value)} />
            </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
