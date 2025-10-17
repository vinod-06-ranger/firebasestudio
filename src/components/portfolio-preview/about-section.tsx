type AboutSectionProps = {
  bio: string;
};

export function AboutSection({ bio }: AboutSectionProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
      <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">{bio}</p>
    </section>
  );
}
