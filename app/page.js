import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import MarqueeSection from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero/>
      <MarqueeSection/>
      <HomeAbout/>
      <HomeProjects/>
    </div>
  );
}
