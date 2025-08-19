import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import KeyDifferentials from "@/components/KeyDifferentials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <KeyDifferentials />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;
