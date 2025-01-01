import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { AboutPhotoBlast } from "@/sections/AboutPhotoBlast";
import { Gallery } from "@/sections/Gallery";
import { Pricelist } from "@/sections/PriceList";
import { OurTeam } from "@/sections/OurTeam";
import { Footer } from "@/sections/Footer";

export default function Home(){
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <AboutPhotoBlast/>
      <Gallery/>
      <Pricelist/>
      <OurTeam/>
      <Footer/>
    </>
  );
}