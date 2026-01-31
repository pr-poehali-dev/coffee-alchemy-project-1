import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {

  const menuItems = [
    {
      category: 'Классика',
      items: [
        { name: 'Дабл эспрессо', price: '240₽', description: '60 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/43671aef-e651-47a9-9034-548504964993.jpg' },
        { name: 'Американо', price: '240₽ / 290₽', description: '200 / 300 мл', icon: 'Droplet', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/43671aef-e651-47a9-9034-548504964993.jpg' },
        { name: 'Капучино', price: '330₽ / 380₽', description: '200 / 300 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
        { name: 'Флэт вайт', price: '350₽', description: '200 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
        { name: 'Латте', price: '380₽', description: '300 мл', icon: 'Heart', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
        { name: 'Капучино на альтернативном молоке', price: '330₽ / 420₽', description: '200 / 300 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
        { name: 'Флэт Вайт на альтернативном молоке', price: '390₽', description: '200 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
        { name: 'Латте на альтернативном молоке', price: '420₽', description: '300 мл', icon: 'Heart', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
      ]
    },
    {
      category: 'Рафы',
      items: [
        { name: 'Раф классический', price: '330₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф мёд – банан – кокос', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф банановый', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф пряный апельсин', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф финиковый', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф шоколад-орех', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф яблочный крамбл', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф сырный панч', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф вафельный рожок', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
        { name: 'Раф малина-мята', price: '370₽', description: '300 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/0e7d5ebb-f5ea-4354-84fd-79252a66503e.jpg' },
      ]
    },
    {
      category: 'Не кофе',
      items: [
        { name: 'Матча зелёная', price: '350₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Таро матча', price: '350₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Питахайя матча', price: '350₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Матча на альтернативном молоке', price: '390₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Таро на альтернативном молоке', price: '390₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Питахайя на альтернативном молоке', price: '390₽', description: '300 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/a2328ce8-56f6-4d61-9d97-eb8dfefc49c9.jpg' },
        { name: 'Какао с маршмеллоу', price: '380₽', description: '300 мл', icon: 'Cookie', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/ad67ade7-4e44-4a40-86e2-ebc058ed7666.jpg' },
      ]
    },
    {
      category: 'Чай',
      items: [
        { name: 'Ассам', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Молочный улун', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Тегуань Инь', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Дянь Хонг', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Пуэр', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Coffee', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Травяной', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Жасминовый', price: '250₽ / 350₽', description: '350 / 500 мл', icon: 'Flower', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
      ]
    },
    {
      category: 'Нечайные чаи',
      items: [
        { name: 'Облепиховый', price: '320₽ / 450₽', description: '300 / 500 мл', icon: 'Cherry', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Облепиха имбирь абрикос', price: '350₽ / 450₽', description: '300 / 500 мл', icon: 'Cherry', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Малина - мандарин - лимон', price: '350₽ / 450₽', description: '300 / 500 мл', icon: 'Cherry', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Манго - маракуйя - апельсин', price: '350₽ / 450₽', description: '300 / 500 мл', icon: 'Apple', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
        { name: 'Глинтвейн б/а', price: '370₽', description: '300 мл', icon: 'Flame', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/c1ce512a-0b94-43cd-a563-3f9945cd63f2.jpg' },
      ]
    },
    {
      category: 'Летняя коллекция',
      items: [
        { name: 'Бамбл апельсин', price: '450₽', description: '450 мл', icon: 'CircleDot', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Бамбл грейпфрут', price: '450₽', description: '450 мл', icon: 'CircleDot', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Эспрессо-тоник классик/лимон/грейпфрут', price: '450₽', description: '450 мл', icon: 'Droplet', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Матча тоник', price: '450₽', description: '450 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Таро тоник', price: '450₽', description: '450 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Питахайя тоник', price: '450₽', description: '450 мл', icon: 'Leaf', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Латте бабл-гам с джус боллами', price: '450₽', description: '450 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
        { name: 'Латте йогурт с джус боллами', price: '450₽', description: '450 мл', icon: 'Sparkles', image: 'https://cdn.poehali.dev/projects/647b603a-44a2-4761-acba-3771aeecdd62/files/92b1e603-2968-4a4c-8fbd-f5c6aedefa6c.jpg' },
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
            <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">События</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">
            <Icon name="Calendar" className="mr-2 h-4 w-4" />
            Записаться
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
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#menu">
                  <Icon name="Coffee" className="mr-2 h-5 w-5" />
                  Посмотреть меню
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="#events">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Наши события
                </a>
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

          <Tabs defaultValue="Классика" className="w-full">
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item: any) => (
                    <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                        <CardDescription className="text-xs">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <span className="text-xl font-bold text-primary">{item.price}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="events" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="GraduationCap" className="h-24 w-24 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" className="h-4 w-4" />
                    <span>Каждую субботу в 14:00</span>
                  </div>
                  <CardTitle className="text-2xl">Мастер-класс по латте-арту</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Научитесь создавать красивые рисунки на кофе под руководством профессионального бариста. Все материалы включены!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">1500 ₽</span>
                    <Button>
                      <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Icon name="Wine" className="h-24 w-24 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" className="h-4 w-4" />
                    <span>Каждое воскресенье в 12:00</span>
                  </div>
                  <CardTitle className="text-2xl">Дегустация кофе</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Попробуйте 5 сортов кофе из разных регионов мира. Узнайте о различиях во вкусе, аромате и способах приготовления.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">800 ₽</span>
                    <Button>
                      <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Icon name="Wifi" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Коворкинг зона</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Бесплатный Wi-Fi, розетки у каждого столика и комфортная атмосфера для работы</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Icon name="Users" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Книжный клуб</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Встречи любителей книг каждый вторник. Обсуждаем новинки за чашкой кофе</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Icon name="Music" className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">Живая музыка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Каждую пятницу вечером — выступления местных музыкантов и джазовые вечера</p>
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