import type { Metadata } from "next";
import { Navbar } from "@/components/fusen/Navbar";
import { Hero } from "@/components/fusen/Hero";
import { Services } from "@/components/fusen/Services";
import { Products } from "@/components/fusen/Products";
import { Categories } from "@/components/fusen/Categories";
import { Brands } from "@/components/fusen/Brands";
import { WhyUs } from "@/components/fusen/WhyUs";
import { VideoShowcase } from "@/components/fusen/VideoShowcase";
import { Testimonials } from "@/components/fusen/Testimonials";
import { Faq } from "@/components/fusen/Faq";
import { Contact } from "@/components/fusen/Contact";
import { Footer } from "@/components/fusen/Footer";

export const metadata: Metadata = {
  title:
    "Used Nut Cold Heading Machines & Bolt Heading Machines for Sale | FUSEN",
  description:
    "Browse FUSEN stock of inspected used nut cold headers (11B, 14B, 17B, 19B, 24B), bolt heading machines and screw formers from Sijin, Chunzu, Yeswin, Jernyao and more. Worldwide export, power-on test, installation and spare parts.",
  keywords: [
    "used cold heading machine for sale",
    "used nut former",
    "used bolt heading machine",
    "screw cold former",
    "second hand fastener machinery",
    "multi-station cold former",
    "Sijin 19B6S",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Categories />
        <Brands />
        <WhyUs />
        <VideoShowcase />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
