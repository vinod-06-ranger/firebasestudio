import type { Strength } from '@/types';
import { Badge } from '@/components/ui/badge';

type StrengthsSectionProps = {
  strengths: Strength[];
};

export function StrengthsSection({ strengths }: StrengthsSectionProps) {
  const categories: Strength['category'][] = ['Personal', 'Programming'];
  
  const groupedStrengths = categories.map(category => ({
    category,
    strengths: strengths.filter(s => s.category === category)
  })).filter(group => group.strengths.length > 0);

  return (
    <section>
      <h3 className="text-2xl font-bold text-primary mb-4">Strengths</h3>
      <div className="space-y-4">
        {groupedStrengths.map(group => (
          <div key={group.category}>
            <h4 className="font-semibold text-sm text-foreground/70 mb-2">{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.strengths.map((strength) => (
                <Badge key={strength.id} variant="secondary" className="text-sm py-1 px-3">
                  {strength.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
