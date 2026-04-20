"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Beverly Hills, CA",
    year: "2024",
    type: "Residential",
    description: "A contemporary family home that seamlessly blends indoor and outdoor living spaces. The design emphasizes clean lines, natural materials, and abundant natural light, creating a serene sanctuary in the heart of the city.",
    thumbnail: "/images/project-1.jpg",
    images: [
      "/images/project-1-1.jpg",
      "/images/project-1-2.jpg",
      "/images/project-1-3.jpg",
      "/images/project-1-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Manhattan, NY",
    year: "2023",
    type: "Residential",
    description: "An elegant penthouse featuring panoramic city views and sophisticated interiors. Custom millwork, curated art pieces, and luxurious materials create a refined urban retreat.",
    thumbnail: "/images/project-2.jpg",
    images: [
      "/images/project-2-1.jpg",
      "/images/project-2-2.jpg",
      "/images/project-2-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Boutique Hotel",
    location: "Miami, FL",
    year: "2023",
    type: "Hospitality",
    description: "A 50-room boutique hotel that captures the vibrant spirit of Miami while offering guests an intimate, luxurious experience. Each space is designed to create memorable moments.",
    thumbnail: "/images/project-3.jpg",
    images: [
      "/images/project-3-1.jpg",
      "/images/project-3-2.jpg",
      "/images/project-3-3.jpg",
      "/images/project-3-4.jpg",
      "/images/project-3-5.jpg",
    ],
  },
  {
    id: 4,
    title: "Contemporary Office",
    location: "San Francisco, CA",
    year: "2022",
    type: "Commercial",
    description: "A tech company headquarters designed to foster creativity and collaboration. The space features flexible work zones, biophilic design elements, and state-of-the-art amenities.",
    thumbnail: "/images/project-4.jpg",
    images: [
      "/images/project-4-1.jpg",
      "/images/project-4-2.jpg",
      "/images/project-4-3.jpg",
    ],
  },
  {
    id: 5,
    title: "Historic Renovation",
    location: "Charleston, SC",
    year: "2022",
    type: "Residential",
    description: "Careful restoration of a 19th-century townhouse, preserving historic details while introducing modern comfort and functionality.",
    thumbnail: "/images/project-5.jpg",
    images: [
      "/images/project-5-1.jpg",
      "/images/project-5-2.jpg",
      "/images/project-5-3.jpg",
    ],
  },
  {
    id: 6,
    title: "Coastal Villa",
    location: "Malibu, CA",
    year: "2021",
    type: "Residential",
    description: "A stunning oceanfront property designed to maximize views and create a seamless connection with the Pacific coast. Natural textures and a soothing color palette evoke the coastal landscape.",
    thumbnail: "/images/project-6.jpg",
    images: [
      "/images/project-6-1.jpg",
      "/images/project-6-2.jpg",
      "/images/project-6-3.jpg",
      "/images/project-6-4.jpg",
    ],
  },
];

type Category = "All" | "Residential" | "Commercial" | "Hospitality";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories: Category[] = ["All", "Residential", "Commercial", "Hospitality"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.type === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-background-white">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-serif mb-4">Portfolio</h1>
          <p className="text-body text-text-light max-w-2xl mx-auto">
            A collection of spaces designed with purpose, passion, and attention to every detail
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-background py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 border-2 font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? "border-accent bg-accent text-background-white"
                    : "border-primary text-primary hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body text-text-light">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
