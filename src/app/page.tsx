import type { Metadata } from "next";
import { Navbar } from "@/components/fusen/Navbar";
import { Hero } from "@/components/fusen/Hero";
import { Services } from "@/components/fusen/Services";
import { Destinations } from "@/components/fusen/Destinations";
import { Guides } from "@/components/fusen/Guides";
import { WhyUs } from "@/components/fusen/WhyUs";
import { Testimonials } from "@/components/fusen/Testimonials";
import { Contact } from "@/components/fusen/Contact";
import { Footer } from "@/components/fusen/Footer";

export const metadata: Metadata = {
  title: "FUSEN | China Local Guide Service for Independent Travelers",
  description:
    "Professional local guide services across China. Multilingual translation, private tours, business matchmaking, and factory visits for independent travelers.",
  keywords: [
    "China local guide",
    "private tour China",
    "multilingual guide China",
    "independent travel China",
    "business guide China",
    "factory visit China",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Guides />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
