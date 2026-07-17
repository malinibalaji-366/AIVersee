"use client";

import { motion } from "framer-motion";
type Props = {
    size?: number;
};
export default function ArivuAvatar({ size = 80 }: Props)
{
    return (
        <motion.div animate={{
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
        }}
        transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        className="relative flex items-center justify-center">
            <div className="absolute h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute h-28 w-28 rounded-full border border-cyan-400/40 animate-pulse" />
            <div className="absolute-top-3 left-4 h-2 w-2 rounded-full  bg-cyan-300 animate-ping" />
            <div className="absolute-top-6 -right-2 h-2 w-2 rounded-full  bg-cyan-300 animate-bounce" />
            <div className="absolute-bottom-2 left-0 h-2 w-2 rounded-full  bg-cyan-300 animate-pulse" />
            <div className="absolute-bottom-0 right-2 h-2 w-2 rounded-full  bg-cyan-300 animate-ping" />
            <div className="relative flex items-center justify-center rounded-full border border-cyan-400 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.45)]"
                style={{
                    width: size + 20,
                    height: size + 20,
                }}
                >
                    <div className="relative h-16 w-16 rounded-2xl border-2 border-cyan-300 bg-slate-950 "/>
                    <div className="absolute -top-3 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-cyan-300" />
                    <div className="absolute -top-4 left-1/2 h-4 w-2 -translate-x-1/2 rounded-full bg-cyan-300 animate-pulse" />
                    <div className="mt-5 flex justify-center gap-4">
                        <motion.div 
                        animate={{
                            scaleY:[1, 0.04,1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
                        />
                        <motion.div 
                        animate={{
                            scaleY:[1, 0.04,1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
                        />
                      <div className="mx-auto mt-4 h-1 w-6 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />  
                    </div>
            </div>
        </motion.div>
    );
}