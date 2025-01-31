export default function BlogSection() {
  const blogs = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      status: "Today",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/blog (1).png",
      tags: ["Tax & Audit", "Management"],
      tagColors: ["bg-purple-50 text-purple-600", "bg-blue-50 text-blue-600"],
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/blog (2).png",
      tags: ["Tax", "Research", "Compliance"],
      tagColors: [
        "bg-blue-50 text-blue-600",
        "bg-blue-50 text-blue-600",
        "bg-orange-50 text-orange-600",
      ],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/blog (3).png",
      tags: ["Audit", "Money Back"],
      tagColors: ["bg-purple-50 text-purple-600", "bg-blue-50 text-blue-600"],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/blog (3).png",
      tags: ["Audit", "Money Back"],
      tagColors: ["bg-purple-50 text-purple-600", "bg-blue-50 text-blue-600"],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/blog (1).png",
      tags: ["Audit", "Money Back"],
      tagColors: ["bg-purple-50 text-purple-600", "bg-blue-50 text-blue-600"],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/blog (2).png",
      tags: ["Audit", "Money Back"],
      tagColors: ["bg-purple-50 text-purple-600", "bg-blue-50 text-blue-600"],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-medium mb-4">EXPLORE OUR BLOGS</h3>
        <h2 className="text-4xl font-bold text-[#3A2D28]">
          Accelerate Digital Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-600">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
                {blog.status && (
                  <>
                    <span>•</span>
                    <span className="text-blue-600">{blog.status}</span>
                  </>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 flex items-center">
                {blog.title}
                <svg
                  className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </h3>

              <p className="text-gray-600">{blog.description}</p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-sm ${blog.tagColors[tagIndex]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#1C4670] text-white font-semibold flex justify-center px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors">
          See More
          <span>
          <svg
            className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
