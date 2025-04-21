import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>
      <Header />
      
      <main className="container py-8 md:py-12">
        <section className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-3xl font-bold sm:text-4xl md:text-5xl">О нашем проекте</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Мы соединяем фермеров и покупателей напрямую, делая натуральные продукты доступнее
          </p>
          <Separator className="my-8" />
          
          <div className="grid gap-12">
            {/* Блок миссии */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Наша миссия</h2>
                <p className="mt-4 text-muted-foreground">
                  Миссия ЭкоФермы — сделать натуральные и экологически чистые продукты доступными для каждого, 
                  поддерживая при этом малых и средних фермеров, которые выращивают продукцию ответственно и с любовью к земле.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Мы верим, что прямая связь между производителями и потребителями не только обеспечивает более свежие продукты, 
                  но и создает более устойчивую продовольственную систему для будущих поколений.
                </p>
              </div>
              <div className="rounded-xl bg-muted p-6 md:order-first">
                <img 
                  src="/placeholder.svg" 
                  alt="Натуральные продукты с фермы" 
                  className="aspect-video w-full rounded-lg object-cover"
                />
              </div>
            </div>
            
            {/* Наши ценности */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Наши ценности</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    🌱
                  </div>
                  <h3 className="text-xl font-semibold">Экологичность</h3>
                  <p className="mt-2 text-muted-foreground">
                    Мы поддерживаем устойчивое и ответственное земледелие, которое сохраняет природные ресурсы.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    🌾
                  </div>
                  <h3 className="text-xl font-semibold">Честность</h3>
                  <p className="mt-2 text-muted-foreground">
                    Прозрачность от поля до стола. Мы всегда открыто рассказываем о происхождении продуктов.
                  </p>
                </div>
                
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    👨‍🌾
                  </div>
                  <h3 className="text-xl font-semibold">Сообщество</h3>
                  <p className="mt-2 text-muted-foreground">
                    Мы создаем сообщество людей, которые заботятся о своем здоровье и будущем планеты.
                  </p>
                </div>
              </div>
            </div>
            
            {/* О команде */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Наша команда</h2>
              <p className="mt-4 text-muted-foreground">
                Команда ЭкоФермы — это увлеченные своим делом профессионалы, объединенные общей целью сделать 
                здоровое питание доступным, а фермерство — прибыльным.
              </p>
              
              <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <img 
                      src="/placeholder.svg" 
                      alt="Александр Петров" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Александр Петров</h3>
                  <p className="text-sm text-muted-foreground">Основатель и генеральный директор</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <img 
                      src="/placeholder.svg" 
                      alt="Екатерина Иванова" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Екатерина Иванова</h3>
                  <p className="text-sm text-muted-foreground">Директор по развитию</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <img 
                      src="/placeholder.svg" 
                      alt="Михаил Сидоров" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Михаил Сидоров</h3>
                  <p className="text-sm text-muted-foreground">Аграрный эксперт</p>
                </div>
              </div>
            </div>
            
            {/* Как мы работаем */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Как мы работаем</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                    1
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Отбор фермеров</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Мы проверяем каждого фермера и его методы выращивания продукции.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                    2
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Контроль качества</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Продукция проходит проверку на соответствие экологическим стандартам.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                    3
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Доставка</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Мы организуем быструю доставку, чтобы сохранить свежесть продуктов.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                    4
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Обратная связь</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Мы собираем отзывы клиентов для постоянного улучшения качества.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Присоединиться к нам */}
        <section className="mx-auto mt-16 max-w-4xl rounded-xl bg-primary/10 p-8 text-center">
          <h2 className="font-playfair text-2xl font-semibold md:text-3xl">Присоединяйтесь к нашему движению</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Стань частью сообщества людей, заботящихся о качестве продуктов питания и будущем нашей планеты.
            Покупай напрямую у фермеров или стань нашим поставщиком.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-md font-medium text-primary-foreground hover:bg-primary/90">
              Стать поставщиком
            </a>
            <a href="#" className="inline-flex items-center rounded-md border border-primary bg-background px-6 py-3 text-md font-medium text-primary hover:bg-primary/10">
              Подписаться на новости
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
