"use client"
import Link from "next/link";
import { Volume2, VolumeX } from 'lucide-react'
import { useSoundContext } from "@/app/context/SoundContext";
import useAppSound from "@/app/hooks/useAppSound";

export function HeroNav() {
  const { soundOn, setSoundOn } = useSoundContext();
  const [play] = useAppSound("/sounds/lick_sound.mp3");

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center sm:justify-center md:justify-end">
      <nav
        className="
        mt-6 
        px-5 py-2 
        rounded-full 
        border border-white/10 
        bg-white/5 backdrop-blur-md
        
        md:bg-transparent 
        md:border-none 
        md:backdrop-blur-0
        md:rounded-none
        
        flex items-center gap-6 
        text-sm text-neutral-300
        md:mr-10
        "
      >
        <Link href="/" onClick={() => play()} className="hover:text-white transition">HOME</Link>
        <Link href="#about" onClick={() => play()} className="hover:text-white transition">ABOUT</Link>
        <Link href="#contact" onClick={() => play()} className="hover:text-white transition">CONTACT</Link>
        <Link
          onClick={() => play()}
          href="https://drive.google.com/file/d/1j09R40t-zruryho2XYFcDkNB5jDrhwfN/view?usp=sharing"
          className="hover:text-white transition"
        >
          RESUME
        </Link>

        <div className="w-px h-4 bg-white/10" />

        <button
          onClick={() => setSoundOn((p) => !p)}
          aria-label={soundOn ? 'Mute sound' : 'Enable sound'}
          title={soundOn ? 'Mute sound' : 'Enable sound'}
          className="text-neutral-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-sm"
        >
          {soundOn ? <Volume2 size={16} strokeWidth={1.75} /> : <VolumeX size={16} strokeWidth={1.75} />}
        </button>
      </nav>
    </header>
  );
}