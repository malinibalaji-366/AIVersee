import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import LearningJourney from "@/components/landing/LearningJourney";
import ArivuPreview from "@/components/landing/ArivuPreview";
import Stats from "@/components/landing/Stats";
import WhyAIVerse from "@/components/landing/WhyAIVerse";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <LearningJourney />
      <ArivuPreview />
      <Stats />
      <WhyAIVerse />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}