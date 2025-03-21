"use client";

import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="bg-white/90 backdrop-blur backdrop-filter sticky top-0 z-10 py-6 w-full">
      <div className="container mx-auto">
        <nav className="flex items-center space-x-4 justify-between text-sm uppercase tracking-widest">
          <Link
            className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
            href="#about"
          >
            About
          </Link>
          <Link
            className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
