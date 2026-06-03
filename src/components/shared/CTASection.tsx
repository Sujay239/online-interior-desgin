import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light tracking-wide">
            Ready to make your dream space a reality?
          </h2>
          
          <Link to="/start-project">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-sm md:text-base tracking-widest font-bold uppercase rounded shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Let's Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
