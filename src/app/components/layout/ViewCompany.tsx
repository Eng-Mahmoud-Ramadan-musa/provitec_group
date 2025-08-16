import Image from "next/image";
import React from "react";
import Carousel from "../ui/carousel";
import Link from "next/link";


type Project = {
  title: string;
  image: string;
};

type Company = {
  title: string;
  image: string;
  projects: Project[];
};

const COMPANIES: Company[] = [
  {
    title: "Elevators",
    image: "/elevators",
    projects: [
      { title: "Project 1", image: "/e2.jpg" },
      { title: "Project 2", image: "/e3.jpg" },
      { title: "Project 3", image: "/e4.jpg" },
      { title: "Project 4", image: "/e5.jpg" },
      { title: "Project 5", image: "/e6.jpg" },
      { title: "Project 6", image: "/e2.jpg" },
      { title: "Project 7", image: "/e3.jpg" },
      { title: "Project 8", image: "/e4.jpg" },
      { title: "Project 9", image: "/e5.jpg" },
      { title: "Project 10", image: "/e6.jpg" },
      { title: "Project 11", image: "/e2.jpg" },
      { title: "Project 12", image: "/e3.jpg" },
      { title: "Project 13", image: "/e4.jpg" },
      { title: "Project 14", image: "/e5.jpg" },
      { title: "Project 15", image: "/e6.jpg" },
    ],
  },
  {
    title: "Conditioning",
    image: "/conditioning",
    projects: [
      { title: "Project 1", image: "/c2.jpg" },
      { title: "Project 2", image: "/c3.jpg" },
      { title: "Project 3", image: "/c4.jpg" },
      { title: "Project 4", image: "/c5.jpg" },
      { title: "Project 5", image: "/c6.jpg" },
      { title: "Project 6", image: "/c2.jpg" },
      { title: "Project 7", image: "/c3.jpg" },
      { title: "Project 8", image: "/c4.jpg" },
      { title: "Project 9", image: "/c5.jpg" },
      { title: "Project 10", image: "/c6.jpg" },
      { title: "Project 11", image: "/c2.jpg" },
      { title: "Project 12", image: "/c3.jpg" },
      { title: "Project 13", image: "/c4.jpg" },
      { title: "Project 14", image: "/c5.jpg" },
      { title: "Project 15", image: "/c6.jpg" },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative flex-shrink-0 w-full h-92 overflow-hidden rounded-lg group">
    <Image
      src={project.image}
      alt={project.title}
      fill
      loading="lazy"
      quality={85}
      className="object-cover px-1 transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-lg font-semibold">{project.title}</h3>
    </div>
  </div>
);
// سيكشن الشركة
const CompanySection: React.FC<{ company: Company }> = ({ company }) => (
  <div className="w-full overflow-hidden" data-aos="fade-up">
    <div className="flex items-center justify-between px-2 mb-4">
      <h2 className="text-2xl font-bold text-white">{company.title}</h2>
      <Link
        href={`/branch/${company.title.toLowerCase()}`}
        className="text-white hover:scale-105 duration-200 ease-linear underline hover:text-blue-300 transition-colors"
        aria-label={`View ${company.title} branch`}
      >
        View Branch
      </Link>
    </div>

    {/* Carousel بـ children */}
    <Carousel className="h-[400px] pt-1" autoSlideInterval={5000}>
      {company.projects.map((project, pIdx) => (
        <ProjectCard key={`${company.title}-${pIdx}`} project={project} />
      ))}
    </Carousel>
  </div>
);

export default function ViewCompany() {
  return (
    <div className="space-y-12 w-full overflow-hidden px-4 py-8">
      {COMPANIES.map((company) => (
        <CompanySection key={company.title} company={company} />
      ))}
    </div>
  );
}
