import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServiceDetails } from "@/components/service-details"
import { ProcessSection } from "@/components/process-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ServicesCTA } from "@/components/services-cta"

export const metadata = {
  title: "Services - SuPrazo Technologies",
  description: "Comprehensive IT services including web development, mobile apps, ERP systems, and AI/ML solutions.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServiceDetails />
      <ProcessSection />
      <TechnologiesSection />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
