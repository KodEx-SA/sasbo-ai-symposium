import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TimeCapsule from "@/components/TimeCapsule";
import Opportunity from "@/components/Opportunity";
import HumanSide from "@/components/HumanSide";
import Symposium from "@/components/Symposium";
import Features from "@/components/Features";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <TimeCapsule />
        <Opportunity />
        <HumanSide />
        <Symposium />
        <Features />
        <Registration />
      </main>
      <Footer />
    </>
  );
}
