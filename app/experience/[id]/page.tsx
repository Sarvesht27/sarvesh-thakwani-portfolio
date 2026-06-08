import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { experiences } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ExperiencePage({ params }: PageProps) {
  const { id } = await params
  const experience = experiences.find((e) => e.id === id)

  if (!experience) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 -ml-4" asChild>
            <Link href="/#experience">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              {experience.icon ? (
                <div className="shrink-0 p-4 rounded-xl bg-secondary/50 flex items-center justify-center min-w-[110px] min-h-[110px]">
                  {experience.icon.startsWith('/') ? (
                    <div className="relative w-20 h-20 overflow-hidden rounded-md">
                      <Image src={experience.icon} alt={experience.title} fill className="object-contain" />
                    </div>
                  ) : (
                    <span className="text-5xl">{experience.icon}</span>
                  )}
                </div>
              ) : (
                <div className="shrink-0 p-4 rounded-xl bg-secondary/50 min-w-[110px] min-h-[110px] flex items-center justify-center">
                  <div className="w-16 h-16 rounded bg-muted-foreground/20" />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {experience.title}
                </h1>
                {experience.position && (
                  Array.isArray(experience.position) ? (
                    <div className="mt-3 flex flex-col gap-1">
                      {experience.position.map((pos, idx) => (
                        <p key={idx} className="text-[1.15rem] text-primary font-medium m-0">{pos}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[1.15rem] text-primary font-medium mt-2">{experience.position}</p>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Content - Notion-like layout */}
          <article className="prose prose-invert prose-lg max-w-none">
            {/* About Section */}
            <div className="mb-8 p-6 rounded-xl bg-card/50 border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-4 mt-0">About This Role</h2>
              <div className="text-muted-foreground leading-relaxed m-0 space-y-4">
                {experience.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="m-0">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Highlights Section */}
            <div className="mb-8 p-6 rounded-xl bg-card/50 border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-4 mt-0">Key Highlights</h2>
              <ul className="space-y-3 m-0 list-none p-0">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground m-0 p-0">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Work Section */}
            <div className="mb-8 p-6 rounded-xl bg-card/50 border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-4 mt-0">Best Work</h2>
              {experience.bestWork && experience.bestWork.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0">
                  {experience.bestWork.map((work, index) => (
                    <div key={index} className="border border-border/50 rounded-lg p-5 bg-background/50 h-full flex flex-col">
                      <h3 className="text-[1.15rem] font-medium text-foreground mb-2 mt-0">{work.title}</h3>
                      <p className="text-muted-foreground m-0 leading-relaxed text-[0.95rem] flex-1">
                        {work.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-4 text-center border-t border-dashed border-border/50">
                  <p className="text-muted-foreground m-0 text-sm italic">
                    Work samples coming soon...
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id,
  }))
}
