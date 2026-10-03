import { Faq } from "../components/home/Faq";
import { Hero } from "../components/home/Hero";
import { How } from "../components/home/How";
import { WaitlistSection } from "../components/home/WaitlistSection";
import { Why } from "../components/home/Why";

export function HomePage() {
  return (
    <>
      <Hero />
      <How />
      <Why />
      <Faq />
      <WaitlistSection />
    </>
  );
}
