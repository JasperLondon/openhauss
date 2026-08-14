const testimonials = [
  {
    quote:
      "openhauss made what felt like an overwhelming process completely manageable. The AI valuations were spot-on and saved us from overpaying.",
    name: "Sarah & Tom Mitchell",
    role: "First-time homebuyers, Brooklyn NY",
    initials: "SM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    quote:
      "I listed my property on a Friday morning and had three qualified offers by Sunday. The platform just works. I can't believe I used to rely on old-school brokers.",
    name: "Marcus Davis",
    role: "Seller, Miami FL",
    initials: "MD",
    color: "bg-orange-100 text-orange-600",
  },
  {
    quote:
      "The neighborhood insights tool is incredible. We knew about the new park development before anyone else did. Moved in last month and couldn't be happier.",
    name: "Priya Sharma",
    role: "Buyer, Austin TX",
    initials: "PS",
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a3c5e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#e8825a] uppercase tracking-wider mb-2">Success Stories</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Real People, Real Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#e8825a] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/90 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
