'use client'
import { useState } from "react";
import AuthControl from "../ui/header/AuthControl";
import Logo from "../ui/header/Logo";
import Nav from "../ui/header/Nav";
import ProfileControl from "../ui/header/ProfileControl";
import { IoClose, IoMenu } from "react-icons/io5";
import { cn } from "@/app/utils/cn";

export default function Header() {
  const auth = false;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#1f2b53] border-b px-5 py-2">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <Nav />
        </div>

        {/* Desktop Auth/Profile */}
        <div className="hidden md:flex items-center justify-end gap-4">
          {auth ? <ProfileControl /> : <AuthControl />}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden text-text w-8 h-8 cursor-pointer hover:bg-white/30 transition-all duration-200 ease-linear ps-2 rounded-sm"
        >
          {open ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden flex-col bg-[#1f2b53] w-full px-5 py-4 gap-4 overflow-hidden transition-all duration-300 ease-linear",
          open ? "flex h-[calc(100vh-56px)]" : "hidden h-0"
        )}
      >
        <Nav />
        {auth ? <ProfileControl /> : <AuthControl />}
      </div>
    </header>
  );
}
