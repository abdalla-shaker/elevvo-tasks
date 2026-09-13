import logo from "../../../images/TaskFlow-icon.svg";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const legalLinks = [
  { label: "Contact Support", href: "#support" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

const Footer = () => {
  return (
    <footer className="bg-natural-0 py-12 px-4 sm:px-6 lg:px-8 border-t border-natural-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-6 lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="task flow icon" />
              <span className="text-xl font-bold text-natural-900 tracking-tight">
                TaskFlow
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              Friction-free task management for modern knowledge workers, agile
              teams, and independent creators.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                <path
                  key="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />,

                <path
                  key="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />,

                <path
                  key="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />,

                <path
                  key="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />,
              ].map((iconPath, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Social Link"
                  className="w-9 h-9 rounded-lg bg-purple-50 hover:bg-purple-100 flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 stroke-current fill-none"
                    viewBox="0 0 24 24"
                  >
                    {iconPath}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-bold text-natural-900 tracking-wider uppercase mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-natural-900 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-bold text-natural-900 tracking-wider uppercase mb-4">
              SUPPORT & LEGAL
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-natural-900 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-purple-50/60 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p>© 2026 TaskFlow Inc. All rights reserved.</p>
          <span className="font-semibold">Built for high-focus momentum</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
