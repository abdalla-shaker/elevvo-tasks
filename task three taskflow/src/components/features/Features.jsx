import Cards from "./Cards.jsx";

const Features = () => {
  return (
    <section className="py-20 bg-purple-100/20 text-center" id="features">
      <div className="container mx-auto">
        <span className="font-bold text-purple-300 tracking-wide py-1 px-3 bg-purple-300/20 rounded-4xl inline-block mb-4">
          CORE CAPABILITIES
        </span>

        <h2 className="text-5xl font-bold tracking-tight mb-5 px-6">
          Why Choose TaskFlow?
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-500 px-6">
          Built from the ground up to reduce cognitive load, automate routine
          busywork, and maintain uninterrupted momentum.
        </p>

        <Cards />
      </div>
    </section>
  );
};

export default Features;
