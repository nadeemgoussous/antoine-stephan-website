export default function CV() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h1 font-serif mb-4">Curriculum Vitae</h1>
            <p className="text-body text-text-light mb-8">
              Over 45 years of excellence in interior design across Jordan and the region
            </p>
            <button className="btn-primary">
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* CV Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Education */}
            <div>
              <h2 className="text-h2 font-serif mb-8 pb-4 border-b-2 border-accent">Education</h2>
              <div className="space-y-6">
                <CVItem
                  year="1978"
                  title="Academia Di Belle Arti Roma"
                  institution="Rome, Italy"
                  description="Interior Design and Decoration"
                />
                <CVItem
                  year="1978"
                  title="Diploma in Scenography"
                  institution="Istituto Di Cultura Pantheon, Rome, Italy"
                />
                <CVItem
                  year="1973"
                  title="College De La Salle"
                  institution="Amman, Jordan"
                />
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-h2 font-serif mb-8 pb-4 border-b-2 border-accent">Professional Experience</h2>
              <div className="space-y-6">
                <CVItem
                  year="1978 - Present"
                  title="Principal Designer & Founder"
                  institution="Self-Employed, Amman, Jordan"
                  description="Established independent practice specializing in high-end residential, commercial, and hospitality projects throughout Jordan and the region. Owner of Stephan Decoration Center, providing fittings and accessories for marble, moquette, and parquet wholesale. Completed over 80 projects spanning villas, apartments, showrooms, offices, hotels, restaurants, and institutional buildings."
                />
              </div>
            </div>

            {/* Notable Projects */}
            <div>
              <h2 className="text-h2 font-serif mb-8 pb-4 border-b-2 border-accent">Notable Projects</h2>
              <div className="space-y-4">
                <CVItem
                  year="2025"
                  title="Residential Renovations"
                  description="Dr. Waleed Carlos Dihmis Apartment (Jabal Amman), Haitham Fakhoury & Alda Zomot Apartment (Abdoun Shamali)"
                />
                <CVItem
                  year="2024"
                  title="Mashini Studio"
                  description="Abdoun Tower – 6th Floor"
                />
                <CVItem
                  year="2024"
                  title="Bateel Restaurant"
                  description="Abdoun, Amman"
                />
                <CVItem
                  year="2023"
                  title="Villa Ramzi Louza"
                  description="Abdoun, Amman"
                />
                <CVItem
                  year="2022"
                  title="Multiple Residential Projects"
                  description="Interior Design of Ousama Aqhabi's Villa (Badr Al Jadidah), Labib Majaj Villa (Al Rabieh)"
                />
                <CVItem
                  year="2019"
                  title="Villa Wadie Qousous"
                  description="Jabal Amman, Rainbow Street"
                />
                <CVItem
                  year="2018-2019"
                  title="Villa Akram Kareem"
                  description="Swimming Pool and Landscape, Michigan, Detroit"
                />
                <CVItem
                  year="2018"
                  title="Alliance Academy Theatre"
                  description="Yadoudah"
                />
                <CVItem
                  year="2017"
                  title="International NGO Regional Offices"
                  description="Medecins Du Monde & Action Aid Regional Offices, Al-Weibdeh"
                />
                <CVItem
                  year="2016"
                  title="Rotana Tower Hotel"
                  description="Interior Design Coordinator with Sigma Consultants, Abdali"
                />
                <CVItem
                  year="2015"
                  title="Abdulhadi Eye Hospital"
                  description="Jabal Amman"
                />
                <CVItem
                  year="2008-2010"
                  title="Crowne Plaza Hotel"
                  description="Consultancy, Dead Sea"
                />
                <CVItem
                  year="2006-2007"
                  title="Palace Tawfiq Fakhoury"
                  description="Dabouq, Amman"
                />
                <CVItem
                  year="2005"
                  title="General Electric Regional Offices"
                  description="New Regional Offices, Amman"
                />
                <CVItem
                  year="2000"
                  title="Grand View Hotel"
                  description="Petra - Wadi Musa"
                />
                <CVItem
                  year="1987-1988"
                  title="H.E. The Italian Ambassador's Villa"
                  description="Interior design, landscaping & pool, Jabal Weibdeh"
                />
                <CVItem
                  year="1982"
                  title="Mercedes Benz Showroom"
                  description="Showroom, offices, cafeteria - Raqim Sahab"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// CV Item Component
interface CVItemProps {
  year?: string;
  title: string;
  institution?: string;
  description?: string;
}

function CVItem({ year, title, institution, description }: CVItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {year && (
        <div className="md:col-span-1">
          <p className="text-body-sm font-medium text-accent">{year}</p>
        </div>
      )}
      <div className={year ? "md:col-span-4" : "md:col-span-5"}>
        <h3 className="text-h3 font-serif mb-1">{title}</h3>
        {institution && (
          <p className="text-body-sm text-text-light font-medium mb-2">
            {institution}
          </p>
        )}
        {description && (
          <p className="text-body-sm text-text-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
