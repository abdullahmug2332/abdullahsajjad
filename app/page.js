
import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import HomeExperties from "@/components/HomeExperties";
import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import MarqueeSection from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import TechnologiesMarquee from "@/components/TechnologiesMarquee";


export default function Home() {
  return (
    <div>
      <HomeHero/>
      <MarqueeSection/>
      <HomeAbout/>
      <HomeProjects/>
      <HomeExperties/>
      <TechnologiesMarquee/>
    </div>
  );
}
