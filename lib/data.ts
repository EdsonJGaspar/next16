import { PostsProp, PostsProps } from "./definitions";

export async function getPost(id: string): Promise<PostsProp> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar dado!");
  }

  const data: PostsProp = await response.json();

  return data;
}

export async function getAllPosts(): Promise<PostsProps> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Falha na busca dos Posts");
  }

  const data: PostsProps = await response.json();

  return data;
}

export async function getPosts() {
  const response = await fetch("https://api.vercel.app/blog");

  if (!response.ok) {
    throw new Error("Falha na requisição dos posts");
  }
  const data = await response.json();
  return data;
}
