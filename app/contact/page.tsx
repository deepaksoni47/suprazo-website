import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { ContactMap } from "@/components/contact-map";

export const metadata = {
  title: "Contact Us - SuPrazo Technologies",
  description:
    "Get in touch with SuPrazo Technologies. Contact us for innovative IT solutions, project inquiries, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
    </main>
  );
}
