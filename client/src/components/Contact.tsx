import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  containerVariants,
  itemVariants,
  staggerContainerVariants,
  gridItemVariants,
} from '@/lib/animations';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pisey@example.com',
      href: 'mailto:pisey@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+855 (12) 345-6789',
      href: 'tel:+85512345678',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Contact Info Cards */}
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.label}
                href={info.href}
                className="group"
                variants={gridItemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-white dark:bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/50 text-center"
                  whileHover={{
                    boxShadow: '0 20px 25px rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <motion.div
                    className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: 'rgba(0, 212, 255, 0.2)',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <motion.h3
                    className="text-lg font-semibold text-foreground mb-2"
                    whileHover={{ color: '#00d4ff' }}
                  >
                    {info.label}
                  </motion.h3>
                  <motion.p
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {info.value}
                  </motion.p>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="bg-white dark:bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border/50"
            whileHover={{
              boxShadow: '0 20px 25px rgba(0, 212, 255, 0.1)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-3">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Project inquiry"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
