import Image from "next/image";
import Link from "next/link";
import Connects from "../connects";

export default function Header() {
  return (
    <>
      <div className="h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
      <header className="">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <Link aria-label="Home" className="inline-block" href="/">
            <Image
              alt="Sanud.in Logo"
              width={72}
              height={72}
              src="/sanudin-logo.svg"
            />
          </Link>
          <Connects />
        </div>
      </header>
    </>
  );
}
