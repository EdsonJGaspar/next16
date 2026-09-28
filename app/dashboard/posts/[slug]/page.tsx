import { ImageWidht } from "@/components/web/image";
import { getPost } from "@/lib/data";

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
        <ImageWidht />
      </section>
    </main>
  );
}
