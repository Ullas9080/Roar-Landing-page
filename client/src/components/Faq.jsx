import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does ROAR ENT offer?",
    answer:
      "We offer event management, artist management, production, digital marketing, gaming events, web & app development, content design, brand promotions, and creator collaborations.",
  },
  {
    question: "How can I partner with ROAR ENT?",
    answer:
      "You can reach us through the contact form, email roar.ent23@gmail.com or call +91 9380673384. We collaborate with brands, creators and communities.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes! We work with startups as well as established brands. Our campaigns are tailored to the size and goals of each client.",
  },
  {
    question: "What makes ROAR ENT unique?",
    answer:
      "Our biggest strength is our deep connection with Gen Z audiences. Being a youth-led platform helps us create authentic experiences.",
  },
  {
    question: "Can I join ROAR ENT?",
    answer:
      "Yes! Follow @roar_ent_official on Instagram or visit our Linktree to learn about collaborations and opportunities.",
  },
  {
    question: "What events do you manage?",
    answer:
      "We handle college festivals, corporate events, concerts, esports tournaments, product launches, brand activations and community events.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-[#fff7ed] via-white to-[#ffedd5]">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-orange-400/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold uppercase text-sm tracking-wider">
            Got Questions?
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-3">
            Frequently Asked{" "}
            <span className="text-orange-500">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <div
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-orange-400 shadow-lg shadow-orange-200"
                    : "border-gray-200"
                }`}
              >

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >

                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      openIndex === index
                        ? "bg-orange-500"
                        : "bg-gray-100"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="text-white w-5 h-5" />
                    ) : (
                      <Plus className="text-gray-700 w-5 h-5" />
                    )}
                  </motion.div>

                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}