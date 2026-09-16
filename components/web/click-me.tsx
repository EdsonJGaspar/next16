"use client";
import clsx from "clsx";
import { useState } from "react";

export function ClickMe() {
  const [liked, setLiked] = useState(0);
  const [click, setCLick] = useState(false);

  const handleLike = () => {
    setLiked(liked + 1);
    setCLick(true);
  };

  console.log(click);

  return (
    <div className="ml-5 my-3 border flex items-center flex-col">
      <p>{liked} likes</p>
      <button
        onClick={handleLike}
        className={clsx(
          "border rounded-xl px-4 py-1 bg-slate-600  text-slate-100 border-slate-500 hover:bg-slate-700 transition-colors duration-300 cursor-pointer",
        )}
      >
        Like
      </button>
    </div>
  );
}
