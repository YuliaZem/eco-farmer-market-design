import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Меню</span>
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="ЭкоФерма" className="h-8 w-8" />
            <span className="hidden font-playfair text-xl font-bold text-eco-dark-green sm:inline-block">
              ЭкоФерма
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] grid-cols-2 gap-3 p-4">
                  <Link to="/category/vegetables" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Овощи</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Свежие овощи от фермерских хозяйств</p>
                  </Link>
                  <Link to="/category/fruits" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Фрукты</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Сезонные фрукты с местных ферм</p>
                  </Link>
                  <Link to="/category/dairy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Молочная продукция</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Натуральное молоко, сыры и йогурты</p>
                  </Link>
                  <Link to="/category/meat" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Мясо</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Экологически чистое мясо от фермеров</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/farmers" className={navigationMenuTriggerStyle()}>
                Фермеры
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                О нас
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden flex-1 items-center justify-end md:flex md:max-w-xs lg:max-w-md">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Искать продукты..."
              className="w-full rounded-full bg-muted pl-8 pr-4"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 md:hidden" />
            <span className="sr-only">Поиск</span>
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Аккаунт</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Корзина</span>
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
