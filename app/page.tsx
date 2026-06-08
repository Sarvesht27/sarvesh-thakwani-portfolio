import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { EditsSection } from "@/components/edits-section"
import { DesignSection } from "@/components/design-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <EditsSection />
      <DesignSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
