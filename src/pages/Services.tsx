import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Building2, CalendarDays, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Individual Meal Delivery",
    desc: "Order a single healthy meal delivered to your office. Perfect for solo professionals who want a hassle-free lunch every day.",
    cta: "Order a Meal",
  },
  {
    icon: Building2,
    title: "Office Bulk Orders",
    desc: "Feed your entire team with bulk lunch orders. We offer discounts for offices with 10+ people. Great for meetings and team lunches.",
    cta: "Get a Quote",
  },
  {
    icon: CalendarDays,
    title: "Weekly Meal Plans",
    desc: "Subscribe to a weekly plan and never worry about lunch again. Choose your meals at the start of each week and we handle the rest.",
    cta: "See Plans",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="container-narrow section-padding">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold">
            How We Serve You
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you're ordering for yourself or your whole office, we've got a plan that fits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Card key={s.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-5 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <s.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <Button variant="outline" asChild>
                  <Link to="/contact">{s.cta} <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
