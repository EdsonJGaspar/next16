"use client";
import { getPost } from "@/lib/data";
import Image from "next/image";

interface PostsBlogSlugProps {
  params: Promise<{ slug: string }>;
}

export default async function PostsBlogSlug({ params }: PostsBlogSlugProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <main>
      <section>
        <div className="">
          <span>Id do Usuario: #{post.userId}</span>
          <h3>
            {post.title} <span>Post numero #{post.id}</span>
          </h3>
        </div>
        <p>{post.body}</p>
      </section>
      <section>
        <Image
          src={"/images/alicate-flux.jpeg"}
          width={200}
          height={155}
          alt=""
          className="pointer-events-none select-none"
          onContextMenu={(e) => e.preventDefault()}
        />
      </section>
    </main>
  );
}
