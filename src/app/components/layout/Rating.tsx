import Carousel from "../ui/carousel";
import { AvatarImage, Avatar } from "../ui/avatar";
import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const ratings = [
  {
    id: 1,
    name: "Mahmoud",
    rating: 4.5,
    comment: "We are committed to providing our customers with the best service possible.",
    avatar: "user1.jpg",
  },
  {
    id: 2,
    name: "Saab",
    rating: 4.8,
    comment: "Excellent experience, fast support and great design!",
    avatar: "user2.png",
  },
  {
    id: 3,
    name: "Ahmed",
    rating: 4,
    comment: "Reliable and responsive team. Highly recommended.",
    avatar: "user3.png",
  },  
  {
    id: 4,
    name: "Mahmoud",
    rating: 4.5,
    comment: "We are committed to providing our customers with the best service possible.",
    avatar: "user1.jpg",
  },
  {
    id: 5,
    name: "Saab",
    rating: 4.8,
    comment: "Excellent experience, fast support and great design!",
    avatar: "user2.png",
  },
  {
    id: 6,
    name: "Ahmed",
    rating: 4,
    comment: "Reliable and responsive team. Highly recommended.",
    avatar: "user3.png",
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center text-[gold] text-xl">
      {[...Array(full)].map((_, i) => <BiSolidStar key={`f-${i}`} />)}
      {half && <BiSolidStarHalf key="half" />}
      {[...Array(empty)].map((_, i) => <BiStar key={`e-${i}`} className="text-gray-300" />)}
    </div>
  );
}

function RatingItem({ name, rating, comment, avatar }: typeof ratings[number]) {
  return (
    <div className="min-h-[10rem] p-6 max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-3 text-center">
        <Avatar className="w-16 h-16 border border-background bg-white shadow-sm">
          <AvatarImage src={avatar} alt={name} className="object-cover" />
        </Avatar>
        <h2 className="text-lg font-semibold text-background">{name}</h2>
        {renderStars(rating)}
        <p className="text-sm text-gray-500">{comment}</p>
      </div>
    </div>
  );
}

export default function Rating() {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:w-2/3 mx-auto rounded-xl overflow-hidden shadow-md">
      <h2 className="text-3xl font-bold text-center mb-10">Customers Rating</h2>
      <Carousel
        className="bg-text rounded-lg"
        autoSlideInterval={4000}
        slidesToShow={3}

      >
        {ratings.map((rate) => (
          <RatingItem key={rate.id} {...rate} />
        ))}
      </Carousel>
    </div>
  );
}
