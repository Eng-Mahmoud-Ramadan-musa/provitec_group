import Image from "next/image";

export default function Logo() {
  return (
      <div className="w-24 h-10 overflow-hidden relative border rounded-sm">
        <Image src="/logo.jpeg" alt="Logo" fill className="object-cover" />
      </div>
  )
}