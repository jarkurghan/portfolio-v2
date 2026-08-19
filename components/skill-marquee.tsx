import { skillList } from "@/lib/content";

export function SkillMarquee() {
  const skills = skillList();
  const loop = [...skills, ...skills];

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-bg-card py-4">
      <div className="marquee-track gap-8 px-6">
        {loop.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono text-sm whitespace-nowrap text-muted"
          >
            <span className="text-cyan">◆</span> {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
