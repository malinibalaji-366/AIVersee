"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Logo from "@/components/layout/logo";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Background Glow */}
{/* Animated Cyan Glow */}
<motion.div
  animate={{
    x: [0, 30, 0],
    y: [0, 20, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
/>
{/* Center Glow */}
<div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
{/* Animated Purple Glow */}
<motion.div
  animate={{
    x: [0, -30, 0],
    y: [0, -20, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
/>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-lg"
      >
        <Card>

          <h1 className="text-center text-3xl md:text-5xl font-black">
            {title}
          </h1>

          <p className="mt-4 text-center text-gray-400">
            {subtitle}
          </p>

          <div className="mt-10">
            {children}
          </div>

        </Card>
        <div className="mb-8 flex justify-center">
  <Logo />
</div>
      </motion.div>
    </main>
  );
}