"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { useMemo, useState } from "react";

type Milestone = {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
};

export default function MilestonesList({
  milestones,
  baseDelay,
  step = 0.05,
  initialCount = 8,
}: {
  milestones: readonly Milestone[];
  baseDelay: number;
  step?: number;
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(() => {
    if (expanded) return milestones;
    return milestones.slice(0, initialCount);
  }, [expanded, milestones, initialCount]);

  const delayForIndex = (idx: number) => {
    if (!expanded) return baseDelay + idx * step;
    return Math.min(idx * 0.006, 0.06);
  };

  return (
    <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
      {visible.map((project, idx) => (
        <BlurFade
          key={project.title + project.dates}
          delay={delayForIndex(idx)}
        >
          <HackathonCard
            title={project.title}
            description={project.description}
            location={project.location}
            dates={project.dates}
            image={project.image}
            links={project.links}
          />
        </BlurFade>
      ))}
      {milestones.length > initialCount && (
        <BlurFade delay={0} key="milestones-toggle">
          <li className="relative ml-10 py-4 list-none">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center rounded-lg border bg-background px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </li>
        </BlurFade>
      )}
    </ul>
  );
}


