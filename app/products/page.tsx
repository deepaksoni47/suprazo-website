import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductsHero } from "@/components/products-hero";
import { ProductDetails } from "@/components/product-details";
import { ProductFeatures } from "@/components/product-features";
import { ProductsCTA } from "@/components/products-cta";

export const metadata = {
  title: "Products - SuPrazo Technologies",
  description:
    "Innovative products including CampusEye.ai and Sign Language App showcasing our expertise in AI and mobile development.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProductsHero />
      <ProductDetails />
      <ProductFeatures />
      <ProductsCTA />
      {/* <Footer /> */}
    </main>
  );
}
