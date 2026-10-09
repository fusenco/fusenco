import type { Metadata } from "next";
import { Navbar } from "@/components/fusen/Navbar";
import { Hero } from "@/components/fusen/Hero";
import { Services } from "@/components/fusen/Services";
import { Products } from "@/components/fusen/Products";
import { Categories } from "@/components/fusen/Categories";
import { Brands } from "@/components/fusen/Brands";
import { WhyUs } from "@/components/fusen/WhyUs";
import { Testimonials } from "@/components/fusen/Testimonials";
import { Contact } from "@/components/fusen/Contact";
import { Footer } from "@/components/fusen/Footer";

export const metadata: Metadata = {
  title: "FUSEN | Used Nut Cold Heading Machines & Bolt Heading Machines",
  description:
    "Supplier of inspected used nut cold headers, bolt heading machines and screw machines. Worldwide export, installation support and spare parts.",
  keywords: [
    "used cold heading machine",
    "nut former",
    "bolt heading machine",
    "used fastener machinery",
    "second hand cold former",
    "screw machine",
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
