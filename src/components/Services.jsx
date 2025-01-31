import React from "react";

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <p className="text-yellow-500 text-sm text-center mb-2">
        WELCOME TO REGISTERKARO.IN
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1C4670] text-center mb-8">
        Explore Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s1.png" alt="Service 1" className="w-12 mx-auto mb-4" />

          <h3 className="font-bold text-lg mb-2">Company Formation</h3>
          <p className="text-sm text-gray-500 px-10">
            Build web-based solutions that enhance customer experience.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-sm font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s4.png" alt="Service 2" className="w-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">
            Company Secretarial Services
          </h3>
          <p className="text-sm text-gray-500 px-10">
            Make data-driven decisions and utilize technology to reach business
            goals.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-md font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>

        {/* Service Box 3 */}
        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s3.png" alt="Service 3" className="w-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Virtual Office Address</h3>
          <p className="text-sm text-gray-500 px-10">
            Foster customer relationships by effectively serving your market.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-md font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s2.png" alt="Service 4" className="w-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Annual Compliance Services</h3>
          <p className="text-sm text-gray-500 px-10">
            Turn your ideas into modern products with our design experts.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-md font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>

        {/* Service Box 5 */}
        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s5.png" alt="Service 5" className="w-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Payroll Services</h3>
          <p className="text-sm text-gray-500 px-10">
            Expand your business across the globe with minimal effort.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-md font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>

        {/* Service Box 6 */}
        <div className="bg-white rounded-lg overflow-hidden text-center p-6">
          <img src="/s6.png" alt="Service 6" className="w-12 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Bookkeeping Services</h3>
          <p className="text-sm text-gray-500 px-10">
            Steering user behaviours with creative design, data insights &
            technology.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className=" text-md font-medium flex items-center justify-center"
            >
              Load More
              <span className="ml-1 w-4 rounded-full flex items-center justify-center">
                <img src="/nextArrow.png" alt="" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-12">
      <button className="bg-[#1C4670] text-white font-semibold px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors">
        See All Services
      </button>
      </div>
    </section>
  );
};

export default Services;
