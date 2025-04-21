import { Link } from "react-router-dom";

type Category = {
  id: string;
  name: string;
  icon: string;
};

const categories: Category[] = [
  { id: "vegetables", name: "Овощи", icon: "🥕" },
  { id: "fruits", name: "Фрукты", icon: "🍎" },
  { id: "dairy", name: "Молочные продукты", icon: "🥛" },
  { id: "meat", name: "Мясо", icon: "🥩" },
  { id: "bakery", name: "Выпечка", icon: "🍞" },
  { id: "honey", name: "Мёд", icon: "🍯" },
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="font-playfair text-center text-3xl font-bold text-eco-dark-green">
          Категории продуктов
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-eco-brown">
          Выбирайте из широкого ассортимента натуральных фермерских продуктов
        </p>
        
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card flex flex-col items-center p-4 hover-scale"
            >
              <span className="mb-2 text-3xl">{category.icon}</span>
              <span className="text-sm font-medium text-eco-dark-green">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
