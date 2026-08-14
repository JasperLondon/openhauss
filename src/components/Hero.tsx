"use client";

import { useState } from "react";

const cities = ["New York", "Los Angeles", "Chicago", "Miami", "Seattle", "Austin"];
const propertyTypes = ["Any Type", "Apartment", "House", "Condo", "Townhouse", "Villa"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "sell">("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Any Type");

  return (
    <section className="relative min-h-screen flex items-center bg-[#f5f7fa] pt-16">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a3c5e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column – copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8825a]/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e8825a]" />
              <span className="text-sm font-medium text-[#e8825a]">Smart Real Estate Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#1a3c5e] leading-tight mb-6">
              Find Your{" "}
              <span className="relative">
                Dream Home
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q100 0 200 6" stroke="#e8825a" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <br />with Confidence
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              openhauss connects buyers, sellers, and renters with AI-powered insights,
              transparent pricing, and a seamless end-to-end experience.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "50K+", label: "Active Listings" },
                { value: "98%", label: "Customer Satisfaction" },
                { value: "$2B+", label: "Transactions Closed" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#1a3c5e]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – search card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-[#f5f7fa] rounded-lg p-1 mb-6">
              {(["buy", "rent", "sell"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                    activeTab === tab
                      ? "bg-[#1a3c5e] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#1a3c5e]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="City, neighborhood, or zip code"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-3 text-sm focus:border-[#1a3c5e] focus:outline-none focus:ring-1 focus:ring-[#1a3c5e]"
                    list="city-suggestions"
                  />
                  <datalist id="city-suggestions">
                    {cities.map((city) => (
                      <option key={city} value={city} />
                    ))}
                  </datalist>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-3 text-sm focus:border-[#1a3c5e] focus:outline-none focus:ring-1 focus:ring-[#1a3c5e]"
                  >
                    {propertyTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Max Price
                  </label>
                  <select className="w-full rounded-lg border border-gray-200 px-3 py-3 text-sm focus:border-[#1a3c5e] focus:outline-none focus:ring-1 focus:ring-[#1a3c5e]">
                    <option>No limit</option>
                    <option>$500K</option>
                    <option>$750K</option>
                    <option>$1M</option>
                    <option>$2M+</option>
                  </select>
                </div>
              </div>

              <button className="w-full rounded-xl bg-[#e8825a] py-3.5 text-sm font-semibold text-white hover:bg-[#d4714a] transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Properties
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              Over 50,000 verified listings updated daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
