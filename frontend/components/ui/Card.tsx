type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      shadow-xl
      "
    >
      {children}
    </div>
  );
}