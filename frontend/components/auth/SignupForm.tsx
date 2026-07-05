"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialButtons from "./SocialButtons";

export default function SignupForm() {
  return (
    <form className="space-y-5">

      <Input
        type="text"
        placeholder="Full Name"
      />

      <Input
        type="email"
        placeholder="Enter your email"
      />

      <Input
        type="password"
        placeholder="Create a password"
      />

      <Input
        type="password"
        placeholder="Confirm password"
      />

      <Button className="w-full">
        Begin Your Journey 🚀
      </Button>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10"></div>

        <span className="text-sm text-gray-500">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      <SocialButtons />

      <div className="pt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-semibold text-cyan-400 hover:underline"
        >
          Welcome Back →
        </a>
      </div>

    </form>
  );
}