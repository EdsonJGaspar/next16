import { Suspense } from "react";
import { BlogList } from "./blog-list";
import { SkelebloListSkeletontonText } from "./blog-list-skeleton";
import { getPosts } from "@/lib/data";

export default async function BlogPage() {
  const posts = getPosts();
  return (
    <div>
      <h1>Pagia de Blogs</h1>
      <p>Leia todos os blogs que tu queiras em qualquer lugar</p>
      <main>
        <Suspense fallback={<SkelebloListSkeletontonText />}>
          <BlogList posts={posts} />
        </Suspense>
      </main>
    </div>
  );
}
