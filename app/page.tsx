"use client";

import { motion } from "framer-motion";

import { NavigationBar } from "@/components/navigation-bar";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SpecialtiesSection } from "@/components/sections/specialties";
import { ValuesSection } from "@/components/sections/values";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavigationBar />
      <HeroSection />
      <ProjectsSection />
  <SpecialtiesSection />
  <ValuesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppFab />
    </motion.main>
  );
}
