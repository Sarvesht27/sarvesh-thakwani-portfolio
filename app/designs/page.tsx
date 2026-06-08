"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { designs, designCategories } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DesignsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredDesigns = activeCategory === "All" 
    ? designs 
    : designs.filter(design => design.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Designs</h1>
            <p className="text-muted-foreground max-w-2xl">
              A showcase of my visual design work including branding, social media, and UI/UX projects.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {designCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design) => (
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
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <span className="text-xs text-white font-medium">{design.category}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{design.title}</h3>
                <p className="text-sm text-muted-foreground">{design.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
