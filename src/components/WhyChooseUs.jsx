// import { Shield, CheckCircle, SmilePlus, UserCog } from "lucide-react";

// export default function WhyChooseUs() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
//       <div className="space-y-8">
//         <div className="space-y-4">
//           <h2 className="text-orange-500 font-medium">WHY REGISTERKARO.IN</h2>
//           <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Why Choose Register Karo
//           </h3>
//           <p className="text-gray-600 max-w-3xl">
//             It is with consistent services and results that build trust with the
//             people and that in turn help us to serve the business better.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="p-6 rounded-lg bg-red-50">
//             <div className="space-y-4">
//               <Shield className="w-8 h-8 text-orange-500" />
//               <h4 className="text-xl font-semibold">Confidential & Safe</h4>
//               <p className="text-gray-600">
//                 All your private information is safe with us
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-lg bg-green-50">
//             <div className="space-y-4">
//               <CheckCircle className="w-8 h-8 text-green-500" />
//               <h4 className="text-xl font-semibold">No Hidden Fee</h4>
//               <p className="text-gray-600">
//                 Everything is put before you with no hidden charges or
//                 conditions
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-lg bg-blue-50">
//             <div className="space-y-4">
//               <SmilePlus className="w-8 h-8 text-blue-500" />
//               <h4 className="text-xl font-semibold">Guaranteed Satisfaction</h4>
//               <p className="text-gray-600">
//                 We ensure that you stay 100% satisfied with our offered services
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-lg bg-pink-50">
//             <div className="space-y-4">
//               <UserCog className="w-8 h-8 text-red-500" />
//               <h4 className="text-xl font-semibold">Expert CA/CS Assistance</h4>
//               <p className="text-gray-600">
//                 Prompt support from our in-house expert professionals
//               </p>
//             </div>
//           </div>

//           <div className="p-6 rounded-lg bg-red-50">
//             <div className="space-y-4">
//               <Shield className="w-8 h-8 text-orange-500" />
//               <h4 className="text-xl font-semibold">Confidential & Safe</h4>
//               <p className="text-gray-600">
//                 All your private information is safe with us
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Shield, CheckCircle, SmilePlus, UserCog } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="lg:flex lg:items-start lg:gap-8">
        <div className="lg:w-1.6/3 space-y-4 mb-8 lg:mb-0">
          <h2 className="text-orange-500 font-medium">WHY REGISTERKARO.IN</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Register Karo
          </h3>
          <p className="text-gray-600">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 lg:mb-0">
          <div className="p-6 rounded-lg bg-red-50">
            <div className="space-y-4">
              <Shield className="w-8 h-8 text-orange-500" />
              <h4 className="text-xl font-semibold">Confidential & Safe</h4>
              <p className="text-gray-600">
                All your private information is safe with us
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-green-50">
            <div className="space-y-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h4 className="text-xl font-semibold">No Hidden Fee</h4>
              <p className="text-gray-600">
                Everything is put before you with no hidden charges or
                conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="p-6 rounded-lg bg-blue-50">
          <div className="space-y-4">
            <SmilePlus className="w-8 h-8 text-blue-500" />
            <h4 className="text-xl font-semibold">Guaranteed Satisfaction</h4>
            <p className="text-gray-600">
              We ensure that you stay 100% satisfied with our offered services
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-pink-50">
          <div className="space-y-4">
            <UserCog className="w-8 h-8 text-red-500" />
            <h4 className="text-xl font-semibold">Expert CA/CS Assistance</h4>
            <p className="text-gray-600">
              Prompt support from our in-house expert professionals
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-red-50">
          <div className="space-y-4">
            <Shield className="w-8 h-8 text-orange-500" />
            <h4 className="text-xl font-semibold">Confidential & Safe</h4>
            <p className="text-gray-600">
              All your private information is safe with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

