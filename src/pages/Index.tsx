import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(250);

  const menuItems = [
    {
      category: 'Классика кофе',
      items: [
        { name: 'Эспрессо', price: 120, description: 'Классический итальянский кофе', icon: 'Coffee' },
        { name: 'Американо', price: 150, description: 'Эспрессо с горячей водой', icon: 'Droplet' },
        { name: 'Капучино', price: 200, description: 'Эспрессо с молочной пенкой', icon: 'Coffee' },
        { name: 'Латте', price: 220, description: 'Нежный кофе с молоком', icon: 'Heart' },
      ]
    },
    {
      category: 'Рафы',
      items: [
        { name: 'Раф классический', price: 260, description: 'Сливочный кофе с ванилью', icon: 'Sparkles' },
        { name: 'Раф лавандовый', price: 280, description: 'С нотками лаванды', icon: 'Flower2' },
        { name: 'Раф карамельный', price: 280, description: 'Сладкий раф с карамелью', icon: 'Candy' },
      ]
    },
    {
      category: 'Не кофе',
      items: [
        { name: 'Горячий шоколад', price: 200, description: 'Насыщенный шоколадный напиток', icon: 'Coffee' },
        { name: 'Какао', price: 180, description: 'Классическое какао на молоке', icon: 'Cookie' },
        { name: 'Матча латте', price: 240, description: 'Зелёный чай с молоком', icon: 'Leaf' },
      ]
    },
    {
      category: 'Чай',
      items: [
        { name: 'Чёрный чай', price: 150, description: 'Классический чёрный чай', icon: 'Coffee' },
        { name: 'Зелёный чай', price: 150, description: 'Освежающий зелёный чай', icon: 'Leaf' },
        { name: 'Улун', price: 180, description: 'Полуферментированный чай', icon: 'Coffee' },
      ]
    },
    {
      category: 'Не чайные чаи',
      items: [
        { name: 'Ромашковый', price: 160, description: 'Успокаивающий ромашковый чай', icon: 'Flower' },
        { name: 'Мятный', price: 160, description: 'Освежающий мятный настой', icon: 'Leaf' },
        { name: 'Имбирный', price: 170, description: 'Согревающий имбирный напиток', icon: 'Flame' },
      ]
    },
    {
      category: 'Летняя коллекция',
      items: [
        { name: 'Колд брю', price: 280, description: 'Холодное заваривание 12 часов', icon: 'Snowflake' },
        { name: 'Айс латте', price: 240, description: 'Холодный кофе с молоком', icon: 'IceCream' },
        { name: 'Фраппе', price: 260, description: 'Ледяной кофейный коктейль', icon: 'Snowflake' },
      ]
    },
    {
      category: 'Фруктовые напитки',
      items: [
        { name: 'Апельсиновый фреш', price: 220, description: 'Свежевыжатый апельсиновый сок', icon: 'Apple' },
        { name: 'Лимонад', price: 180, description: 'Домашний освежающий лимонад', icon: 'CircleDot' },
        { name: 'Ягодный морс', price: 200, description: 'Из свежих ягод', icon: 'Cherry' },
      ]
    },
    {
      category: 'Смузи',
      items: [
        { name: 'Ягодный смузи', price: 280, description: 'Микс из свежих ягод', icon: 'Cherry' },
        { name: 'Манго-банан', price: 290, description: 'Тропический смузи', icon: 'Apple' },
        { name: 'Зелёный детокс', price: 300, description: 'Шпинат, яблоко, киви', icon: 'Leaf' },
      ]
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/5bedd6b6-d427-4087-aebd-f59ae1e0692e.jpg',
    'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/478ea942-7b51-4df7-8bfc-8a036584fec2.jpg',
    'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/4eb6a4c6-e5ce-48a2-af39-ca586cbcf046.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Coffee" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Алхимия кофе</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#menu" className="text-sm font-medium hover:text-primary transition-colors">Меню</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#loyalty" className="text-sm font-medium hover:text-primary transition-colors">Бонусы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">
            <Icon name="CreditCard" className="mr-2 h-4 w-4" />
            Моя карта
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="Sparkles" className="mr-2 h-4 w-4" />
              Пн-Пт: 8:00-22:00 | Сб-Вс: 9:00-22:00
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Создаём кофейную
              <span className="text-primary block mt-2">магию каждый день</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая чашка — это результат мастерства наших бариста и любви к кофе. Присоединяйтесь к программе лояльности и получайте бонусы!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Coffee" className="mr-2 h-5 w-5" />
                Посмотреть меню
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Gift" className="mr-2 h-5 w-5" />
                Получить карту
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="text-base">
              <Icon name="MenuSquare" className="mr-2 h-4 w-4" />
              Наше меню
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Выберите свой идеальный кофе</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы используем только свежеобжаренные зёрна премиум-класса
            </p>
          </div>

          <Tabs defaultValue="Классика кофе" className="w-full">
            <div className="overflow-x-auto pb-4">
              <TabsList className="inline-flex w-auto min-w-full justify-start gap-2 mb-8">
                {menuItems.map((category) => (
                  <TabsTrigger key={category.category} value={category.category}>
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuItems.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name={item.icon as any} className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{item.name}</CardTitle>
                              <CardDescription>{item.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="loyalty" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge variant="secondary" className="text-base">
                <Icon name="Gift" className="mr-2 h-4 w-4" />
                Программа лояльности
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Копите бонусы с каждой чашкой</h2>
              <p className="text-xl text-muted-foreground">
                1 рубль = 1 бонус. Оплачивайте до 50% заказа бонусами!
              </p>
            </div>

            <Card className="overflow-hidden bg-gradient-to-br from-primary to-accent text-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-white">Ваша карта лояльности</CardTitle>
                    <CardDescription className="text-white/80">ID: AL-2024-1547</CardDescription>
                  </div>
                  <Icon name="Sparkles" className="h-12 w-12 text-white/80" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold">{loyaltyPoints}</span>
                    <span className="text-2xl mb-1 text-white/80">бонусов</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${(loyaltyPoints / 500) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-white/80 mt-2">До следующего уровня: {500 - loyaltyPoints} бонусов</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <Icon name="Coffee" className="h-8 w-8 mx-auto mb-2 text-white/80" />
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-white/80">Напитков</p>
                  </div>
                  <div className="text-center">
                    <Icon name="TrendingUp" className="h-8 w-8 mx-auto mb-2 text-white/80" />
                    <p className="text-2xl font-bold">5%</p>
                    <p className="text-sm text-white/80">Кешбэк</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Star" className="h-8 w-8 mx-auto mb-2 text-white/80" />
                    <p className="text-2xl font-bold">VIP</p>
                    <p className="text-sm text-white/80">Статус</p>
                  </div>
                </div>

                <Button variant="secondary" size="lg" className="w-full">
                  <Icon name="CreditCard" className="mr-2 h-5 w-5" />
                  Пополнить карту
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <Icon name="Gift" className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Бонусы за покупки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Получайте 5% от каждого заказа на бонусный счёт</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Cake" className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>День рождения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">В ваш день рождения — двойные бонусы!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Users" className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Приводи друга</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Пригласите друга и получите по 100 бонусов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="text-base">
              <Icon name="Image" className="mr-2 h-4 w-4" />
              Галерея
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Атмосфера нашей кофейни</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Алхимия кофе</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge variant="secondary" className="text-base">
                <Icon name="Heart" className="mr-2 h-4 w-4" />
                О нас
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Философия Алхимии кофе</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Icon name="Flame" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Свежая обжарка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наши поставщики обжаривают для нас всегда свежие зёрна малыми партиями каждую неделю. Это позволяет нам всегда вкусно и качественно готовить для Вас самый лучший кофейный напиток, что позволяет раскрывать уникальные вкусовые ноты каждой чашки эспрессо.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Users" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Мастера бариста</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наша команда — это профессионалы с международными сертификатами. Каждый напиток готовится с душой и вниманием к деталям.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Sparkles" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Уютная атмосфера</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Современный дизайн, удобные места для работы и встреч, бесплатный Wi-Fi и розетки у каждого столика. Мы создали пространство для вашего комфорта.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <Badge variant="secondary" className="text-base">
                <Icon name="MapPin" className="mr-2 h-4 w-4" />
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Приходите к нам</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Как нас найти</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">ул. Пресненский вал 21</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 8:00 - 22:00<br />Сб-Вс: 9:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">alchemy-center.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Социальные сети</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                    <a href="https://instagram.com/alchemy-centr" target="_blank" rel="noopener noreferrer">
                      <Icon name="Instagram" className="mr-3 h-5 w-5" />
                      @alchemy-centr
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                    <a href="https://t.me/alchemy_center" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-3 h-5 w-5" />
                      Telegram
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Coffee" className="h-8 w-8" />
              <span className="text-xl font-bold">Алхимия кофе</span>
            </div>
            <p className="text-sm opacity-80">© 2024 Алхимия кофе. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://instagram.com/alchemy-centr" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://t.me/alchemy_center" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
