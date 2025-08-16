'use client'

import Link from "next/link"
import { GiShoppingCart } from "react-icons/gi"
import { IoMailSharp } from "react-icons/io5"
import { Avatar, AvatarImage } from "../avatar"

export default function ProfileControl() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-2">
      <Link href="/mails">
        <div className="w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-md flex items-center justify-center transition-all duration-200 cursor-pointer">
          <IoMailSharp size={18} className="text-white" />
        </div>
      </Link>

      <Link href="/user/cart">
        <div className="w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-md flex items-center justify-center transition-all duration-200 cursor-pointer">
          <GiShoppingCart size={18} className="text-white" />
        </div>
      </Link>

      <Link href="/user">
        <Avatar className="w-8 h-8 border-2 border-white shadow-md overflow-hidden">
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s" />
        </Avatar>
      </Link>
    </div>
  )
}
