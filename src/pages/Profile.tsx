import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, CreditCard, File, MapPin, Package, Settings, Truck, User } from "lucide-react";

const Profile = () => {
  // Имитация данных пользователя
  const [userData, setUserData] = useState({
    name: "Иван Петров",
    email: "ivan@example.com",
    phone: "+7 (999) 123-45-67"
  });

  // Имитация истории заказов
  const orders = [
    {
      id: "ORD-12345",
      date: "15 июня 2023",
      status: "Доставлен",
      total: "3,450 ₽",
      items: [
        { name: "Органические помидоры", quantity: 2, price: "350 ₽" },
        { name: "Фермерский сыр", quantity: 1, price: "790 ₽" }
      ]
    },
    {
      id: "ORD-12344",
      date: "5 июня 2023",
      status: "Доставлен",
      total: "2,180 ₽",
      items: [
        { name: "Яблоки Голден", quantity: 3, price: "280 ₽" },
        { name: "Мед цветочный", quantity: 1, price: "540 ₽" }
      ]
    }
  ];

  // Имитация адресов доставки
  const addresses = [
    {
      id: 1,
      title: "Домашний",
      address: "ул. Ленина, 42, кв. 56, Москва, 123456",
      isDefault: true
    },
    {
      id: 2,
      title: "Рабочий",
      address: "ул. Пушкина, 10, оф. 301, Москва, 123457",
      isDefault: false
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Сайдбар с информацией о пользователе */}
            <div className="md:w-1/4">
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" alt={userData.name} />
                      <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4">{userData.name}</CardTitle>
                    <CardDescription>{userData.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <nav className="flex flex-col space-y-1">
                    <Button variant="ghost" className="justify-start" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      Профиль
                    </Button>
                    <Button variant="ghost" className="justify-start" size="sm">
                      <Package className="mr-2 h-4 w-4" />
                      Заказы
                    </Button>
                    <Button variant="ghost" className="justify-start" size="sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      Адреса
                    </Button>
                    <Button variant="ghost" className="justify-start" size="sm">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Способы оплаты
                    </Button>
                    <Button variant="ghost" className="justify-start" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Настройки
                    </Button>
                  </nav>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Выйти</Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Основной контент */}
            <div className="flex-1">
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                  <TabsTrigger value="orders">Заказы</TabsTrigger>
                  <TabsTrigger value="addresses">Адреса доставки</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Личные данные</CardTitle>
                      <CardDescription>
                        Обновите свои личные данные и контактную информацию
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          value={userData.name}
                          onChange={(e) => setUserData({...userData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userData.email}
                          onChange={(e) => setUserData({...userData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          value={userData.phone}
                          onChange={(e) => setUserData({...userData, phone: e.target.value})}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Отмена</Button>
                      <Button>Сохранить изменения</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>История заказов</CardTitle>
                      <CardDescription>
                        Просмотр и отслеживание ваших заказов
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {orders.map((order) => (
                          <div key={order.id} className="rounded-lg border p-4">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div>
                                <h4 className="font-medium">Заказ {order.id}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span>{order.date}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="bg-green-50 text-green-700">
                                  {order.status}
                                </Badge>
                                <span className="font-medium">{order.total}</span>
                              </div>
                            </div>
                            
                            <Separator className="my-4" />
                            
                            <ul className="space-y-2">
                              {order.items.map((item, idx) => (
                                <li key={idx} className="flex justify-between text-sm">
                                  <span>
                                    {item.name} × {item.quantity}
                                  </span>
                                  <span className="font-medium">{item.price}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <div className="mt-4 flex justify-end gap-2">
                              <Button size="sm" variant="outline">
                                <File className="mr-2 h-4 w-4" />
                                Чек
                              </Button>
                              <Button size="sm" variant="outline">
                                <Truck className="mr-2 h-4 w-4" />
                                Отследить
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="addresses">
                  <Card>
                    <CardHeader>
                      <CardTitle>Адреса доставки</CardTitle>
                      <CardDescription>
                        Управление адресами доставки
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {addresses.map((address) => (
                          <div key={address.id} className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium">{address.title}</h4>
                                  {address.isDefault && (
                                    <Badge variant="outline" className="bg-primary/10 text-primary">
                                      По умолчанию
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{address.address}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="ghost">Изменить</Button>
                                <Button size="sm" variant="ghost" className="text-destructive">Удалить</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4" variant="outline">
                        + Добавить новый адрес
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
