import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

type Farmer = {
  id: number;
  name: string;
  image: string;
  location: string;
  products: string[];
  verified: boolean;
};

const farmers: Farmer[] = [
  {
    id: 1,
    name: "Ферма Ивановых",
    image: "/placeholder.svg",
    location: "Московская область",
    products: ["Овощи", "Фрукты", "Яйца"],
    verified: true,
  },
  {
    id: 2,
    name: "Хозяйство 'Зорька'",
    image: "/placeholder.svg",
    location: "Калужская область",
    products: ["Молоко", "Сыр", "Сметана"],
    verified: true,
  },
  {
    id: 3,
    name: "Пасека 'Медовая'",
    image: "/placeholder.svg",
    location: "Тульская область",
    products: ["Мёд", "Прополис", "Перга"],
    verified: true,
  },
];

const FarmersSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-eco-dark-green">
              Наши фермеры
            </h2>
            <p className="mt-2 text-eco-brown">
              Познакомьтесь с людьми, которые выращивают вашу еду
            </p>
          </div>
          <Button variant="outline" className="border-eco-light-green text-eco-dark-green">
            <Link to="/farmers">Все фермеры</Link>
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {farmers.map((farmer) => (
            <Card key={farmer.id} className="overflow-hidden hover-scale">
              <div className="relative h-48">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="h-full w-full object-cover"
                />
                {farmer.verified && (
                  <div className="absolute bottom-2 right-2 rounded-full bg-eco-light-green p-1 text-white">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium text-eco-dark-green">
                  {farmer.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {farmer.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {farmer.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full bg-eco-beige px-3 py-1 text-xs text-eco-dark-green"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/farmer/${farmer.id}`}
                  className="mt-4 inline-block text-sm font-medium text-eco-light-green hover:text-eco-dark-green"
                >
                  Посмотреть продукты →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmersSection;
