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
              About LunchPack
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              LunchPack was created to simplify healthy eating for busy professionals. We understand that demanding schedules often lead to skipped meals or unhealthy choices — so we made the healthy choice the easy one.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By delivering freshly prepared, thoughtfully packed meals directly to workplaces, LunchPack helps people stay energized, productive, and focused throughout their day. Every pack reflects our commitment to consistency, reliability, and customer care — from our kitchen to your desk.
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
              To help busy professionals eat healthy without the stress of planning, preparing, or searching for meals. We make healthy eating effortless through fresh, thoughtfully packed meals delivered with convenience, consistency, and care.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Eye className="text-accent" size={24} />
            </div>
            <h2 className="font-heading text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the most trusted healthy meal delivery brand for busy professionals, making fresh, thoughtfully packed meals the easiest choice wherever work takes people.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
