import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import AndroidWaitlist from "@/components/AndroidWaitlist";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Showcase />
        <AndroidWaitlist />
        <Privacy />
        <Terms />
        <Contact />
      </main>
    </>
  );
}
