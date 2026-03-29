import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import menuJollof from "@/assets/menu-jollof.jpg";
import menuSalad from "@/assets/menu-salad.jpg";
import menuGrain from "@/assets/menu-grain-bowl.jpg";
import menuWrap from "@/assets/menu-wrap.jpg";
import menuSmoothie from "@/assets/menu-smoothie.jpg";
import menuStew from "@/assets/menu-stew.jpg";

const meals = [
  { name: "Jollof Rice & Grilled Fish", desc: "Smoky jollof rice with grilled tilapia, plantain, and fresh vegetables.", price: "GH₵ 35", img: menuJollof },
  { name: "Grilled Chicken Salad", desc: "Mixed greens with grilled chicken breast, cucumber, tomatoes, and light vinaigrette.", price: "GH₵ 30", img: menuSalad },
  { name: "Power Grain Bowl", desc: "Brown rice, roasted chickpeas, fresh vegetables, and creamy tahini dressing.", price: "GH₵ 28", img: menuGrain },
  { name: "Chicken Wrap", desc: "Whole wheat wrap filled with grilled chicken, lettuce, peppers, and house sauce.", price: "GH₵ 25", img: menuWrap },
  { name: "Berry Smoothie Bowl", desc: "Blended berries, granola, fresh fruit, and a drizzle of honey.", price: "GH₵ 22", img: menuSmoothie },
  { name: "Garden Stew & Rice", desc: "Hearty vegetable stew with lean protein served over fluffy steamed rice.", price: "GH₵ 32", img: menuStew },
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
