import type { Skill } from '@/types';
import { Badge } from '@/components/ui/badge';

type SkillsSectionProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories: Skill['category'][] = ['Language', 'Framework', 'Tool', 'Platform', 'Other'];
  
  const groupedSkills = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  })).filter(group => group.skills.length > 0);

  return (
    <section>
      <h3 className="text-2xl font-bold text-primary mb-4">Skills & Expertise</h3>
      <div className="space-y-4">
        {groupedSkills.map(group => (
          <div key={group.category}>
            <h4 className="font-semibold text-sm text-foreground/70 mb-2">{group.category}s</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill.id} variant="secondary" className="text-sm py-1 px-3">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
