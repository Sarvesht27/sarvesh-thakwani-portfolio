"use client"

import { useState } from "react"
import { ArrowLeft, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { edits, editCategories } from "@/lib/projects-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EditsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredEdits = activeCategory === "All" 
    ? edits 
    : edits.filter(edit => edit.category === activeCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Edits</h1>
            <p className="text-muted-foreground max-w-2xl">
              A collection of my best video editing work across different categories and styles.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {editCategories.map((category) => (
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
            {filteredEdits.map((edit) => (
              <Link
                key={edit.id}
                href={`/edits/${edit.id}`}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-secondary">
                  <Image
                    src={edit.thumbnail}
                    alt={edit.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <span className="text-xs text-white font-medium">{edit.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
                    <span className="text-xs text-white font-mono">{edit.duration}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{edit.title}</h3>
                <p className="text-sm text-muted-foreground">{edit.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
