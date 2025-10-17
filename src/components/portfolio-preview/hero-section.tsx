import type { Profile } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Globe, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-8">
      <Avatar className="h-32 w-32 border-4 border-primary/10 shadow-lg">
        <AvatarImage src={profile.headshotUrl} alt={profile.name} data-ai-hint="professional headshot" />
        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{profile.name}</h1>
        <h2 className="mt-2 text-xl font-medium text-foreground/80 sm:text-2xl">{profile.title}</h2>
        <div className="mt-4 flex justify-center sm:justify-start items-center gap-2 flex-wrap">
          <Button variant="ghost" size="sm" asChild>
            <a href={`mailto:${profile.contact.email}`}><Mail className="mr-2" /> {profile.contact.email}</a>
          </Button>
          {profile.contact.phone && (
            <Button variant="ghost" size="sm" asChild>
              <a href={`tel:${profile.contact.phone}`}><Phone className="mr-2" /> {profile.contact.phone}</a>
            </Button>
          )}
        </div>
        <div className="mt-2 flex justify-center sm:justify-start items-center gap-1">
          {profile.contact.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icons.github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {profile.contact.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icons.linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
           {profile.contact.website && (
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.contact.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                <Globe className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
