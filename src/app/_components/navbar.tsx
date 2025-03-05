"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ListChecks, UserPlus } from "lucide-react";
import clsx from "clsx";

const navbarItems = [
  { href: "/dashboard", icon: LayoutDashboard },
  { href: "/kanban", icon: ListChecks },
  { href: "/user-onboarding", icon: UserPlus },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center bg-white shadow-lg">
      <nav className="flex flex-col space-y-6 mt-10">
        {navbarItems.map(({ href, icon: Icon }) => (
          <Link key={href} href={href} className="block">
            <div
              className={clsx(
                "flex items-center justify-center w-12 h-12 rounded-lg transition-all",
                pathname === href
                  ? "bg-gray-200 text-blue-500"
                  : "hover:bg-gray-100 text-gray-600"
              )}
            >
              <Icon className="w-6 h-6" />
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
