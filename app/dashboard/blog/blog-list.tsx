"use client";
import { use } from "react";

interface BlogProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export function BlogList({ posts }: { posts: Promise<BlogProps[]> }) {
  const allPosts = use(posts);
  return (
    <div>
      <ul className="p-6 space-y-2"></ul>
      {allPosts.map((post, i) => (
        <li key={i}>
          <h2 className="text-lg font-medium ">{post.title} </h2>
          <p>{post.content}</p>
          <p className="space-x-3">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </p>
        </li>
      ))}
    </div>
  );
}
