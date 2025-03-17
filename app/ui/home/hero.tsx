import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-8 lg:py-16 flex items-center flex-col px-6"
    >
      <Image
        alt="Sanudin Avatar"
        width={200}
        height={200}
        src="/sanudin-avatar.png"
      />
      <div className="text-center mx-auto mb-15">
        <h1 className="text-4xl lg:text-6xl my-5 font-bold text-title">
          Hi, I&apos;m
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 mx-3">
            Sanudin
          </span>
          👋
        </h1>
        <h2 className="text-xl lg:text-2xl font-semibold text-content">
          A software engineer, developer, and lifelong learner
        </h2>
      </div>
      {/* Gif maker https://ezgif.com */}
      {/* Icons from https://www.flaticon.com */}
      <Image alt="Icons" width={48} height={48} src="/icons.webp" />
    </section>
  );
}
