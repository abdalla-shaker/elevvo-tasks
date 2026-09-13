const testimonialsList = [
  {
    id: 1,
    quote:
      "“TaskFlow doubled my daily productivity. The clean interface keeps me focused on what actually matters.”",
    name: "Sarah M.",
    role: "Freelance Designer",
    avatar: "../../../images/sarah.png",
  },
  {
    id: 2,
    quote:
      "“Our entire team switched to TaskFlow last month. Project handoffs have never been smoother!”",
    name: "David K.",
    role: "Product Manager",
    avatar: "../../../images/david.png",
  },
  {
    id: 3,
    quote:
      "“Simple, fast, and beautiful. It's the only task app that stuck with me.”",
    name: "Elena R.",
    role: "Software Engineer",
    avatar: "../../../images/elena.png",
  },
];

const StarRating = () => (
  <div
    className="flex gap-1 text-orange-700 mb-4"
    aria-label="5 out of 5 stars"
  >
    {[...Array(5)].map((_, index) => (
      <svg key={index} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section
      className="bg-purple-50/30 py-16 px-4 sm:px-6 lg:px-8"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
            COMMUNITY LOVE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-natural-900 tracking-tight mb-4">
            Loved by Productive People
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
            Join over 45,000 creators, engineers, and product leaders who start
            every morning with TaskFlow.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonialsList.map((item) => (
            <li
              key={item.id}
              className="bg-natural-0 rounded-2xl shadow-sm border border-natural-100 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <article className="flex flex-col justify-between h-full">
                <div className="p-6 sm:p-8 flex-1">
                  <StarRating />
                  <blockquote className="text-natural-800 text-base sm:text-lg font-medium leading-relaxed cursor-default">
                    {item.quote}
                  </blockquote>
                </div>

                <div className="bg-purple-50/30 border-t border-purple-50 p-6 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-natural-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-natural-900 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
