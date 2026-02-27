/* ============================================================
   Home — Entrehilos Atelier
   Página principal que integra todas las secciones
   Style: Taller Mediterráneo (Warm Craft Studio)
   ============================================================ */
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OrderForm from "@/components/OrderForm";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import PrivacyAnchor from "@/components/PrivacyAnchor";

export default function Home() {
  // Intersection Observer for fade-in-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <OrderForm />
        <GallerySection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer with legal info */}
      <PrivacyAnchor />
      <Footer />

      {/* Floating elements */}
      <WhatsAppButton />
      <ChatBot />

      {/* Cookie consent banner */}
      <CookieBanner />
    </div>
  );
}
