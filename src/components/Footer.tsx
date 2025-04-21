import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-dark-green text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="ЭкоФерма" className="h-8 w-8" />
              <span className="font-playfair text-xl font-bold text-white">
                ЭкоФерма
              </span>
            </Link>
            <p className="mt-4 text-eco-cream/80">
              Маркетплейс натуральных продуктов напрямую от фермеров. Мы соединяем производителей и покупателей без посредников.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-eco-cream hover:text-eco-cream/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-eco-cream hover:text-eco-cream/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-eco-cream hover:text-eco-cream/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold">Каталог</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/vegetables" className="text-eco-cream/80 hover:text-eco-cream">
                  Овощи
                </Link>
              </li>
              <li>
                <Link to="/category/fruits" className="text-eco-cream/80 hover:text-eco-cream">
                  Фрукты
                </Link>
              </li>
              <li>
                <Link to="/category/dairy" className="text-eco-cream/80 hover:text-eco-cream">
                  Молочные продукты
                </Link>
              </li>
              <li>
                <Link to="/category/meat" className="text-eco-cream/80 hover:text-eco-cream">
                  Мясо
                </Link>
              </li>
              <li>
                <Link to="/category/honey" className="text-eco-cream/80 hover:text-eco-cream">
                  Мёд
                </Link>
              </li>
              <li>
                <Link to="/category/bakery" className="text-eco-cream/80 hover:text-eco-cream">
                  Выпечка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold">Информация</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-eco-cream/80 hover:text-eco-cream">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-eco-cream/80 hover:text-eco-cream">
                  Фермеры
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-eco-cream/80 hover:text-eco-cream">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-eco-cream/80 hover:text-eco-cream">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-eco-cream/80 hover:text-eco-cream">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-eco-cream/80 hover:text-eco-cream">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-bold">Контакты</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-eco-light-green" />
                <span className="text-eco-cream/80">
                  г. Москва, ул. Фермерская, д. 123
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-eco-light-green" />
                <a href="tel:+74951234567" className="text-eco-cream/80 hover:text-eco-cream">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-eco-light-green" />
                <a href="mailto:info@ecoferma.ru" className="text-eco-cream/80 hover:text-eco-cream">
                  info@ecoferma.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-eco-light-green/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-eco-cream/60">
              © {new Date().getFullYear()} ЭкоФерма. Все права защищены.
            </p>
            <div className="flex space-x-4 text-sm text-eco-cream/60">
              <Link to="/privacy" className="hover:text-eco-cream">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-eco-cream">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
