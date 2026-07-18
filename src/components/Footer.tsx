import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">🍱 LunchPack</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Freshly packed, healthy meals for busy professionals. Packed for productivity — delivered right to your office.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Menu", path: "/menu" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@lunchpack.app</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/50">
          © {new Date().getFullYear()} LunchPack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
