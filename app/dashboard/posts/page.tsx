import { getAllPosts } from "@/lib/data";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <main>
      <h3 className="text-center my-6">Envoices Page</h3>
      <div className="max-w-11/12 mx-auto ">
        <ul>
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                href={String(`posts/${post.id}`)}
                className="space-y-2  bg-slate-300 hover:bg-slate-400 hover:cursor-pointer transition-all duration-300 "
              >
                <h2>
                  {post.title} {post.id}
                </h2>
                <p>{post.body}</p>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
