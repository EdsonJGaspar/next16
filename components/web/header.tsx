import Link from "next/link";

export function Header() {
  return (
    <div className="h-dvh w-8 md:w-32 text-slate-700 font-semibold flex flex-col border-r-2 justify-between">
      <div className="flex flex-col gap-5">
        <Link href={"/"}>Home</Link>
        <nav className="space-x-5 flex flex-col gap-1.5">
          <Link
            href={"/dashboard/costumers"}
            className="hover:bg-slate-400 hover:text-slate-100 transition-all duration-300 w-full px-0.5 py-1.5"
          >
            Constumers
          </Link>
          <Link
            href={"/dashboard/invoices"}
            className="hover:bg-slate-400 hover:text-slate-100 transition-all duration-300 w-full px-0.5 py-1.5"
          >
            Invoices
          </Link>
        </nav>
      </div>
      <div className="">
        <footer>Paulo</footer>
      </div>
    </div>
  );
}
