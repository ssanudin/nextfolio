import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-8 lg:py-16 flex items-center flex-col px-6">
      <Image
        alt="Sanudin Avatar"
        width={200}
        height={200}
        src="/sanudin-avatar.png"
      />
      <div className="text-center mx-auto">
        <h1 className="text-3xl lg:text-6xl my-5">
          Hi, I&apos;m
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600 font-bold mx-3">
            Sanudin
          </span>
          👋
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold">
          A software engineer and developer
        </h2>
      </div>
    </div>
  );
}
