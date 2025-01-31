export default function StatisticsSection() {
  const stats = [
    {
      number: "1M",
      label: "CUSTOMERS",
      gradient: "from-blue-500 via-blue-400 to-gray-400",
    },
    {
      number: "12",
      label: "YEARS OF EXCELLENCE",
      gradient: "from-pink-500 via-purple-400 to-purple-600",
    },
    {
      number: "41",
      label: "R&D ENGINEERS",
      gradient: "from-yellow-700 via-yellow-600 to-yellow-800",
    },
    {
      number: "78",
      label: "COUNTRIES",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
    },
    {
      number: "3287",
      label: "PARTNERS",
      gradient: "from-orange-400 via-yellow-500 to-yellow-600",
    },
    {
      number: "41",
      label: "AWARDS RECEIVED",
      gradient: "from-yellow-700 via-yellow-600 to-yellow-800",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-medium mb-2">
            WHY REGISTER KARO
          </h2>
          <h3 className="text-4xl font-bold text-[#3A2D28]">
            Some Numbers are important
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div
                className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}
              >
                {stat.number}
                <span className="text-3xl lg:text-4xl">+</span>
              </div>
              <div className="text-sm font-medium text-gray-600 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
