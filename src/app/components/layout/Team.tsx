import SocialIcons from "@/app/config/SocialIcons";
import Image from "next/image";

const team = [
  {
    name: "John Doe",
    image: "/user1.jpg",
    title: "admin elevators",
  },
  {
    name: "Jane Doe",
    image: "/user2.png",
    title: "admin conditioning",
  },
  {
    name: "John Smith",
    image: "/user3.png",
    title: "admin conditioning",
  },
];

export default function Team() {
  return (
    <div className="w-full bg-button text-gray-100 rounded-lg shadow-xl py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 bg-background p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            {/* صورة العضو */}
            <div className="relative w-32 h-32 rounded-full border-2 border-white overflow-hidden shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* اسم + منصب */}
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-300">{member.title}</p>
            <SocialIcons />
          </div>
        ))}
      </div>
    </div>
  );
}
