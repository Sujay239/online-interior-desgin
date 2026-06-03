import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take?",
    answer: "Most projects are completed within 2-3 weeks, depending on the scope of the project and how quickly you provide feedback to your designer. We work at your pace to ensure you're completely satisfied."
  },
  {
    question: "Do you offer in-home services?",
    answer: "We are a 100% online interior design service. This allows us to offer top-tier design talent to anyone, anywhere, at a fraction of the cost of traditional in-person design."
  },
  {
    question: "Do I have to buy the items right away?",
    answer: "No, absolutely not! Your shopping list and exclusive trade discounts never expire. You can purchase items at your own pace, all at once or one by one, whenever you are ready."
  },
  {
    question: "What happens once I select the winning design?",
    answer: "Once you select a winning concept, you'll work 1-on-1 with that designer to refine the space. You'll collaborate on the floor plan, 3D renders, and shopping list until the design is exactly what you envisioned."
  },
  {
    question: "How do I receive your exclusive furniture discounts?",
    answer: "Our white-glove concierge team handles all the ordering for you. When you're ready to buy, simply check out through our platform, and we'll apply the trade discounts automatically and manage the shipping logistics."
  }
];

export function PortfolioFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-border rounded-lg shadow-sm bg-card px-6 data-[state=open]:border-gold/30 transition-all duration-300 hover:shadow-md"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline hover:text-gold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
        </div>

      </div>
    </section>
  );
}
