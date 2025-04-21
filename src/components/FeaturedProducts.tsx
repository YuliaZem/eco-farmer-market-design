import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  isOrganic: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Фермерские помидоры",
    price: 320,
    unit: "кг",
    image: "/placeholder.svg",
    farmer: "Хозяйство Василия",
    isOrganic: true,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Молоко цельное",
    price: 150,
    unit: "л",
    image: "/placeholder.svg",
    farmer: "Ферма Зорька",
    isOrganic: true,
  },
  {
    id: 3,
    name: "Мёд цветочный",
    price: 700,
    unit: "0.5кг",
    image: "/placeholder.svg",
    farmer: "Пасека Медовая",
    isOrganic: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Яблоки сезонные",
    price: 180,
    unit: "кг",
    image: "/placeholder.svg",
    farmer: "Сад Ивановых",
    isOrganic: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-eco-beige/30">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-eco-dark-green">
              Популярные продукты
            </h2>
            <p className="mt-2 text-eco-brown">
              Самые свежие и качественные фермерские продукты
            </p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center text-eco-dark-green hover:text-eco-light-green"
          >
            Смотреть все
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="product-card h-full hover-scale">
                <div className="relative pt-[75%]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {product.isOrganic && (
                    <Badge className="absolute left-2 top-2 bg-eco-light-green hover:bg-eco-dark-green">
                      Эко
                    </Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="absolute right-2 top-2 bg-amber-500 hover:bg-amber-600">
                      Хит продаж
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600">
                      Новинка
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium line-clamp-2">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.farmer}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4 pt-2">
                  <div className="font-playfair text-xl font-bold text-eco-dark-green">
                    {product.price} ₽
                    <span className="text-sm font-normal text-muted-foreground">
                      /{product.unit}
                    </span>
                  </div>
                  <Button className="aspect-square h-10 w-10 rounded-full p-0" variant="default">
                    <PlusIcon className="h-5 w-5" />
                    <span className="sr-only">Добавить в корзину</span>
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

function Button({ 
  children, 
  className, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "default" | "outline" | "ghost"; 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  
  const variantStyles = {
    default: "bg-eco-light-green text-white hover:bg-eco-dark-green",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  
  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default FeaturedProducts;
