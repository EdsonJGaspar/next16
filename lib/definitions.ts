export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: "pendente" | "pago";
};

export type PostsProp = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

export type PostsProps = PostsProp[];
