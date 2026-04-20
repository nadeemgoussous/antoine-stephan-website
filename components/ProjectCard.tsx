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
      {/* Placeholder for project thumbnail */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white/30 text-3xl font-serif">
          {project.title}
        </div>
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
