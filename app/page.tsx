// app/page.tsx
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Sectors from "@/components/home/Sectors";
import Process from "@/components/home/Process";
import FinalCta from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Sectors />
      <Process />
      <FinalCta />
    </>
  );
}
