const listings = [
  {
    id: 1,
    image: null,
    price: "$1,250,000",
    address: "142 Maple Grove Avenue",
    city: "Brooklyn, NY 11201",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    type: "House",
    tag: "New",
    tagColor: "bg-[#e8825a]",
  },
  {
    id: 2,
    image: null,
    price: "$849,000",
    address: "78 Lakefront Drive, Unit 12B",
    city: "Chicago, IL 60611",
    beds: 2,
    baths: 2,
    sqft: "1,180",
    type: "Condo",
    tag: "Featured",
    tagColor: "bg-[#1a3c5e]",
  },
  {
    id: 3,
    image: null,
    price: "$2,400,000",
    address: "55 Oceanview Terrace",
    city: "Miami Beach, FL 33140",
    beds: 5,
    baths: 4,
    sqft: "3,800",
    type: "Villa",
    tag: "Luxury",
    tagColor: "bg-amber-500",
  },
  {
    id: 4,
    image: null,
    price: "$620,000",
    address: "29 Elm Street, Suite 4A",
    city: "Austin, TX 78701",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Townhouse",
    tag: "New",
    tagColor: "bg-[#e8825a]",
  },
  {
    id: 5,
    image: null,
    price: "$985,000",
    address: "310 Hillside Boulevard",
    city: "Seattle, WA 98103",
    beds: 3,
    baths: 2.5,
    sqft: "2,100",
    type: "House",
    tag: "Price Drop",
    tagColor: "bg-green-600",
  },
  {
    id: 6,
    image: null,
    price: "$455,000",
    address: "88 Canal Street, Apt 9C",
    city: "Los Angeles, CA 90012",
    beds: 1,
    baths: 1,
    sqft: "820",
    type: "Apartment",
    tag: "Featured",
    tagColor: "bg-[#1a3c5e]",
  },
];

// Gradient placeholder colors per listing
const placeholderGradients = [
  "from-blue-100 to-blue-200",
  "from-slate-100 to-slate-200",
  "from-amber-100 to-orange-200",
  "from-emerald-100 to-teal-200",
  "from-violet-100 to-purple-200",
  "from-rose-100 to-pink-200",
];

// House icon SVG
function HouseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 32L32 10L56 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 26V54H50V26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="24" y="38" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="3" />
      <rect x="18" y="30" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="3" />
      <rect x="38" y="30" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export default function Listings() {
  return (
    <section id="listings" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-[#e8825a] uppercase tracking-wider mb-2">Browse Properties</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a3c5e]">
              Featured Listings
            </h2>
          </div>
          <button className="shrink-0 rounded-full border-2 border-[#1a3c5e] px-6 py-2.5 text-sm font-semibold text-[#1a3c5e] hover:bg-[#1a3c5e] hover:text-white transition-colors">
            View All Listings →
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, i) => (
            <article key={listing.id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
              {/* Image / placeholder */}
              <div className={`relative h-52 bg-gradient-to-br ${placeholderGradients[i]} flex items-end`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <HouseIcon className="w-24 h-24 text-[#1a3c5e]" />
                </div>
                {/* Tag */}
                <span className={`absolute top-3 left-3 ${listing.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {listing.tag}
                </span>
                {/* Favourite button */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#e8825a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                {/* Type badge */}
                <span className="absolute bottom-3 left-3 bg-white/90 text-[#1a3c5e] text-xs font-medium px-2.5 py-1 rounded-md">
                  {listing.type}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#1a3c5e] text-base leading-snug">{listing.address}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{listing.city}</p>
                  </div>
                  <p className="text-lg font-bold text-[#e8825a] shrink-0 ml-2">{listing.price}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-5 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {listing.beds} beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    {listing.baths} baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {listing.sqft} sqft
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
