"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
  House,
  Globe,
  FlaskConical,
  NotebookPen,
  Mic,
  Bell,
} from "lucide-react";

const links = [
  {
    name: "Learning Hub",
    href: "/dashboard",
    icon: House,
  },
  {
    name: "AI Worlds",
    href: "/worlds",
    icon: Globe,
  },
  {
    name: "AI Lab",
    href: "/lab",
    icon: FlaskConical,
  },
  {
    name: "Journal",
    href: "/journal",
    icon: NotebookPen,
  },
  {
    name: "Interview",
    href: "/interview",
    icon: Mic,
  },
];

export default function Navbar() {
  return (
    <nav className="mb-10 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl">

      <h1 className="text-2xl font-black text-cyan-400">
        AIVerse
      </h1>

      <div className="hidden gap-8 lg:flex">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-gray-300 transition hover:text-cyan-400"
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-5">
        <Bell
          className="cursor-pointer text-gray-400 hover:text-white"
          size={20}
        />

        <UserButton 
          showName
          appearance={{
            elements:{
                avatarBox: "h-10 w-10",
                userButtonBox: "gap-3",
            },
          }} />
      </div>
    </nav>
  );
}