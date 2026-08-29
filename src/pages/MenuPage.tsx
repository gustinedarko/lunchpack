import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import menuJollof from "@/assets/menu-jollof.jpg";
import menuWaakye from "@/assets/menu-waakye.jpg";
import menuFriedRice from "@/assets/menu-fried-rice.jpg";
import menuBanku from "@/assets/menu-banku.jpg";
import menuYamChips from "@/assets/menu-fried-yam.jpg";
import menuRice from "@/assets/menu-rice.jpg";

const meals = [
  { name: "Jollof Rice & Grilled Chicken", desc: "Smoky jollof rice served with grilled chicken, fried plantain, and fresh vegetables.", price: "GH₵ 45", img: menuJollof },
  { name: "Waakye & Fish", desc: "Ghanaian waakye served with fish, tender beef, gari, boiled egg, and a tasty shito sauce.", price: "GH₵ 40", img: menuWaakye },
  { name: "Fried Rice & Chicken", desc: "Flavorful fried rice with seasoned grilled chicken, mixed vegetables, and a side of fresh salad.", price: "GH₵ 38", img: menuFriedRice },
  { name: "Banku & Grilled Tilapia", desc: "Soft banku served with grilled tilapia, fresh pepper sauce, and sliced onions.", price: "GH₵ 35", img: menuBanku },
  { name: "Chicken & Yam Chips", desc: "Crispy yam chips served with seasoned grilled chicken and a fresh house pepper sauce.", price: "GH₵ 42", img: menuYamChips },
  { name: "Plain Rice & Garden Egg Stew", desc: "Fluffy steamed rice served with rich garden egg stew and tender pieces of protein.", price: "GH₵ 40", img: menuRice },
];

const MenuPage = () => {
  return (
    <Layout>
      <section className="container-narrow section-padding">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
            Our Menu
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold">
            Fresh Meals, Made Daily
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our menu changes weekly to keep things exciting. Here are some of our favorites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <Card key={meal.name} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img src={meal.img} alt={meal.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading font-semibold text-lg">{meal.name}</h3>
                  <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{meal.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{meal.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/order">Order Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
