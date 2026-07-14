"use client";

import useAppSound from "@/app/hooks/useAppSound";
import { Cover } from "./ui/cover";

const links = [
  { label: "GitHub", href: "https://github.com/rikhtaa", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/rekhta-menahil", icon: <LinkedinIcon /> },
  { label: "Instagram", href: "https://instagram.com/rikhtamenahil", icon: <InstagramIcon /> },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=rikhtamenahil@gmail.com", icon: <MailIcon /> }
];

export function Contact() {
  const [play] = useAppSound("/sounds/unused_sound.mp3");

  return (
    <div
      className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-[20] w-full mx-auto flex flex-col items-center
             rounded-none md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-input my-16 sm:my-24 lg:my-28"
      id="contact"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-200 text-center">
        Let&apos;s <Cover>Connect</Cover>
      </h2>

      <p className="mt-3 sm:mt-4 text-neutral-400 text-sm sm:text-base text-center max-w-md">
        Feel free to reach out on whichever platform works best for you.
      </p>

      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {links.map((link) => (
          <a
            onClick={() => play()}
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-neutral-700
                   text-neutral-300 text-xs sm:text-sm font-medium
                   hover:border-blue-500 hover:text-white hover:scale-105
                   transition-all duration-300"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.05 3.29 9.33 7.86 10.84.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .3.21.66.79.55A10.53 10.53 0 0 0 23.5 12.03C23.5 5.74 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}