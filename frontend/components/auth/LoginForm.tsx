"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialButtons from "./SocialButtons";

export default function LoginForm() {
  return (
    <form className="space-y-5">

      <Input
        type="email"
        placeholder="Enter your email"
      />

      <Input
        type="password"
        placeholder="Password"
      />
        <div className="flex justify-end">
            <button 
                 type="button"
                    className="text-sm text-gray-400 transition hover:text-cyan-400"
            >
              Forgot Password?
            </button>
          </div>
      <Button className="w-full">
        Continue
      </Button>
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10"></div>
      <span className="text-center text-gray-500">
        OR
      </span>
            <div className="h-px flex-1 bg-white/10"></div>
        </div>

      <SocialButtons />
    <div className="pt-6 text-center text-sm text-gray-400">
  New to AIVerse?{" "}
  <a
    href="/signup"
    className="font-semibold text-cyan-400 hover:underline"
  >
    Begin Your Journey →
  </a>
</div>
    </form>
  );
}