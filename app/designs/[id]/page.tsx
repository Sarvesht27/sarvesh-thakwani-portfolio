import { notFound } from "next/navigation"
import { ArrowLeft, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { designs } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function DesignDetailPage({ params }: PageProps) {
  const { id } = await params
  const design = designs.find(d => d.id === id)

  if (!design) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            href="/designs" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Designs
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
                <Tag className="w-3 h-3" />
                {design.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{design.title}</h1>
            <p className="text-lg text-muted-foreground">{design.subtitle}</p>
          </header>

          {/* Main Image */}
          <div className="mb-12">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src={design.thumbnail}
                alt={design.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4 text-foreground">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {design.description}
            </p>
          </div>

          {/* Additional Images */}
          {design.images.length > 1 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6">Project Gallery</h3>
              <div className="grid gap-6">
                {design.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-[16/10] rounded-xl overflow-hidden bg-secondary">
                    <Image
                      src={image}
                      alt={`${design.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <hr className="my-12 border-border/50" />

          {/* More Designs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More Designs</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {designs
                .filter(d => d.id !== design.id)
                .slice(0, 3)
                .map((relatedDesign) => (
                  <Link
                    key={relatedDesign.id}
                    href={`/designs/${relatedDesign.id}`}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-secondary">
                      <Image
                        src={relatedDesign.thumbnail}
                        alt={relatedDesign.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">{relatedDesign.title}</h4>
                    <p className="text-xs text-muted-foreground">{relatedDesign.subtitle}</p>
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
  return designs.map((design) => ({
    id: design.id,
  }))
}
