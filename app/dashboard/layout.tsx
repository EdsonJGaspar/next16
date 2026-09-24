import { Header } from "@/components/web/header";
import { ReactNode } from "react";

export default function LayoutDashboard({ children }: { children: ReactNode }) {
  return (
    <div className="flex ">
      <Header />
      <div>{children}</div>
    </div>
  );
}
