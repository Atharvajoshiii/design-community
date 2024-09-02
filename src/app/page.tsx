import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import { MarqueeDemo } from "@/components/marqueedemo";
import MeetVikas from "@/components/profile";



export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <Features />
      
      <ProductShowcase />
      

      
      <Pricing/>

      <MarqueeDemo/>

      
     
      <FAQs/>

      <CallToAction />
      </div>
      
    </>
  );
}
