import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialButtons() {
    return (
        <div className="mt-6 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-2x1 border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <FcGoogle size={20} />
                Continue with Google
            </button>

            <button className="flex w-full items-center gap-3 rounded-2x1 border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <FaGithub size={20} />
                Continue with GitHub
            </button>
        </div>
    );
}