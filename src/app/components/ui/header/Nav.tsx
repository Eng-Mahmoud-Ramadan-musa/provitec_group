import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex md:flex-row flex-col gap-2">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-white transition-all border border-transparent duration-200 ease-linear hover:border hover:border-white px-2 py-1 rounded-sm hover:bg-background2">
          {link.label}
        </Link>
      ))}
    </div>
  )
}

const links = [
  { href: "/", label: "Home" },
  { href: "/Elevators", label: "Elevators" },
  { href: "/Conditioning", label: "Conditioning" },
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
]
