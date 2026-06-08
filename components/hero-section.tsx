import Image from "next/image"
import { ArrowRight, Play, TrendingUp, Clapperboard, PenTool, UserCog, MonitorPlay, Medal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] pt-24 pb-4 relative overflow-hidden flex items-center">
      {/* Abstract Background lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] -translate-y-1/2 z-0" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-4 bg-primary rounded-full" />
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                I EDIT STORIES. I DESIGN EXPERIENCES.
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
              Creating visuals people <br />
              <span className="text-primary relative inline-block whitespace-nowrap">
                stop scrolling
                <svg className="absolute -bottom-2 left-0 w-full h-auto text-primary pointer-events-none" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 18C45.3333 13.5 142.6 -2.40001 298 11.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M35 22C78.3333 19.5 170.8 11.5 272 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </span> for.
            </h1>
            
            <p className="text-lg sm:text-[1.15rem] text-muted-foreground max-w-[45rem] leading-relaxed pt-2">
              I enjoy taking ideas from a rough thought or a simple conversation and turning them into visuals that tell a story. Over time, I've worked on everything from social media content and brand visuals to college campaigns and digital experiences - always with the same goal: creating work that connects with people instead of just filling a feed. Whether it's a video, a design or a complete visual experience, I focus on building content that captures attention, communicates clearly and leaves an impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 font-semibold h-12 px-8 rounded-full bg-transparent"
                asChild
              >
                <Link href="/edits">
                  <Play className="mr-2 w-5 h-5 fill-current" />
                  View best edits
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 h-12 px-8 rounded-full bg-transparent"
                asChild
              >
                <Link href="/designs">
                  View best designs
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>



          </div>

          {/* Right Content - Hero Image with Floating Badges */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both lg:mt-0 mt-12">
            <div className="relative w-full max-w-[420px]">
              
              {/* Geometric Red Outline Behind Portrait */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transform translate-x-4">
                <svg width="100%" height="100%" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15]">
                  <path d="M380 50 L420 350 L225 450 L30 350 L70 50 L225 0 Z" stroke="var(--primary)" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-12 -right-4 lg:-right-8 z-20 animate-[bounce_4s_ease-in-out_infinite]">
                <div className="bg-[#0f0f0f] border border-primary/40 text-white text-sm font-semibold py-3 px-5 rounded-2xl flex flex-col items-center gap-1 shadow-2xl">
                  <TrendingUp className="text-primary w-5 h-5" />
                  <div className="text-center">
                    <div className="font-bold text-[13px] leading-tight">Creative</div>
                    <div className="text-[13px] font-bold leading-tight">Storyteller</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-16 z-20 animate-[bounce_5s_ease-in-out_infinite_0.5s]">
                <div className="bg-[#0f0f0f] border border-primary/40 text-white font-semibold py-3 px-5 rounded-xl flex items-center gap-3 shadow-2xl">
                  <Clapperboard className="text-primary w-6 h-6" strokeWidth={1.5} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-bold">Video</span>
                    <span className="text-[13px] font-bold">Editor</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 -right-2 lg:-right-6 z-20 animate-[bounce_6s_ease-in-out_infinite_1s]">
                <div className="bg-[#0f0f0f] border border-primary/40 text-white font-semibold py-3 px-5 rounded-xl flex items-center gap-3 shadow-2xl">
                  <PenTool className="text-primary w-5 h-5" strokeWidth={1.5} />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-bold">Graphic</span>
                    <span className="text-[13px] font-bold">Designer</span>
                  </div>
                </div>
              </div>

              {/* Portrait */}
              <Image
                src="/hero-sarvesh-final.png"
                alt="Sarvesh Thakwani - Editor & Designer"
                width={600}
                height={800}
                className="w-full h-auto relative z-10 drop-shadow-[0_0_4px_rgba(240,40,40,0.8)] object-contain object-bottom"
                priority
              />

              {/* Availability Indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max z-20">
                <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
                  </span>
                  Available for freelance & part time projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
