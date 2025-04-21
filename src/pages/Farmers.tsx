import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Search, MapPin, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

type Farmer = {
  id: number;
  name: string;
  image: string;
  location: string;
  products: string[];
  verified: boolean;
  description: string;
};

const farmers: Farmer[] = [
  {
    id: 1,
    name: "Ферма Ивановых",
    image: "/placeholder.svg",
    location: "Московская область",
    products: ["Овощи", "Фрукты", "Яйца"],
    verified: true,
    description: "Семейная ферма с традициями выращивания экологически чистых овощей и фруктов. Более 15 лет опыта."
  },
  {
    id: 2,
    name: "Хозяйство 'Зорька'",
    image: "/placeholder.svg",
    location: "Калужская область",
    products: ["Молоко", "Сыр", "Сметана"],
    verified: true,
    description: "Молочная ферма с собственным стадом коров, производящая натуральные молочные продукты без добавок."
  },
  {
    id: 3,
    name: "Пасека 'Медовая'",
    image: "/placeholder.svg",
    location: "Тульская область",
    products: ["Мёд", "Прополис", "Перга"],
    verified: true,
    description: "Пасека, расположенная в экологически чистом районе. Производим мёд и продукты пчеловодства с 2005 года."
  },
  {
    id: 4,
    name: "Экоферма 'Лесная'",
    image: "/placeholder.svg",
    location: "Рязанская область",
    products: ["Грибы", "Ягоды", "Травы"],
    verified: true,
    description: "Специализируемся на сборе и выращивании лесных даров: грибов, ягод и целебных трав."
  },
  {
    id: 5,
    name: "Хлебный двор",
    image: "/placeholder.svg",
    location: "Владимирская область",
    products: ["Хлеб", "Выпечка", "Мука"],
    verified: false,
    description: "Пекарня с мельницей, использующая старинные рецепты и натуральные ингредиенты для создания хлеба и выпечки."
  },
  {
    id: 6,
    name: "Сыроварня 'Домашняя'",
    image: "/placeholder.svg",
    location: "Тверская область",
    products: ["Сыры", "Масло", "Творог"],
    verified: true,
    description: "Семейная сыроварня с авторскими рецептами. Производим более 15 видов фермерских сыров."
  },
];

const Farmers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFarmers, setFilteredFarmers] = useState(farmers);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setFilteredFarmers(farmers);
    } else {
      const results = farmers.filter(
        farmer => 
          farmer.name.toLowerCase().includes(term) || 
          farmer.location.toLowerCase().includes(term) ||
          farmer.products.some(product => product.toLowerCase().includes(term))
      );
      setFilteredFarmers(results);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-green-50/30">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-eco-beige to-eco-light-green/20 py-12">
          <div className="container">
            <h1 className="font-playfair text-4xl font-bold text-eco-dark-green md:text-5xl">
              Наши фермеры
            </h1>
            <p className="mt-4 max-w-2xl text-eco-brown text-lg">
              Познакомьтесь с людьми, которые с любовью выращивают натуральные продукты для вашего стола. Каждый фермер в нашем сообществе следует принципам экологичного земледелия.
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="border-b py-4">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск по фермерам..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Категория продукции" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="vegetables">Овощи</SelectItem>
                    <SelectItem value="fruits">Фрукты</SelectItem>
                    <SelectItem value="dairy">Молочные продукты</SelectItem>
                    <SelectItem value="meat">Мясо</SelectItem>
                    <SelectItem value="honey">Мёд</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select defaultValue="all-regions">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Регион" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-regions">Все регионы</SelectItem>
                    <SelectItem value="moscow">Московская область</SelectItem>
                    <SelectItem value="kaluga">Калужская область</SelectItem>
                    <SelectItem value="tula">Тульская область</SelectItem>
                    <SelectItem value="ryazan">Рязанская область</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Farmers Grid */}
        <div className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFarmers.map((farmer) => (
                <Card key={farmer.id} className="overflow-hidden hover-scale">
                  <div className="relative h-56">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="h-full w-full object-cover"
                    />
                    {farmer.verified && (
                      <div className="absolute right-3 top-3 rounded-full bg-eco-light-green p-1 text-white">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-medium text-eco-dark-green">
                        {farmer.name}
                      </h3>
                    </div>
                    <p className="mt-1 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {farmer.location}
                    </p>
                    <p className="mt-3 text-sm text-eco-brown line-clamp-2">
                      {farmer.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {farmer.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="inline-block rounded-full bg-eco-beige px-3 py-1 text-xs text-eco-dark-green"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex justify-between">
                      <Link
                        to={`/farmer/${farmer.id}`}
                        className="text-sm font-medium text-eco-light-green hover:text-eco-dark-green story-link"
                      >
                        Посмотреть продукты
                      </Link>
                      <Button variant="outline" size="sm" className="text-xs">
                        Связаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredFarmers.length === 0 && (
              <div className="my-12 text-center">
                <p className="text-lg text-eco-brown">По вашему запросу ничего не найдено</p>
                <Button 
                  variant="outline" 
                  className="mt-4" 
                  onClick={() => {
                    setSearchTerm("");
                    setFilteredFarmers(farmers);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Farmers;
