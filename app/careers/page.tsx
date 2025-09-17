import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CareersHero } from "@/components/careers-hero";
import { JobListings } from "@/components/job-listings";
import { CompanyBenefits } from "@/components/company-benefits";
import { ApplicationProcess } from "@/components/application-process";
import { InternshipProgram } from "@/components/internship-program";

export const metadata = {
  title: "Careers - SuPrazo Technologies",
  description:
    "Join SuPrazo Technologies and be part of an innovative team shaping the future of technology. Explore career opportunities and internship programs.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CareersHero />
      <JobListings />
      <CompanyBenefits />
      <InternshipProgram />
      <ApplicationProcess />
    </main>
  );
}
