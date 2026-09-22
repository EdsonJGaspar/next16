import { LevelContext } from "@/lib/levelContexto";
import { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  level: number;
}

export function Section({ children, level, ...props }: SectionProps) {
  return (
    <section {...props}>
      <LevelContext value={level}>{children}</LevelContext>
    </section>
  );
}
