"use client";

import { useState } from "react";

export function Gallery() {
  const [isTrue, setIsTrue] = useState(false);
  function handleIsTrue() {
    setIsTrue(!isTrue);
  }
  return (
    <div>
      <button onClick={() => handleIsTrue}>CLica</button>
      //{isTrue}
    </div>
  );
}
