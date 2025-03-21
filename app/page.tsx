import Header from "./ui/home/header";
import Hero from "./ui/home/hero";
import NavLinks from "./ui/home/nav-links";
import About from "./ui/home/about";
import Projects from "./ui/home/projects";
import Contact from "./ui/home/contact";
import Footer from "./ui/home/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <Hero />
        <NavLinks />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
