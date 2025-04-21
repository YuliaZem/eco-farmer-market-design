import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-eco-beige py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="font-playfair text-4xl font-bold leading-tight text-eco-dark-green md:text-5xl lg:text-6xl">
              Натуральные продукты <br />
              <span className="text-eco-light-green">от фермеров</span>
            </h1>
            <p className="mt-4 text-lg text-eco-brown md:text-xl">
              Эко-продукты с местных хозяйств. От фермера — прямо к вашему столу без посредников.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="bg-eco-dark-green hover:bg-eco-dark-green/90 text-white">
                Каталог продуктов
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-eco-light-green text-eco-dark-green">
                О наших фермерах
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-eco-dark-green">100+</div>
                <div className="text-sm text-eco-brown">фермеров</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-eco-dark-green">1000+</div>
                <div className="text-sm text-eco-brown">товаров</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-eco-dark-green">24ч</div>
                <div className="text-sm text-eco-brown">доставка</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Эко продукты"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-eco-light-green"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-eco-cream"></div>
            <div className="absolute -right-4 top-1/4 h-16 w-16 rounded-full bg-eco-light-green/30"></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-eco-light-green/10"></div>
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-eco-cream/50"></div>
    </section>
  );
};

export default Hero;
