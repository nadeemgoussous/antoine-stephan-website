import Link from "next/link";
import Image from "next/image";

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Contemporary Villa",
    location: "Amman, Jordan",
    year: "2025",
    image: "/images/villa-amman-exterior.jpg",
  },
  {
    id: 2,
    title: "Café Bateel",
    location: "Abdoun, Amman",
    year: "2024",
    image: "/images/cafe-bateel-counter.jpg",
  },
  {
    id: 3,
    title: "Bathroom Renovation",
    location: "Amman, Jordan",
    year: "2025",
    image: "/images/renovation-bathroom.jpg",
  },
  {
    id: 4,
    title: "Classical Residence",
    location: "Amman, Jordan",
    year: "2025",
    image: "/images/villa-classical-living-room.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-primary-light">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />

        <Image
          src="/images/villa-amman-exterior.jpg"
          alt="Contemporary villa exterior — Amman"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 text-center text-background-white px-6">
          <h1 className="text-display font-serif mb-6 text-balance">
            Antoine Stephan
          </h1>
          <p className="text-h3 font-light mb-8 text-balance">
            Creating Timeless Spaces for 45+ Years
          </p>
          <Link href="/portfolio" className="btn-accent bg-accent text-background-white border-accent hover:bg-accent-dark">
            View Portfolio
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-serif mb-4">Featured Projects</h2>
            <p className="text-body text-text-light max-w-2xl mx-auto">
              A curated selection of recent works showcasing timeless design and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio#project-${project.id}`}
                className="card group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-h3 font-serif mb-2">{project.title}</h3>
                  <p className="text-body-sm text-text-light">
                    {project.location} • {project.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Introduction Section */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Portrait Photo */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/30 text-4xl font-serif">
                  Portrait
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-h1 font-serif">Crafting Spaces with Soul</h2>
              <p className="text-body text-text-light leading-relaxed">
                With over 45 years of experience in interior design, I bring a unique perspective
                forged through my education in Rome and refined through decades of practice across Jordan
                and the region. Every space tells a story, and my passion lies in creating environments
                that not only look beautiful but feel right.
              </p>
              <p className="text-body text-text-light leading-relaxed">
                From intimate residential villas to grand hotels and commercial spaces, my approach remains
                consistent: listen deeply, design thoughtfully, and execute flawlessly. Over 80 completed
                projects stand as testament to this commitment.
              </p>
              <Link href="/about" className="link-underline text-accent font-medium inline-block">
                Learn more about my journey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-accent text-background-white">
        <div className="container-custom text-center">
          <h2 className="text-h1 font-serif mb-6">Let's Create Something Beautiful</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Whether you're envisioning a complete renovation or seeking expert guidance,
            I'd love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:stephan.dec@hotmail.com" className="btn-primary bg-background-white text-primary border-background-white hover:bg-transparent hover:text-background-white">
              Email Me
            </a>
            <a href="tel:+962795535893" className="text-body-sm hover:underline">
              +962 79 553 5893
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
