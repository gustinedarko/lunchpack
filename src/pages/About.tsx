import Layout from "@/components/Layout";
import aboutImg from "@/assets/about-delivery.jpg";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="container-narrow section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
              About LunchBox Ghana
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              LunchBox Ghana was born from a simple frustration — finding a healthy, affordable lunch during a busy workday in Accra was nearly impossible. We decided to fix that.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We started as a small kitchen delivering meals to a handful of offices. Today, we serve hundreds of professionals across Accra with fresh, nutritious meals every day. Our team of passionate cooks and dedicated riders work together to make sure you never have to compromise between convenience and eating well.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutImg} alt="Food delivery to office" loading="lazy" width={1200} height={800} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-narrow section-padding grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="text-primary" size={24} />
            </div>
            <h2 className="font-heading text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To help busy professionals eat healthy without stress. We believe everyone deserves access to fresh, balanced meals — no matter how hectic their schedule.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Eye className="text-accent" size={24} />
            </div>
            <h2 className="font-heading text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted meal delivery service for professionals in Ghana, expanding to every major city and making healthy eating the easiest choice.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
