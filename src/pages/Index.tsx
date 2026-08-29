import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Leaf, Utensils, Truck, Clock, Star, ArrowRight } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, seasonal produce prepared daily for maximum flavor and nutrition." },
  { icon: Utensils, title: "Balanced Meals", desc: "Every meal is designed by nutrition-conscious chefs for a perfect balance of protein, carbs, and vitamins." },
  { icon: Truck, title: "Office Delivery", desc: "We deliver straight to your office so you never have to leave your desk." },
  { icon: Clock, title: "Reliable Service", desc: "On-time delivery every day. We respect your lunch break." },
];

const steps = [
  { num: "01", title: "Choose Your Meal", desc: "Browse our weekly menu and pick your favorites." },
  { num: "02", title: "Place Your Order", desc: "Order online or via WhatsApp — it takes 30 seconds." },
  { num: "03", title: "Get It Delivered", desc: "We bring fresh food to your office before lunch." },
];

const testimonials = [
  { name: "Akua M.", role: "Marketing Manager", text: "LunchPack has completely changed my workday. The meals arrive fresh, thoughtfully packed, and always on time. Lunch is one less thing to think about." },
  { name: "Kwame D.", role: "Software Engineer", text: "Reliable, healthy, and consistently good. The portions keep me focused through the afternoon — genuinely packed for productivity." },
  { name: "Ama S.", role: "HR Director", text: "We order for the whole team every week. The variety and consistency are unmatched, and everyone looks forward to lunch now." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-narrow section-padding grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
              Packed for Productivity
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Fresh Meals. Thoughtfully Packed.
            </h1>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Freshly packed, healthy meals delivered to busy professionals so you can stay focused, energized, and productive all day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/order">Order Your Pack <ArrowRight className="ml-2" size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/menu">Explore Meal Packs</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroFood} alt="Freshly packed LunchPack meal with grilled chicken, quinoa, and fresh vegetables" width={1920} height={1080} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-secondary">
        <div className="container-narrow section-padding text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Eating Well Shouldn't Interrupt Your Day
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Busy professionals lose valuable focus hunting down decent food, settling for something quick, or skipping meals entirely. Between demanding schedules and limited healthy options, eating well during work hours feels harder than it should.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="container-narrow section-padding text-center">
        <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          The Solution
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Meet LunchPack
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          We freshly prepare and thoughtfully pack balanced meals every morning, then deliver them straight to your workplace. No stress, no waiting — just real food, packed for productivity.
        </p>
      </section>

      {/* Features */}
      <section className="container-narrow section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary">
        <div className="container-narrow section-padding">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to a better lunch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center space-y-4">
                <span className="inline-block font-heading text-5xl font-extrabold text-primary/20">{s.num}</span>
                <h3 className="font-heading font-bold text-xl">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-narrow section-padding">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-none shadow-sm bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container-narrow section-padding text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Pack Your Day Right
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
            Join the professionals who've made freshly packed meals part of their most productive days.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/order">Order Your Pack <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
