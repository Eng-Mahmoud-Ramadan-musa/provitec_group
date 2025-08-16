import { BiUserCircle, BiUserPlus } from "react-icons/bi";
import Link from "next/link";

export default function AuthControl() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-2">
      <Link 
        href='/auth/signin' 
        className="px-1 rounded-sm flex bg-button  cursor-pointer w-24 gap-1 h-8 hover:border-2 hover:border-white hover:bg-background2  hover:text-white transition-all duration-200 ease-linear"
        >
        <BiUserCircle className="text-white duration-200 ease-linear my-auto" size={20} />
        <span className="my-auto">
          signin
        </span>
      </Link>
      <Link 
        href='/auth/signup'
        className="px-1 flex bg-button cursor-pointer w-24 gap-1 h-8 rounded-sm hover:border-2 hover:border-white hover:bg-background2 hover:text-white transition-all duration-200 ease-linear"
  >
      <BiUserPlus className="text-white duration-200 ease-linear my-auto" size={20} />
        <span className="my-auto">
          signup
        </span>
      </Link>
    </div>
  )
}
