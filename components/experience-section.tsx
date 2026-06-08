import Link from "next/link"
import Image from "next/image"
import { experiences } from "@/lib/projects-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-wide">WORK EXPERIENCE</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/experience/${exp.id}`}
              className="group p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-row items-center gap-4"
            >
              <div className="shrink-0 p-3 rounded-xl bg-secondary/50 text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center min-w-[110px] min-h-[110px]">
                {exp.icon ? (
                  exp.icon.startsWith('/') ? (
                    <div className="relative w-20 h-20 overflow-hidden rounded-md">
                      <Image src={exp.icon} alt={exp.title} fill className="object-contain" />
                    </div>
                  ) : (
                    <span className="text-5xl">{exp.icon}</span>
                  )
                ) : (
                  <div className="w-12 h-12 rounded bg-muted-foreground/20" />
                )}
              </div>
              <div className="flex-1 text-left flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">{exp.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug line-clamp-3 mb-3">{exp.description}</p>
                <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
                  View Work <span className="ml-1 text-base leading-none">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
