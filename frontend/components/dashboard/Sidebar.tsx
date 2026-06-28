"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  House,
  Globe,
  FlaskConical,
  NotebookPen,
  Bot,
  Mic,
  Settings,
} from "lucide-react";

const links = [
  { name: "Learning Hub", href: "/dashboard", icon: House },
  { name: "AI Worlds", href: "/worlds", icon: Globe },
  { name: "AI Lab", href: "/lab", icon: FlaskConical },
  { name: "Journal", href: "/journal", icon: NotebookPen },
  { name: "Arivu", href: "/arivu", icon: Bot },
  { name: "Interview", href: "/interview", icon: Mic },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { user } = useUser();
  return (
    <aside className="w-72 shrink-0 border-r border-white/10 bg-white/5 p-6 backdrop-blur-xl flex flex-col justify-between">

      <div>
        <div className="mb-10">
          <div className="flex items-center gap-3">

  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 text-lg font-black shadow-lg shadow-cyan-500/20">
    AI
  </div>

  <div>
    <h1 className="text-2xl font-black text-white">
      AIVerse
    </h1>

    <p className="text-xs text-gray-400">
      Learn • Build • Grow
    </p>
  </div>

</div>
        </div>

        <nav className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                    flex items-center gap-3 rounded-2xl px-4 py-3
                    transition-all duration-300
                    ${
                    pathname === link.href
                      ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 shadow-lg shadow-cyan-500/10"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon size={20} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
        <div>
    <p className="font-semibold">
      {user?.firstName || "Explorer"}
    </p>

    <p className="text-xs text-gray-400">
      AI Explorer
    </p>
  </div>

        <UserButton 
          showName
          appearance={{
            elements:{
                avatarBox: "h-10 w-10",
                userButtonBox: "gap-3",
            },
          }} />
      </div>
    </aside>
  );
}