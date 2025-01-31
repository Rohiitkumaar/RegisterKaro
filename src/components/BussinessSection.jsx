import React from "react";

const BusinessSection = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-xl text-center md:text-2xl font-semibold text-[#1C4670] mb-6">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h2>

      {/* Logos */}
      <div className="flex justify-center">
        <img src="/logos.png" alt="Logo 1" className="w-[70%]" />
      </div>
    </section>
  );
};

export default BusinessSection;
