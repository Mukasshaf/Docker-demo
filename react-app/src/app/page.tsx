import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowRight, Code, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center relative font-sans selection:bg-indigo-500/30">
      {/* Background Sparkles Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      {/* Radial Gradient overlay to prevent sharp edges and add mood */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] opacity-50 pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        

        <h1 className="md:text-7xl text-5xl lg:text-8xl font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tight drop-shadow-sm">
          Build the next <br className="hidden md:block" />
          generation of apps
        </h1>

        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-zinc-400 mx-auto leading-relaxed mb-10">
          Transform your ideas into reality with our powerful suite of developer tools.
          Ship faster, scale effortlessly, and deliver breathtaking user experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
          <Link href="/docs" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-300 transition-all bg-transparent border border-zinc-700/50 rounded-lg hover:bg-zinc-800/50 hover:text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black">
            <Code className="w-5 h-5" />
            View Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}
