import type { Achievement, Education } from '@/types';
import { Award, GraduationCap } from 'lucide-react';

type ExperienceSectionProps = {
  education: Education[];
  achievements: Achievement[];
};

export function ExperienceSection({ education, achievements }: ExperienceSectionProps) {
  return (
    <section>
      <div className="space-y-8">
        {education.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Education</h3>
            <div className="relative border-l-2 border-primary/20 pl-6 space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[38px] top-1.5 h-6 w-6 rounded-full bg-card flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <GraduationCap className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">{edu.startYear} - {edu.endYear}</p>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-foreground/80">{edu.field}</p>
                  <p className="text-sm text-foreground/60">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {achievements.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Achievements</h3>
             <div className="relative border-l-2 border-accent/20 pl-6 space-y-6">
              {achievements.map((ach) => (
                <div key={ach.id} className="relative">
                 <div className="absolute -left-[38px] top-1.5 h-6 w-6 rounded-full bg-card flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <Award className="h-3 w-3 text-accent" />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">{ach.year}</p>
                  <h4 className="font-semibold">{ach.title}</h4>
                  <p className="text-sm text-foreground/80">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
