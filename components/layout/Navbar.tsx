"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Menu,
  X,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const topicNavigation = [
  {
    name: "ACL Prevention",
    href: "/acl-prevention",
  },
  {
    name: "Hormones & Performance",
    href: "/hormones-performance",
  },
  {
    name: "RED-S",
    href: "/reds",
  },
  {
    name: "Youth Sports",
    href: "/youth-sports",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-new.png"
              alt="Female Sports Medicine Hub"
              width={58}
              height={58}
              className="h-14 w-auto"
              priority
            />

            <div className="hidden md:block">
              <h1 className="font-bold leading-none text-slate-900">
                Female Sports Medicine Hub
              </h1>

              <p className="text-xs uppercase tracking-widest text-slate-500">
                Research • Education • Injury Prevention
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">

            {/* Female Sports Topics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTopicsOpen(true)}
              onMouseLeave={() => setTopicsOpen(false)}
            >
              <button
                onClick={() => setTopicsOpen(!topicsOpen)}
                className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-sky-600"
              >
                Female Sports Topics
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    topicsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {topicsOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    {topicNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Media */}
            <Link
              href="/media"
              className="font-medium text-slate-700 transition hover:text-sky-600"
            >
              Media
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="font-medium text-slate-700 transition hover:text-sky-600"
            >
              About
            </Link>

            {/* Request Training */}
            <Link href="/training">
              <Button className="rounded-full bg-sky-600 px-7 py-6 text-white font-semibold shadow-md transition-all hover:bg-sky-700 hover:shadow-lg">
                <CalendarDays className="mr-2 h-4 w-4" />
                Request a Free Training
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 lg:hidden">
          <nav className="flex flex-col">

            {/* Female Sports Topics */}
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              className="flex items-center justify-between border-b border-slate-200 px-8 py-5 text-left text-lg font-medium text-slate-800 hover:bg-slate-100"
            >
              <span>Female Sports Topics</span>

              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  topicsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {topicsOpen && (
              <div className="bg-slate-50">
                {topicNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-slate-200 px-12 py-4 text-base font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Media */}
            <Link
              href="/media"
              onClick={() => setMobileOpen(false)}
              className="border-b border-slate-200 px-8 py-5 text-lg font-medium text-slate-800 hover:bg-slate-100"
            >
              Media
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="border-b border-slate-200 px-8 py-5 text-lg font-medium text-slate-800 hover:bg-slate-100"
            >
              About
            </Link>

            {/* Request Training */}
            <div className="p-8">
              <Link
                href="/training"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="w-full rounded-full bg-sky-600 text-white hover:bg-sky-700">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Request a Free Training
                </Button>
              </Link>
            </div>

          </nav>
        </div>
      )}
    </>
  );
}