type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || props.disabled}
      className={`
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      px-6
      py-3
      font-semibold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-[1.02]
      hover:shadow-cyan-500/30
      active:scale-95
      disabled:cursor-not-allowed
      disabled:opacity-70
      ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}