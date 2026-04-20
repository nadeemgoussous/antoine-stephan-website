import Image from "next/image";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  type: string;
  thumbnail: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="card group cursor-pointer"
      id={`project-${project.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="text-background-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-body-sm font-medium tracking-wide">
            View Project
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-h3 font-serif mb-2">{project.title}</h3>
        <p className="text-body-sm text-text-light mb-1">
          {project.location} • {project.year}
        </p>
        <p className="text-body-sm text-accent font-medium">{project.type}</p>
      </div>
    </div>
  );
}
