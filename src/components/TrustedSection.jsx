// import React from "react";

// export default function Companies() {
//   const companies = [
//     {
//       name: "coinbase",
//       logo: "/companylogo.png",
//     },
//     {
//       name: "Spotify",
//       logo: "Company logo.png",
//     },
//     {
//       name: "Slack",
//       logo: "Company logo (1).png",
//     },
//     {
//       name: "Dropbox",
//       logo: "Company logo (2).png",
//     },
//     {
//       name: "Webflow",
//       logo: "Company logo (3).png",
//     },
//     {
//       name: "Zoom",
//       logo: "Company logo (4).png",
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center space-x-12 py-8 bg-gray-50">
//       {companies.map((company, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
//         >
//           <img
//             src={company.logo}
//             alt={`${company.name} logo`}
//             className={`h-12 w-auto`}
//           />
//           {/* <span className="text-lg font-semibold text-gray-700">
//             {company.name}
//           </span> */}
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function Companies() {
  const companies = [
    {
      name: "coinbase",
      logo: "/companylogo.png",
    },
    {
      name: "Spotify",
      logo: "Company logo.png",
    },
    {
      name: "Slack",
      logo: "Company logo (1).png",
    },
    {
      name: "Dropbox",
      logo: "Company logo (2).png",
    },
    {
      name: "Webflow",
      logo: "Company logo (3).png",
    },
    {
      name: "Zoom",
      logo: "Company logo (4).png",
    },
  ];

  return (
    <div className="hidden md:flex justify-center items-center space-x-12 py-8 bg-gray-50">
      {companies.map((company, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className={`${
              company.name === "coinbase" ? "h-8 w-auto" : "h-12 w-auto"
            } object-contain`}
          />
          {/* <span className="text-lg font-semibold text-gray-700">
            {company.name}
          </span> */}
        </div>
      ))}
    </div>
  );
}
