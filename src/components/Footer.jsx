import React from "react";

export default function Footer() {
  return (
    <footer className=" pt-16 bg-[#011B5C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Section */}
          <div>
            <p className="text-sm mb-4 leading-6">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <img
                src="/FooterLogo (1).png"
                alt="Facebook"
                className="h-6 w-6"
              />
              <img src="/FooterLogo (2).png" alt="Google" className="h-6 w-6" />
              <img src="/FooterLogo (3).png" alt="Apple" className="h-6 w-6" />
              <img
                src="/FooterLogo (4).png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              START A BUSINESS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">BIS & CDSCO</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 items-center justify-between">
            <button className="bg-[#FFA229] p-2 rounded-full text-[#0B2342] hover:bg-orange-500 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          <p className="text-sm">
            &copy; 2024 Registerkaro. All Rights Reserved.
          </p>
          <div>
          </div>
        </div>
      </div>
    </footer>
  );
}
