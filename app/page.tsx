import Link from "next/link";
import Header from "./ui/home/header";
import Hero from "./ui/home/hero";
import Footer from "./ui/home/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <Hero />

        <div className="bg-white/90 backdrop-blur backdrop-filter sticky top-0 z-10 lg:py-6">
          <div className="lg:hidden">
            <select className="w-full p-4 border-0 bg-transparent font-semibold">
              <option value="projects">about</option>
              <option value="team">projects</option>
              <option value="events">contacts</option>
            </select>
          </div>
          <div className="hidden lg:block container">
            <nav className="flex items-center space-x-4 justify-between font-medium text-sm uppercase tracking-widest">
              <Link
                className="inline-flex flex-1 justify-center transition-all text-gray-900 font-medium"
                href="#about"
              >
                about
              </Link>
              <Link
                className="inline-flex flex-1 justify-center transition-all text-gray-400"
                href="#projects"
              >
                projects
              </Link>
              <Link
                className="inline-flex flex-1 justify-center transition-all text-gray-400"
                href="#contacts"
              >
                contacts
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
