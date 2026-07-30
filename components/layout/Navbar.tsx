"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  Menu,
  X,
  CalendarDays,
} from "lucide-react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "ACL Prevention",
    href: "/acl-prevention",
  },
  {
    name: "Hormones",
    href: "/hormones-performance",
  },
  {
    name: "REDs",
    href: "/reds",
  },
  {
    name: "Youth Sports",
    href: "/youth-sports",
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

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
<nav className="hidden lg:flex items-center gap-6 xl:gap-7">            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
className="whitespace-nowrap text-sm font-medium text-slate-800 transition hover:text-sky-600"              >
                {item.name}
              </Link>
            ))}

            <Link href="/training">
              <Button className="rounded-full bg-sky-600 px-7 py-6 text-white font-semibold shadow-md transition-all hover:bg-sky-700 hover:shadow-lg">
                <CalendarDays className="mr-2 h-4 w-4" />
                Request a Free Workshop
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-900"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 lg:hidden">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-slate-200 px-8 py-5 text-lg font-medium text-slate-800 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}

            <div className="p-8">
              <Link
                href="/training"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="w-full rounded-full bg-sky-600 text-white hover:bg-sky-700">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Request a Free Workshop
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}