import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { StoryTimeline } from "@/components/story-timeline";
import { MissionVision } from "@/components/mission-vision";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TeamSection } from "@/components/team-section";
import { AboutCTA } from "@/components/about-cta";

export const metadata = {
  title: "About Us - SuPrazo Technologies",
  description:
    "Learn about SuPrazo Technologies' journey, mission, and the expert team driving digital excellence with innovative IT solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <StoryTimeline />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
