import Hero from "@/components/Hero";
import TimeCapsule from '@/components/TimeCapsule';
import Opportunity from '@/components/Opportunity';
import HumanSide from '@/components/HumanSide';
import Symposium from "@/components/Symposium";
import Features from "@/components/Features";
import Registration from "@/components/Registration";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TimeCapsule />
      <Opportunity />
      <HumanSide />
      <Symposium />
      <Features />
      <Registration />
    </main>
  );
}
