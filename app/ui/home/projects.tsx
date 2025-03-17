export default function projects() {
  return (
    <section id="projects" className="w-full py-12 mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5 col-start-2 lg:col-start-2">
            <div className="border border-title/15 w-14 h-14 rounded-xl text-2xl flex justify-center items-center bg-white mb-3">
              🛠️
            </div>
            <h2 className="font-bold text-2xl mb-2 text-title">Projects</h2>
            <h3 className="text-primary mb-3">
              Here are some projects and challenges I've worked on
            </h3>
            <p className="text-content">
              I believe practice is the key to becoming a better developer and
              programmer.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6"></div>
        </div>
      </div>
    </section>
  );
}
