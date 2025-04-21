import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FarmersSection from "@/components/FarmersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <FarmersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
