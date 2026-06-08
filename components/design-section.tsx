import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { designs } from "@/lib/projects-data"

export function DesignSection() {
  return (
    <section id="design" className="py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-wide">BEST DESIGN WORK</h2>
          <Link 
            href="/designs" 
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all designs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={`/designs/${design.id}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-secondary">
                <Image
                  src={design.thumbnail}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{design.title}</h3>
              <p className="text-xs text-muted-foreground">{design.subtitle}</p>
            </Link>
          ))}
        </div>

        <Link 
          href="/designs" 
          className="sm:hidden flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-8"
        >
          View all designs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
