export default function HappyClients() {
  const clients = [
    { name: "Dropbox", logo: "/logoC (6).png?height=50&width=50" },
    { name: "Pinterest", logo: "/logoC (5).png?height=46&width=46" },
    { name: "Shopify", logo: "/logoC (4).png?height=56&width=56" },
    { name: "GitLab", logo: "/logoC (3).png?height=36&width=36" },
    { name: "Microsoft", logo: "/logoC (1).png?height=70&width=70" },
    { name: "Figma", logo: "/logoC (2).png?height=62&width=62" },
    { name: "Figma1", logo: "/logoC (5).png?height=60&width=60" },
    { name: "Figm2", logo: "/logoC (6).png?height=40&width=40" },
    { name: "Figma3", logo: "/logoC (7).png?height=40&width=40" },
    { name: "Figma4", logo: "/logoC (8).png?height=40&width=40" },
    { name: "Figma5", logo: "/logoC (9).png?height=40&width=40" },
    { name: "Figma6", logo: "/logoC (10).png?height=40&width=40" },
    { name: "Figma7", logo: "/logoC (11).png?height=40&width=40" },
    { name: "Figma8", logo: "/logoC (12).png?height=40&width=40" },
    // Add more clients as needed
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Happy Clients
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>

        {/* <div className="relative h-[400px] mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`absolute transform hover:-translate-y-1 transition-transform
                  w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center
                  ${getRandomPosition(index)}`}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="relative h-[400px] mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`absolute transform hover:-translate-y-1 transition-transform
                  ${
                    client.size
                  } rounded-full bg-white flex items-center justify-center
                  ${getRandomPosition(index)}`}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className={`w-3/4 h-3/4 object-contain`}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
          Show more
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

// Helper function to generate random positions for logos
function getRandomPosition(index) {
  const positions = [
    "top-3/4 left-2/4",
    "top-1/4 right-1/4",
    "bottom-3/4 left-1/4",
    "bottom-1/4 right-1/4",
    "top-3/4 left-3/4",
    "bottom-1/4 right-3/4",
    "top-3/4 left-1/4",
    "top-1/4 right-3/4",
    "bottom-2/3 left-1/3",
    "bottom-2/3 right-1/3",
    "top-1/4 left-2/4",
    "bottom-1/6 right-1/2",
  ];
  return positions[index % positions.length];
}
