'use client'
import { useState } from "react";
import AuthControl from "../ui/header/AuthControl";
import Logo from "../ui/header/Logo";
import Nav from "../ui/header/Nav";
import ProfileControl from "../ui/header/ProfileControl";
import { IoClose, IoMenu } from "react-icons/io5";
import { cn } from "@/app/utils/cn";

export default function Header() {
    const auth = false
    const [open, setOpen] = useState(false)
  return (
    <header className="flex flex-col items-center justify-between fixed top-0 border-b left-0 z-50 bg-[#1f2b53] w-full px-5 py-2 gap-2">
        <div className="flex items-center justify-between w-full">
        <Logo />
        <div className="md:flex hidden items-center justify-between gap-2 sm:gap-0 w-full md:w-3/4 lg:w-2/3">
            <Nav />
            {auth ? <ProfileControl /> : <AuthControl />}
        </div>
            <button onClick={() => setOpen(!open)} className="block md:hidden w-8 h-8 cursor-pointer hover:bg-white/30 transition-all duration-200 ease-linear ps-2 rounded-sm">
                {open ? <IoClose size={20} /> : <IoMenu size={20} />}
            </button>
        </div>
        <div className={cn("flex items-center md:hidden bg-[#1f2b53] w-full px-5 py-2 gap-2", open ? "flex-col h-screen transition-all duration-300 ease-linear" : "hidden h-0 transition-all duration-300 ease-linear")}>
            <Nav />
            {auth ? <ProfileControl /> : <AuthControl />}
        </div>
    </header>
  )
}
