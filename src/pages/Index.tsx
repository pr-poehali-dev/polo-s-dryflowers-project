import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Букет «Осенний»",
      price: "2,500 ₽",
      image: "/img/938b5ab5-f110-4c0d-9783-4d162e3aedca.jpg",
      category: "Букеты"
    },
    {
      id: 2,
      title: "Картина «Ботаника»",
      price: "4,200 ₽",
      image: "/img/7ef1dcc8-8e40-4136-9aca-2a324ced4170.jpg",
      category: "Картины"
    },
    {
      id: 3,
      title: "Оптовый набор",
      price: "от 15,000 ₽",
      image: "/img/c585848c-e0c3-4925-9274-af0a3e4000d7.jpg",
      category: "Опт"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Невероятно красивые букеты! Качество на высшем уровне, сухоцветы долго сохраняют форму.",
      rating: 5
    },
    {
      name: "Михаил Р.",
      text: "Заказывали оптом для магазина - отличные цены и быстрая доставка.",
      rating: 5
    },
    {
      name: "Елена В.",
      text: "Картины из сухоцветов просто волшебные! Украсили всю квартиру.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige to-secondary">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flower" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">PoloS</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-accent hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-accent hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="text-accent hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-accent hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-accent mb-6">
            Магия сухоцветов<br />
            <span className="text-primary">PoloS</span>
          </h2>
          <p className="text-xl text-accent/80 mb-8 max-w-2xl mx-auto">
            Создаем уникальные букеты, картины и предлагаем оптовые поставки засушенных цветов 
            высочайшего качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Truck" size={20} className="mr-2" />
              Оптовые поставки
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Наши категории</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-accent">{product.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-accent mb-2">Качество</h4>
              <p className="text-accent/70">Только лучшие сухоцветы высшего качества</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-accent mb-2">Доставка</h4>
              <p className="text-accent/70">Быстрая доставка по всей России</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-accent mb-2">Оплата</h4>
              <p className="text-accent/70">Безопасная онлайн-оплата картой</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-accent mb-2">Опт</h4>
              <p className="text-accent/70">Выгодные условия для оптовиков</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Способы оплаты</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <Icon name="CreditCard" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-accent mb-2">Банковской картой</h4>
              <p className="text-accent/70">Visa, MasterCard, МИР</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm">
              <Icon name="Smartphone" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-accent mb-2">Через СБП</h4>
              <p className="text-accent/70">Система быстрых платежей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Отзывы клиентов</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-accent">{review.name}</CardTitle>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-accent/80">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="delivery" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Часто задаваемые вопросы</h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="delivery">
                <AccordionTrigger className="text-accent">Как происходит доставка?</AccordionTrigger>
                <AccordionContent className="text-accent/80">
                  Мы доставляем по всей России через курьерские службы. Сроки доставки 2-5 рабочих дней. 
                  Бережная упаковка гарантирует сохранность товара.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="payment">
                <AccordionTrigger className="text-accent">Какие способы оплаты доступны?</AccordionTrigger>
                <AccordionContent className="text-accent/80">
                  Принимаем оплату банковскими картами и через СБП. 
                  Все платежи защищены SSL-шифрованием.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wholesale">
                <AccordionTrigger className="text-accent">Есть ли скидки для оптовых покупателей?</AccordionTrigger>
                <AccordionContent className="text-accent/80">
                  Да! При заказе от 50,000 ₽ предоставляем скидку 15%. От 100,000 ₽ - скидка 25%. 
                  Индивидуальные условия для постоянных партнеров.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger className="text-accent">Как ухаживать за сухоцветами?</AccordionTrigger>
                <AccordionContent className="text-accent/80">
                  Сухоцветы неприхотливы: избегайте прямых солнечных лучей, высокой влажности. 
                  Периодически очищайте от пыли мягкой кистью.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-accent mb-12">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-2xl font-semibold text-accent mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-accent">+7 (913) 456-78-90</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span className="text-accent">info@polos-flowers.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-accent">г. Омск, ул. Красный Путь, д. 28</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-accent">Пн-Вс: 9:00 - 21:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-accent mb-6">Оформить заказ</h4>
              <div className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
                <Button className="w-full" variant="outline">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button className="w-full" variant="outline">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" size={24} className="text-secondary" />
                <h5 className="text-xl font-bold">PoloS</h5>
              </div>
              <p className="text-white/80">
                Магазин сухоцветов премиум качества. Создаем красоту, которая длится вечно.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Каталог</h6>
              <div className="space-y-2 text-white/80">
                <div>Букеты</div>
                <div>Картины</div>
                <div>Оптовые поставки</div>
                <div>Декор</div>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Информация</h6>
              <div className="space-y-2 text-white/80">
                <div>Доставка и оплата</div>
                <div>Возврат товара</div>
                <div>Уход за сухоцветами</div>
                <div>Оптовым покупателям</div>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Мы в соцсетях</h6>
              <div className="flex space-x-4">
                <Icon name="Youtube" size={24} className="text-white/80 hover:text-secondary cursor-pointer" />
                <Icon name="Send" size={24} className="text-white/80 hover:text-secondary cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-white/80 hover:text-secondary cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 PoloS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;