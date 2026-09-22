"use client";

import { clsx } from "cn";
import { HomeIcon, StickyNote, User, UserGroupIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Costumers", href: "/dashboard/costumers", icon: User },
  { name: "Invoices", href: "/dashboard/invoices", icon: UserGroupIcon },
  { name: "Posts", href: "/dashboard/posts", icon: StickyNote },
];

export function Header() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="h-dvh w-14 hover:w-44 text-slate-700 font-semibold flex flex-col justify-between transition-all duration-300 group overflow-hidden">
      <div className="flex flex-col gap-5">
        <Link href={"/"}>Home</Link>
        <nav className="flex flex-col gap-2 ">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  `hover:bg-slate-300 hover:text-slate-800 font-medium w-full px-2 
                py-1 transition-colors duration-300 flex gap-3 items-center`,
                  {
                    "bg-slate-400 text-slate-200": pathName == link.href,
                  },
                )}
              >
                <LinkIcon className="w-6 shrink-0" />
                <p className="hidden group-hover:block whitespace-nowrap">
                  {link.name}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="">
        <footer>Paulo</footer>
      </div>
    </div>
  );
}
