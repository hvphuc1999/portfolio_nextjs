"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks } from "@/components/Header";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 text-lg">
      {menuLinks.map((link, index) => (
        <Link key={index} href={link.path} className={cn("capitalize font-medium hover:text-accent transition-all", {
          "text-accent border-b-2 border-accent": pathname === link.path,
        })}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
