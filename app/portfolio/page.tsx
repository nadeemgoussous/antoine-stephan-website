"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "Contemporary Villa",
    location: "Amman, Jordan",
    year: "2025",
    type: "Residential",
    description: "A bold contemporary residence defined by a dramatic vertical timber-and-steel facade with integrated gold LED strips, a floating glass-and-wood staircase, and a rooftop infinity pool overlooking Amman. Every detail — from the stone-clad master bathroom with freestanding tub to the bespoke utility spaces — reflects a rigorous attention to craftsmanship and material quality.",
    thumbnail: "/images/villa-amman-exterior.jpg",
    images: [
      "/images/villa-amman-exterior.jpg",
      "/images/villa-amman-pool.jpg",
      "/images/villa-amman-staircase.jpg",
      "/images/villa-amman-staircase-view.jpg",
      "/images/villa-amman-master-bath.jpg",
      "/images/villa-amman-shower.jpg",
      "/images/villa-amman-bathroom.jpg",
      "/images/villa-amman-vanity.jpg",
      "/images/villa-amman-stone-vanity.jpg",
      "/images/villa-amman-laundry.jpg",
    ],
  },
  {
    id: 2,
    title: "Café Bateel",
    location: "Abdoun, Amman",
    year: "2024",
    type: "Commercial",
    description: "Interior design and fit-out for Café Bateel's Amman location — a premium café and confectionery concept. The design balances the brand's refined identity with warm hospitality: a sculptural oak counter with brass pendant lighting anchors the central space, while curved arched niches and a double-height atrium create an intimate yet airy atmosphere. Custom joinery and restroom finishes maintain the same level of refinement throughout.",
    thumbnail: "/images/cafe-bateel-exterior.jpg",
    images: [
      "/images/cafe-bateel-exterior.jpg",
      "/images/cafe-bateel-counter.jpg",
      "/images/cafe-bateel-atrium.jpg",
      "/images/cafe-bateel-entrance-sign.jpg",
      "/images/cafe-bateel-restroom-vanity.jpg",
      "/images/cafe-bateel-restroom.jpg",
    ],
  },
  {
    id: 3,
    title: "Bathroom Renovation",
    location: "Amman, Jordan",
    year: "2025",
    type: "Residential",
    description: "A complete bathroom renovation guided by hand-drawn design sketches through to finished execution. The project transformed an existing dated bathroom into a refined space featuring natural stone surfaces, a custom floating vanity with warm LED backlit mirror, and bespoke tilework. The process demonstrates the studio's full-service approach — from initial concept drawing to on-site supervision of every finishing detail.",
    thumbnail: "/images/renovation-bathroom.jpg",
    images: [
      "/images/renovation-bathroom.jpg",
      "/images/renovation-sketch.jpg",
      "/images/renovation-plan.jpg",
      "/images/renovation-tiling.jpg",
      "/images/renovation-existing.jpg",
    ],
  },
  {
    id: 4,
    title: "Classical Residence",
    location: "Amman, Jordan",
    year: "2025",
    type: "Residential",
    description: "A classically styled private residence featuring ornate hand-carved wooden millwork, gilded upholstered furnishings, and a bespoke residential lift integrated seamlessly into the formal living space. The design draws on traditional European interior vocabulary while addressing the practical needs of a contemporary Amman household.",
    thumbnail: "/images/villa-classical-living-room.jpg",
    images: [
      "/images/villa-classical-living-room.jpg",
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
