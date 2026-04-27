"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[#0a0612]/70 border-b border-white/5"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link
          href="#top"
          className="flex items-center gap-2"
          aria-label="Reverie Dreams — back to top"
        >
          <Image
            src="/logos/wordmark.png"
            alt="Reverie"
            width={140}
            height={32}
            priority
            className="h-7 w-auto opacity-90"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.78rem] uppercase tracking-[0.24em] text-text-secondary hover:text-text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-secondary hover:text-text-primary"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-2 backdrop-blur-xl bg-[#0a0612]/85 border-t border-white/5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.24em] text-text-secondary hover:text-text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
