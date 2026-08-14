const steps = [
  {
    step: "01",
    title: "Search & Discover",
    description:
      "Browse thousands of verified listings with advanced filters. Our AI surfaces the best matches based on your preferences and lifestyle.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Get Smart Insights",
    description:
      "Receive AI-powered price analysis, neighborhood reports, and market trend data so you always make informed decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Tour & Connect",
    description:
      "Schedule in-person or virtual tours instantly. Chat directly with verified agents and sellers with zero pressure.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Close with Confidence",
    description:
      "Streamlined digital paperwork, transparent fees, and dedicated support guide you from offer to keys — stress free.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f5f7fa]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#e8825a] uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3c5e]">How openhauss Works</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From first search to final signature — we make every step transparent, fast, and human.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#1a3c5e]/20 to-transparent" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1a3c5e] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.step}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#e8825a]/10 flex items-center justify-center text-[#e8825a] mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-[#1a3c5e] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
