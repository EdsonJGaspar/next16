import { getAllPosts } from "@/lib/data";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <main>
      <h3>Envoices Page</h3>
      <ul>
        {posts.map((post) => {
          return (
            <Link
              key={post.id}
              href={String(`posts/${post.id}`)}
              className="space-y-2 border bg-slate-300 hover:bg-slate-400 hover:cursor-pointer transition-all duration-300 "
            >
              <h2>
                {post.title} {post.id}
              </h2>
              <p>{post.body}</p>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
