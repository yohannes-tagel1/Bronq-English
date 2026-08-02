


import React from "react";
import { footerfirst, contact, conect } from "../data/headerdata";

function FooterPage() {
  return (
    <footer className="bg-black w-full mt-16 py-16 px-6">
   <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          {footerfirst.map(({ title, herotitle, description }) => (
            <div key={title} className="space-y-4">
              <h1 className="text-3xl font-bold text-white">
                {title}
              </h1>

              <h2 className="text-lg font-semibold text-white">
                {herotitle}
              </h2>

              <p className="text-gray-300 leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-2xl font-bold text-white">
            Quick Links
          </h1>

          <ul className="mt-5 space-y-4">
            <li className="text-gray-300 hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="text-gray-300 hover:text-white cursor-pointer transition">
              About
            </li>

            <li className="text-gray-300 hover:text-white cursor-pointer transition">
              Blog
            </li>

            <li className="text-gray-300 hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          {contact.map(({ title, location, phone, email }) => (
            <div key={title} className="space-y-4">
              <h1 className="text-2xl font-bold text-white">
                {title}
              </h1>

              <p className="text-gray-300">
                {location}
              </p>

              <p className="text-gray-300">
                {phone}
              </p>

              <p className="text-gray-300 break-all">
                {email}
              </p>
            </div>
          ))}
        </div>

        {/* Social */}
        <div>
          {conect.map(
            ({ title, facebook, twitter, instagram, linkedin }) => (
              <div key={title} className="space-y-5">
                <h1 className="text-2xl font-bold text-white">
                  {title}
                </h1>

                <div className="flex flex-col gap-3">
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Facebook
                  </a>

                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Twitter
                  </a>

                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Instagram
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t lg:mt-40 border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Bronq English. All Rights Reserved.
        </p>
      </div>
   
    </footer>
  );
}

export default FooterPage;


// import React from "react";
// import { footerfirst, contact, conect } from "../data/headerdata";

// function FooterPage() {
//   return (
//     <footer className="bg-black w-full mt-16 pt-16 px-6 pb-0 mb-0">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
//         {/* Company */}
//         <div>
//           {footerfirst.map(({ title, herotitle, description }) => (
//             <div key={title} className="space-y-4">
//               <h1 className="text-3xl font-bold text-white">{title}</h1>
//               <h2 className="text-lg font-semibold text-white">
//                 {herotitle}
//               </h2>
//               <p className="text-gray-300 leading-7">{description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h1 className="text-2xl font-bold text-white">Quick Links</h1>

//           <ul className="mt-5 space-y-4">
//             <li className="text-gray-300 hover:text-white">Home</li>
//             <li className="text-gray-300 hover:text-white">About</li>
//             <li className="text-gray-300 hover:text-white">Blog</li>
//             <li className="text-gray-300 hover:text-white">Contact</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           {contact.map(({ title, location, phone, email }) => (
//             <div key={title} className="space-y-4">
//               <h1 className="text-2xl font-bold text-white">{title}</h1>
//               <p className="text-gray-300">{location}</p>
//               <p className="text-gray-300">{phone}</p>
//               <p className="text-gray-300 break-all">{email}</p>
//             </div>
//           ))}
//         </div>

//         {/* Social */}
//         <div>
//           {conect.map(
//             ({ title, facebook, twitter, instagram, linkedin }) => (
//               <div key={title} className="space-y-5">
//                 <h1 className="text-2xl font-bold text-white">{title}</h1>

//                 <div className="flex flex-col gap-3">
//                   <a href={facebook} className="text-gray-300 hover:text-white">
//                     Facebook
//                   </a>
//                   <a href={twitter} className="text-gray-300 hover:text-white">
//                     Twitter
//                   </a>
//                   <a href={instagram} className="text-gray-300 hover:text-white">
//                     Instagram
//                   </a>
//                   <a href={linkedin} className="text-gray-300 hover:text-white">
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-12 pt-6 pb-0 text-center">
//         <p className="text-gray-400 text-sm">
//           © {new Date().getFullYear()} Bronq English. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default FooterPage;