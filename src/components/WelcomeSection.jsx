"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function WelcomeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const features = [
    "Instant results",
    "User-friendly interface",
    "Personalized customization",
  ];

  return (
    <section className="min-h-[300px] relative bg-gradient-to-r from-[#FFA229] to-[#1C4670] flex items-center">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-white">
        <p className="text-sm font-medium mb-4 tracking-wide">
          1% OF THE INDUSTRY
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
          Welcome to your new digital reality. Now.
        </h1>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row rounded-lg overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 text-gray-900 text-lg rounded-l-lg"
              required
            />
            <button
              type="submit"
              className="bg-[#FFA229] hover:bg-[#FF9209] text-white px-6 py-3 text-lg font-medium transition-colors rounded-r-lg"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-md">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="rounded-full bg-white/20 p-1">
                <Check className="w-4 h-4" />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
