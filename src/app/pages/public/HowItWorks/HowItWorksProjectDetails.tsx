import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  title: string;
  designer: string;
  imageSrc: string;
  features?: string[];
  reversed?: boolean;
}

export function HowItWorksProjectDetails({ 
  title, 
  designer, 
  imageSrc, 
  features = [
    "Up to 45% off furniture & decor (Decorilla can pay for itself!)",
    "3D renderings of your new room",
    "Floorplan & furniture placement",
    "Shopping list with links",
    "Moodboard",
    "Paint color palette",
    "Tips & implementation guide"
  ],
  reversed = false
}: ProjectDetailsProps) {

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Image Column */}
          <m.div 
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-xl",
              reversed ? "lg:order-2" : "lg:order-1"
            )}
          >
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </m.div>

          {/* Details Column */}
          <m.div 
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={cn(
              "space-y-8",
              reversed ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal leading-tight">
                {title}
              </h2>
              <p className="text-muted-foreground font-light text-lg">
                Designer: <span className="text-foreground font-medium">{designer}</span>
              </p>
            </div>

            <hr className="border-t border-border" />

            <div className="space-y-6">
              <h3 className="text-lg text-gold font-bold uppercase tracking-widest">
                What's included in each package:
              </h3>
              
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start text-muted-foreground leading-relaxed">
                    <span className="mr-3 text-gold text-xl leading-none">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-t border-border" />

            <div className="pt-2 text-center md:text-left space-y-4">
              <Link to="/start-project">
                <Button 
                  className="w-full md:w-auto bg-gold hover:bg-gold-dark text-white px-10 py-8 text-lg font-bold tracking-widest uppercase rounded shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Get Started Now
                </Button>
              </Link>
              <p className="text-muted-foreground text-sm font-light">
                100% satisfaction guarantee
              </p>
            </div>

          </m.div>

        </div>
      </div>
    </section>
  );
}
