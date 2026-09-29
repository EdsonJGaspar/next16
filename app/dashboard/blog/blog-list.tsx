interface BlogProps {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export async function BlogList() {
  const data = await fetch("https://api.vercel.app/blog");
  const blog: BlogProps[] = await data.json();
  return (
    <div>
      <ul className="p-6 space-y-2">
        {blog.map((blog) => (
          <li key={blog.id} className="border rounded-lg px-3 p-1">
            <h3 className="text-lg font-medium flex justify-between items-center">
              {blog.title}
            </h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
