"use client"

import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { edits } from "@/lib/projects-data"

export function EditsSection() {
  return (
    <section id="edits" className="py-4 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-wide">BEST EDITS</h2>
          <Link 
            href="/edits" 
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all edits
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edits.map((edit) => (
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
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm">
                  <span className="text-xs text-white font-mono">{edit.duration}</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{edit.title}</h3>
              <p className="text-xs text-muted-foreground">{edit.subtitle}</p>
            </Link>
          ))}
        </div>

        <Link 
          href="/edits" 
          className="sm:hidden flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-8"
        >
          View all edits
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
