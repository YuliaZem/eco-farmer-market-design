import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Тип для товара в корзине
interface CartItem {
  id: number;
  name: string;
  farmer: string;
  image: string;
  price: number;
  quantity: number;
  unit: string;
}

const Cart = () => {
  // Имитация товаров в корзине
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Органические помидоры",
      farmer: "Ферма Василия Петрова",
      image: "/placeholder.svg",
      price: 350,
      quantity: 2,
      unit: "кг"
    },
    {
      id: 2,
      name: "Фермерский сыр Рикотта",
      farmer: "Сыроварня 'Молочные дали'",
      image: "/placeholder.svg",
      price: 790,
      quantity: 1,
      unit: "уп"
    },
    {
      id: 3,
      name: "Мед липовый",
      farmer: "Пасека Медовая долина",
      image: "/placeholder.svg",
      price: 650,
      quantity: 1,
      unit: "500 г"
    }
  ]);
  
  // Состояние для промокода
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Расчет общей стоимости товаров
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0; // Скидка 10% если промокод применен
  const delivery = 300; // Стоимость доставки
  const total = subtotal - discount + delivery;
  
  // Функция для изменения количества товара
  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Функция для удаления товара
  const removeItem = (itemId: number) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };
  
  // Применение промокода
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "eco2023") {
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
      alert("Неверный промокод");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">Корзина</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              {/* Товары в корзине */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-4 sm:flex-row">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          
                          <div className="flex flex-1 flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-base font-medium">{item.name}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{item.farmer}</p>
                              </div>
                              <p className="text-base font-medium">
                                {item.price.toLocaleString()} ₽/{item.unit}
                              </p>
                            </div>
                            
                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center border rounded-md">
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                  <span className="sr-only">Уменьшить</span>
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                  <span className="sr-only">Увеличить</span>
                                </Button>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <span className="font-medium">
                                  {(item.price * item.quantity).toLocaleString()} ₽
                                </span>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash className="h-4 w-4 text-destructive" />
                                  <span className="sr-only">Удалить</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Итоговая сумма и оформление заказа */}
              <div>
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Итого</CardTitle>
                    <CardDescription>Сумма вашего заказа</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Промокод */}
                    <div className="space-y-2">
                      <Label htmlFor="promocode">Промокод</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="promocode" 
                          placeholder="ЭКОФЕРМА"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          disabled={promoApplied}
                        />
                        <Button 
                          onClick={applyPromoCode}
                          disabled={promoApplied || !promoCode}
                          variant={promoApplied ? "outline" : "default"}
                        >
                          {promoApplied ? "Применен" : "Применить"}
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-xs text-green-600">Промокод применен. Скидка 10%!</p>
                      )}
                    </div>
                    
                    {/* Способ доставки */}
                    <div className="space-y-2">
                      <Label htmlFor="delivery-method">Способ доставки</Label>
                      <Select defaultValue="courier">
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите способ доставки" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="courier">Курьерская доставка</SelectItem>
                          <SelectItem value="pickup">Самовывоз</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Расчет стоимости */}
                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between">
                        <span className="text-sm">Товары ({cartItems.length}):</span>
                        <span>{subtotal.toLocaleString()} ₽</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-green-600">
                          <span className="text-sm">Скидка по промокоду:</span>
                          <span>-{discount.toLocaleString()} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-sm">Доставка:</span>
                        <span>{delivery.toLocaleString()} ₽</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>Итого:</span>
                        <span className="text-lg">{total.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Оформить заказ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 rounded-full bg-muted p-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">Ваша корзина пуста</h2>
              <p className="mb-6 text-muted-foreground">Добавьте товары из каталога, чтобы оформить заказ</p>
              <Link to="/">
                <Button>
                  Вернуться в каталог
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
