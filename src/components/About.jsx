import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-yellow-500 text-sm font-medium">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            About <span className="text-yellow-500">Register Karo</span>
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team which has consistently delivered on projects,
            thereby exceeding everyone’s expectations.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="bg-[#1C4670] flex items-center text-white mt-12 gap-2 px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors">
            Learn More <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 8C15.75 12.2812 12.2812 15.75 8 15.75C3.71875 15.75 0.25 12.2812 0.25 8C0.25 3.71875 3.71875 0.25 8 0.25C12.2812 0.25 15.75 3.71875 15.75 8ZM1.75 8C1.75 11.4688 4.53125 14.25 8 14.25C11.4375 14.25 14.25 11.4688 14.25 8C14.25 4.5625 11.4375 1.75 8 1.75C4.53125 1.75 1.75 4.5625 1.75 8ZM4 8.625V7.375C4 7.1875 4.15625 7 4.375 7H8V4.90625C8 4.59375 8.375 4.40625 8.625 4.65625L11.7188 7.75C11.875 7.90625 11.875 8.125 11.7188 8.28125L8.625 11.375C8.375 11.625 8 11.4375 8 11.0938V9H4.375C4.15625 9 4 8.84375 4 8.625Z"
                fill="white"
              />
            </svg>
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 md:pl-10">
          <img
            src="/Aboutimg.png"
            alt="About Register Karo"
            className="h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
