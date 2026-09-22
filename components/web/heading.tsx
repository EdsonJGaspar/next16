"use client";
import { ComponentProps, useContext } from "react";
import { LevelContext } from "../../lib/levelContexto";

type HeadingProps = ComponentProps<"h3">;

export function Heading({ children }: HeadingProps) {
  const level = useContext(LevelContext);
  return (
    <>
      {level === 1 && <h1 className="text-7xl">{children}</h1>}
      {level === 2 && <h2 className="text-4xl">{children}</h2>}
      {level === 3 && <h3 className="text-3xl">{children}</h3>}
      {level === 4 && <h4 className="text-2xl">{children}</h4>}
      {level === 5 && <h5 className="text-xl">{children}</h5>}
      {level === 6 && <h6 className="text-lg">{children}</h6>}
    </>
  );
}
