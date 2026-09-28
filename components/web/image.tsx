"use client";

import Image from "next/image";

export function ImageWidht() {
  return (
    <Image
      src={"/images/alicate-flux.jpeg"}
      width={200}
      height={155}
      alt=""
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}
