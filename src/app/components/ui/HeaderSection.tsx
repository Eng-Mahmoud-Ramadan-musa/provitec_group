
export default function HeaderSection({title}: {title: string}) {

  return (
    <div className="px-4 rounded-lg bg-green-500 text-white font-bold">
      <h2 className="text-2xl">{title}</h2>
    </div>
  )
}
