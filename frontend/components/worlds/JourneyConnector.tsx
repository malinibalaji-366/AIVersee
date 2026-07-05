type Props = {
  unlocked?: boolean;
};

export default function JourneyConnector({
  unlocked = false,
}: Props) {
  return (
    <div className="flex flex-col items-center py-4">

      <div
        className={`
          h-16 w-1 rounded-full
          ${
            unlocked
              ? "bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              : "bg-white/10"
          }
        `}
      />

      <div
        className={`
          mt-2 h-4 w-4 rotate-45
          ${
            unlocked
              ? "bg-cyan-400"
              : "bg-white/20"
          }
        `}
      />

    </div>
  );
}