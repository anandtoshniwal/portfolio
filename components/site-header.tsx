"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Icons } from "@/components/icons"; // Add an icon component for the menu toggle

// Define links array
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: '/resume/mayuri_lahoti_resume.pdf'}
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container w-full md:max-w-6xl flex h-16 items-center justify-between px-4">
        {/* Avatar or MainNav */}
        <MainNav items={siteConfig.mainNav} />

        {/* Right-side items with responsive adjustments */}
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                href={link.href}
                target={link.label === 'Resume' ? '_blank' : '_self'}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            <Icons.gitHub className="h-6 w-6" /> {/* Replace with your menu toggle icon */}
          </button>

          {/* Theme Toggle button - visible on all screens */}
          <div className="hidden md:block">
          <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t px-4 py-2">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle inside mobile menu */}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
