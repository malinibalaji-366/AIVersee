import { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-4
      text-white
      outline-none
      transition-all
      focus:border-cyan-400
      focus:ring-2
      focus:ring-cyan-400/30
      placeholder:text-gray-500
      disabled:opacity-50
      "
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;