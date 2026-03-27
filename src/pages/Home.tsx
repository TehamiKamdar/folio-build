import MainLayout from "../layouts/MainLayout";
import { CTA } from "../sections/CTA";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import { Logos } from "../sections/Logos";
import { Pricing } from "../sections/Pricing";
import { Steps } from "../sections/Steps";
import { Testimonials } from "../sections/Testimonials";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Logos />
      <Features />
      <Steps />
      <Testimonials />
      <Pricing />
      <CTA />
    </MainLayout>
  );
}