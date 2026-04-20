export default function About() {
  return (
    <>
      {/* Hero Section with Portrait */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Portrait */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/30 text-5xl font-serif">
                  Portrait
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-h1 font-serif">About Me</h1>
              <p className="text-h3 font-light text-accent">
                45 years of creating spaces that inspire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6 text-body text-text-light leading-relaxed">
            <p>
              Born in Amman in 1955, my journey in interior design began over 45 years ago, driven by a simple belief:
              the spaces we inhabit profoundly shape our lives. This philosophy has guided every
              project I've undertaken, from intimate residential retreats to grand commercial venues and hotels.
            </p>

            <p>
              My passion for design led me to Rome, Italy, where I studied at the Academia Di Belle Arti Roma,
              specializing in Interior Design and Decoration. I also earned a Diploma in Scenography from the
              Istituto Di Cultura Pantheon. Those formative years in Rome taught me not just the technical aspects
              of design, but the importance of understanding the soul of a space—its light, proportion, and the
              stories it can tell.
            </p>

            <p>
              Since graduating in 1978, I have been self-employed, establishing my practice in Jordan and founding
              the Stephan Decoration Center. I've never been interested in chasing trends. Instead, I focus
              on understanding the fundamental principles that make a space feel right: proportion,
              light, texture, and flow.
            </p>

            <p>
              Throughout my career, I've had the privilege of working with remarkable clients who
              trusted me with their visions. From private villas and apartments to showrooms, offices,
              hotels, and institutional buildings, I have completed over 80 projects across Jordan and the region.
              Each project has been a collaboration, a conversation between past and present, between aspiration
              and reality.
            </p>

            <p>
              Today, I find myself more passionate about design than ever. The industry has
              evolved dramatically since I began, but the core principles remain unchanged. Good
              design serves people first, honors its context, and brings joy to daily life.
              Fluent in Arabic, English, French, and Italian, I bring a truly international perspective
              to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-serif mb-8 text-center">Design Philosophy</h2>

            <div className="bg-accent/10 p-12 rounded-sm mb-12">
              <blockquote className="text-h3 font-light text-primary text-center italic">
                "Great design is invisible. It simply makes life better."
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PhilosophyCard
                title="Listen First"
                description="Every project begins with understanding—understanding the client, the space, and the possibilities that emerge when the two connect."
              />
              <PhilosophyCard
                title="Honor Context"
                description="Whether historic or contemporary, each space has a story. Good design respects that narrative while writing the next chapter."
              />
              <PhilosophyCard
                title="Pursue Timelessness"
                description="Trends fade, but thoughtful design endures. I create spaces that will feel as relevant in twenty years as they do today."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-serif mb-12 text-center">How I Work</h2>

            <div className="space-y-8">
              <ProcessStep
                number="01"
                title="Discovery"
                description="We begin with conversation. I want to understand not just what you want, but how you live, what inspires you, and what challenges you face. This foundation informs every decision that follows."
              />
              <ProcessStep
                number="02"
                title="Concept Development"
                description="Drawing on our conversations and my analysis of your space, I develop initial concepts. These aren't just pretty pictures—they're thoughtful responses to your unique needs and the space's potential."
              />
              <ProcessStep
                number="03"
                title="Refinement"
                description="Design is iterative. We refine the concept together, adjusting proportions, materials, and details until everything feels exactly right. This collaborative process ensures the final design truly reflects your vision."
              />
              <ProcessStep
                number="04"
                title="Implementation"
                description="With drawings approved, I coordinate with contractors, artisans, and vendors to bring the design to life. My involvement continues through installation, ensuring every detail meets our shared standards."
              />
              <ProcessStep
                number="05"
                title="Completion"
                description="The project culminates in a space that not only looks beautiful but functions perfectly for your life. It's not the end of our relationship—I remain available for any adjustments or future needs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-accent text-background-white">
        <div className="container-custom text-center">
          <h2 className="text-h2 font-serif mb-6">Let's Talk About Your Project</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            I welcome the opportunity to discuss your vision and explore how we might work together.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:stephan.dec@hotmail.com" className="btn-primary bg-background-white text-primary border-background-white hover:bg-transparent hover:text-background-white">
                Email Me
              </a>
              <a href="tel:+962795535893" className="text-body hover:underline">
                +962 79 553 5893
              </a>
            </div>

            <div className="pt-8 border-t border-background-white/20">
              <p className="text-body-sm mb-4">Connect with me</p>
              <div className="flex gap-6 justify-center">
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-body-sm">
                Studio Location<br />
                Deir Ghbar<br />
                Amman, Jordan
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Philosophy Card Component
interface PhilosophyCardProps {
  title: string;
  description: string;
}

function PhilosophyCard({ title, description }: PhilosophyCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-h3 font-serif mb-4 text-accent">{title}</h3>
      <p className="text-body-sm text-text-light leading-relaxed">{description}</p>
    </div>
  );
}

// Process Step Component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center">
          <span className="text-h3 font-serif text-accent">{number}</span>
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h3 className="text-h3 font-serif mb-3">{title}</h3>
        <p className="text-body text-text-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
