import Link from "next/link";
import Header from "./ui/home/header";
import Hero from "./ui/home/hero";
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

        <div className="bg-white/90 backdrop-blur backdrop-filter sticky top-0 z-10 py-6 w-full">
          <div className="container mx-auto">
            <nav className="flex items-center space-x-4 justify-between text-sm uppercase tracking-widest">
              <Link
                className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
                href="#about"
              >
                About
              </Link>
              <Link
                className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className="inline-flex flex-1 justify-center transition-all text-content m-0 hover:underline hover:decoration-primary hover:font-bold"
                href="#contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
