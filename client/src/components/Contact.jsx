import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-10 lg:py-10 overflow-hidden bg-white">
      
      {/* Decorative Blurs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-[200px] opacity-10" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#FF8C42] rounded-full blur-[150px] opacity-10" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#FF6B35] text-sm font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-[#FF6B35]">Us</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              {/* Phone */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Phone</h4>
                  <a
                    href="tel:+919380673384"
                    className="text-xl font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors"
                  >
                    +91 9380673384
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Email</h4>
                  <a
                    href="mailto:roar.ent23@gmail.com"
                    className="text-xl font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors"
                  >
                    roar.ent23@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Instagram</h4>
                  <a
                    href="https://instagram.com/roar_ent_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
                  >
                    @roar_ent_official
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Linktree */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">All Links</h4>
                  <a
                    href="https://linktr.ee/roarent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
                  >
                    Linktree
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h3>

                <div className="space-y-6">

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FF6B35]"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FF6B35]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF6B35] hover:bg-[#ff5a1f] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>

                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}