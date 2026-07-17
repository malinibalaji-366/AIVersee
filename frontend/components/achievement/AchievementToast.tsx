"use client";
import { Trophy, Sparkles } from "lucide-react";

type Props = {
    title: string;
    xp: number;
};

export default function AchievementToast({
    title,xp,
}: Props){
    return(
        <div className="fixed right-6 top-6 z-50 w-80 rounded-2xl border border-yellow-400/30 bg-zinc-900/95 p-5 shadow-2xl">
            <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-500/10 p-3">
                <Trophy size={28} className="text-yellow-400" />
                </div>
                <div>
                    <h3 className="font-bold">Achievement Unlocked</h3>
                    <p className="text-sm text-gray-400">{title}</p>
                </div>
            </div>
            <div className="mt-4 flex tems-center gap-2 text-yellow-400">
                <Sparkles size={18} />
                +{xp} Sparks
            </div>
        </div>
    )
}