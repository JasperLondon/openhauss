export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#f5f7fa]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#1a3c5e] to-[#16324f] rounded-3xl px-8 py-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#e8825a]/10" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/5" />

          <div className="relative">
            <p className="text-sm font-semibold text-[#e8825a] uppercase tracking-wider mb-3">
              Get Started Today
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Join over 200,000 buyers, sellers, and renters who trust openhauss to simplify their real estate journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-[#e8825a] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#d4714a] transition-colors shadow-lg shadow-[#e8825a]/30">
                Start Your Search
              </button>
              <button className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors">
                List Your Property
              </button>
            </div>

            <p className="mt-6 text-white/40 text-sm">
              No credit card required · Free to browse · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
