import HomeHero from "@/components/HomeHero";
import MarqueeSection from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero/>
      <MarqueeSection/>
    </div>
  );
}
