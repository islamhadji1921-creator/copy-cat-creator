import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "What states do you serve GLP-1 programs?",
    answer:
      "We currently serve patients in 48 states. Restrictions may apply in certain states due to local regulations. Contact our support team to confirm availability in your area.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "We currently operate on a cash-pay model to keep our prices transparent and affordable. However, you may be able to use HSA or FSA funds for your treatments. We provide detailed receipts you can submit to your insurance for potential reimbursement.",
  },
  {
    question: "What medications do your doctors prescribe?",
    answer:
      "Our licensed healthcare providers prescribe FDA-approved medications and compounded versions where appropriate. This includes Semaglutide, Tirzepatide, and other evidence-based treatments. All prescriptions are customized based on your individual health profile.",
  },
  {
    question: 'What is our "Same Price at Every Dose" guarantee?',
    answer:
      "Unlike other programs that increase prices as your dosage increases, we keep your monthly cost the same regardless of your prescribed dose. This means you'll never pay more as your treatment progresses.",
  },
  {
    question: "Do your plans include prescriptions and medications?",
    answer:
      "Yes! Your monthly subscription includes your consultation with a licensed provider, the prescription itself, and all medications shipped directly to your door. There are no hidden fees or additional costs.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to know about our programs
            </p>
          </ScrollReveal>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:text-primary hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
