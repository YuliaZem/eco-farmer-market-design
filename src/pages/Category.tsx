import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Заглушка для категорий
const categoryData = {
  vegetables: {
    name: "Овощи",
    icon: "🥕",
    description: "Свежие сезонные овощи от местных фермеров",
    products: [
      { id: 1, name: "Картофель деревенский", farmer: "Ферма Ивановых", price: 89, weight: "1 кг", image: "/placeholder.svg" },
      { id: 2, name: "Помидоры черри", farmer: "Эко-ферма 'Заря'", price: 210, weight: "500 г", image: "/placeholder.svg" },
      { id: 3, name: "Огурцы тепличные", farmer: "Ферма 'Зеленый дол'", price: 150, weight: "1 кг", image: "/placeholder.svg" },
      { id: 4, name: "Морковь молодая", farmer: "Органик Фарм", price: 95, weight: "1 кг", image: "/placeholder.svg" },
      { id: 5, name: "Капуста белокочанная", farmer: "Ферма Ивановых", price: 76, weight: "1 кг", image: "/placeholder.svg" },
      { id: 6, name: "Лук репчатый", farmer: "Эко-ферма 'Заря'", price: 65, weight: "1 кг", image: "/placeholder.svg" },
    ]
  },
  fruits: {
    name: "Фрукты",
    icon: "🍎",
    description: "Сочные фрукты, выращенные с заботой о природе",
    products: [
      { id: 7, name: "Яблоки антоновка", farmer: "Фруктовый сад", price: 120, weight: "1 кг", image: "/placeholder.svg" },
      { id: 8, name: "Груши конференц", farmer: "Эко-ферма 'Заря'", price: 235, weight: "1 кг", image: "/placeholder.svg" },
      { id: 9, name: "Сливы домашние", farmer: "Органик Фарм", price: 180, weight: "500 г", image: "/placeholder.svg" },
    ]
  },
  dairy: {
    name: "Молочные продукты",
    icon: "🥛",
    description: "Натуральная молочная продукция от фермерских хозяйств",
    products: [
      { id: 10, name: "Молоко фермерское", farmer: "Ферма 'Зеленый дол'", price: 110, weight: "1 л", image: "/placeholder.svg" },
      { id: 11, name: "Творог домашний", farmer: "Ферма Ивановых", price: 165, weight: "300 г", image: "/placeholder.svg" },
      { id: 12, name: "Сыр адыгейский", farmer: "Органик Фарм", price: 320, weight: "300 г", image: "/placeholder.svg" },
    ]
  },
  meat: {
    name: "Мясо",
    icon: "🥩",
    description: "Экологически чистое мясо от фермеров",
    products: [
      { id: 13, name: "Говядина фермерская", farmer: "Ферма 'Зеленый дол'", price: 650, weight: "1 кг", image: "/placeholder.svg" },
      { id: 14, name: "Курица домашняя", farmer: "Эко-ферма 'Заря'", price: 420, weight: "1 кг", image: "/placeholder.svg" },
      { id: 15, name: "Индейка фермерская", farmer: "Ферма Ивановых", price: 580, weight: "1 кг", image: "/placeholder.svg" },
    ]
  },
  bakery: {
    name: "Выпечка",
    icon: "🍞",
    description: "Домашняя выпечка из натуральных ингредиентов",
    products: [
      { id: 16, name: "Хлеб ржаной", farmer: "Пекарня 'Колосок'", price: 85, weight: "500 г", image: "/placeholder.svg" },
      { id: 17, name: "Булочки с корицей", farmer: "Домашняя пекарня", price: 120, weight: "4 шт", image: "/placeholder.svg" },
      { id: 18, name: "Пирог с яблоками", farmer: "Пекарня 'Колосок'", price: 350, weight: "1 шт", image: "/placeholder.svg" },
    ]
  },
  honey: {
    name: "Мёд",
    icon: "🍯",
    description: "Натуральный пчелиный мёд различных сортов",
    products: [
      { id: 19, name: "Мёд липовый", farmer: "Пасека 'Медовый рай'", price: 450, weight: "500 г", image: "/placeholder.svg" },
      { id: 20, name: "Мёд гречишный", farmer: "Пасека Петровых", price: 380, weight: "500 г", image: "/placeholder.svg" },
      { id: 21, name: "Мёд разнотравье", farmer: "Пасека 'Медовый рай'", price: 420, weight: "500 г", image: "/placeholder.svg" },
    ]
  },
};

const Category = () => {
  const { categoryId } = useParams<{ categoryId: keyof typeof categoryData }>();
  const category = categoryId && categoryData[categoryId];

  // Если категория не найдена
  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container flex-1 py-12">
          <h1 className="font-playfair text-3xl font-bold text-eco-dark-green">Категория не найдена</h1>
          <p className="mt-4">Запрошенная категория не существует.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Заголовок категории */}
        <div className="bg-eco-light-green py-8">
          <div className="container">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="font-playfair text-3xl font-bold text-eco-dark-green">{category.name}</h1>
                <p className="mt-1 text-eco-brown">{category.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Фильтры слева */}
            <div className="lg:w-1/4">
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <h2 className="font-medium text-eco-dark-green">Фильтры</h2>
                <Separator className="my-4" />
                
                <div className="space-y-6">
                  {/* Фильтр по цене */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium">Цена</h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[50, 500]} min={0} max={1000} step={10} />
                      <div className="flex items-center justify-between">
                        <span className="text-xs">от 50 ₽</span>
                        <span className="text-xs">до 500 ₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Фильтр по фермерам */}
                  <div>
                    <h3 className="mb-3 text-sm font-medium">Фермеры</h3>
                    <div className="space-y-2">
                      {Array.from(new Set(category.products.map(p => p.farmer))).map((farmer, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Checkbox id={`farmer-${i}`} />
                          <label htmlFor={`farmer-${i}`} className="text-sm">
                            {farmer}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="mt-4 w-full bg-eco-dark-green text-white hover:bg-eco-dark-green/90">
                    Применить фильтры
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Продукты справа */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {category.products.length} товаров
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Сортировать:</span>
                  <Select defaultValue="price-asc">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                      <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                      <SelectItem value="name">По названию</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <div key={product.id} className="group rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md">
                    <div className="aspect-square overflow-hidden rounded-md bg-eco-light-green/20">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">{product.farmer}</p>
                      <h3 className="font-medium text-eco-dark-green">{product.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-semibold">{product.price} ₽</span>
                          <span className="ml-1 text-sm text-muted-foreground">/ {product.weight}</span>
                        </div>
                        <Button size="sm" className="bg-eco-dark-green text-white hover:bg-eco-dark-green/90">
                          В корзину
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
