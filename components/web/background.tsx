import Image from "next/image";
import { ReactNode } from "react";

export function Background({ children }: { children: ReactNode }) {
  return (
    <div>
      <Image
        alt="Imagem de fundo"
        src="/pexels-background.jpg"
        quality={100}
        fill
        className="object-cover z-0 relative"
        sizes="100vw"
      />
      {children}
    </div>
  );
}
