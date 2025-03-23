import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedApps } from "@/components/FeaturedApps";
import { CategoriesSection } from "@/components/CategoriesSection";
import { PopularApps } from "@/components/PopularApps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="bg-white">
          <FeaturedApps />
        </div>
        <CategoriesSection />
        <div className="bg-white">
          <PopularApps />
        </div>
      </main>
      <Footer />
    </div>
  );
}
