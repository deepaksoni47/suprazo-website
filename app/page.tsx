import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesPreview } from "@/components/services-preview";
import { ProductsShowcase } from "@/components/products-showcase";
import { CareersTeaser } from "@/components/careers-teaser";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ProductsShowcase />
      <CareersTeaser />
    </main>
  );
}
