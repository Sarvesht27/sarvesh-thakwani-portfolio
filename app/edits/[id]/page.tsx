import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { edits } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditDetailPage({ params }: PageProps) {
  const { id } = await params
  const edit = edits.find(e => e.id === id)

  if (!edit) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            href="/edits" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Edits
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
                <Tag className="w-3 h-3" />
                {edit.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {edit.duration}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{edit.title}</h1>
            <p className="text-lg text-muted-foreground">{edit.subtitle}</p>
          </header>

          {/* Video Embed */}
          <div className="mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
              {edit.videoUrl ? (
                <iframe
                  src={edit.videoUrl}
                  title={edit.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <Image
                  src={edit.thumbnail}
                  alt={edit.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4 text-foreground">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {edit.description}
            </p>
          </div>

          {/* Divider */}
          <hr className="my-12 border-border/50" />

          {/* More Edits */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More Edits</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {edits
                .filter(e => e.id !== edit.id)
                .slice(0, 3)
                .map((relatedEdit) => (
                  <Link
                    key={relatedEdit.id}
                    href={`/edits/${relatedEdit.id}`}
                    className="group"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-secondary">
                      <Image
                        src={relatedEdit.thumbnail}
                        alt={relatedEdit.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">{relatedEdit.title}</h4>
                    <p className="text-xs text-muted-foreground">{relatedEdit.subtitle}</p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return edits.map((edit) => ({
    id: edit.id,
  }))
}
