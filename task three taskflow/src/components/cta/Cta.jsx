const Cta = () => {
  return (
    <section className="container mx-auto bg-linear-to-r from-indigo-500 via-indigo-800 to-blue-800 p-14 rounded-2xl grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center max-md:gap-y-15 justify-items-end items-center relative overflow-hidden isolate shadow-2xl mb-15">
      <span
        className="absolute w-100 h-100 rounded-full bg-blue-800 bottom-0 right-0 translate-y-1/2 -translate-x-1/4 translate -z-10 blur-2xl"
        aria-hidden="true"
      ></span>

      <span
        className="absolute w-100 h-100 rounded-full bg-indigo-500 top-0 left-0 -translate-y-1/2 translate-x-1/2 translate -z-10 blur-2xl"
        aria-hidden="true"
      ></span>
      <div className="max-w-2xl">
        <span className="font-bold text-purple-50 tracking-wide py-1 px-3 bg-purple-300/70 rounded-4xl inline-block mb-4">
          READY TO TRANSFORM YOUR FLOW?
        </span>
        <h2 className="text-5xl font-extrabold text-purple-0 mb-8">
          Start managing tasks effortlessly today.
        </h2>

        <p className="text-purple-0 leading-6">
          Set up in under 60 seconds. Import boards directly from Trello, Asana,
          or CSV with one click.
        </p>
      </div>
      <button className="bg-purple-0 text-purple-600 px-11 py-5 font-bold rounded-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        Get Started Now
      </button>
    </section>
  );
};

export default Cta;
