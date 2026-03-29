import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const Order = () => {
  return (
    <Layout>
      <section className="container-narrow section-padding">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full">
            Place Your Order
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold">
            Order Your Lunch Today
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to enjoy a fresh, healthy meal at your desk? Choose how you'd like to order below. We deliver across Accra during weekday lunch hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-card rounded-2xl p-8 shadow-sm border space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Phone className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg">Order via WhatsApp</h3>
              <p className="text-muted-foreground text-sm">Send us a message with your meal choice and delivery address.</p>
              <Button className="w-full" asChild>
                <a href="https://wa.me/233000000000" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp <ArrowRight className="ml-1" size={16} />
                </a>
              </Button>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-sm border space-y-4 text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg">Call to Order</h3>
              <p className="text-muted-foreground text-sm">Prefer to call? Reach us directly and we'll take your order over the phone.</p>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+233000000000">Call +233 XX XXX XXXX</a>
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground text-sm">
            Want to see what's available?{" "}
            <Link to="/menu" className="text-primary font-medium hover:underline">Check our menu</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
