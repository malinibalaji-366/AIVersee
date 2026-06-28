type CircularProgressProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
};

export default function CircularProgress({
  value,
  size = 120,
  strokeWidth = 10,
  label,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (Math.min(value, 100) / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.8s ease",
          }}
        />

        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="-mt-20 text-center">
        <p className="text-3xl font-black">
          {value}%
        </p>

        {label && (
          <p className="mt-1 text-sm text-gray-400">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}