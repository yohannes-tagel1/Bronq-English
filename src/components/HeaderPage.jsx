// import React from "react";
// import { headerData } from "../data/headerdata";

// function HeaderPage() {
//   return (
//     <div className="flex items-center bg-gray-100 p-7">
//       <div className="flex items-center justify-between w-full max-w-6xl mx-auto max-h-4">

//         <div className="p-3">
//           {headerData.map(({ title, heroImage, heroImageAlt }) => (
//             <div key={title} className="flex items-center">
//               <img src={heroImage} alt={heroImageAlt} width={70} height={2} />
//               <div>
//                 <h1 className="text-xl font-bold">{title}</h1>
//                 <p className="text-sm">groth your self</p>
//               </div>

//             </div>

//           ))}

//         </div>

//         <nav className="flex items-center space-x-4">
//           <ul className="flex space-x-6">
//             <li>Home</li>
//             <li>About</li>
//             <li>Blog</li>
//             <li>Contact</li>
//           </ul>

//           <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl ml-5">
//             +251900000
//           </button>
//         </nav>

//       </div>
//     </div>
//   );
// }

// export default HeaderPage;

// import React from "react";
// import { headerData } from "../data/headerdata";

// function HeaderPage() {
//   return (
//     <div className="bg-gray-100 p-7">
//       <div className="flex items-center justify-between w-full max-w-6xl mx-auto max-h-5">

//         <div className="flex items-center gap-4">
//           {headerData.map(({ title, heroImage, heroImageAlt }) => (
//             <div key={title} className="flex items-center gap-3">
//               <img
//                 src={heroImage}
//                 alt={heroImageAlt}
//                 className="w-12 h-12 object-contain"
//               />
//               <div>
//                  <h1 className="text-xl font-bold">{title}</h1>
//                 <p className="text-sm">Grow yourself</p>
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Navigation */}
//         <nav className="flex items-center gap-6">
//           <ul className="flex gap-6">
//             <li className="cursor-pointer hover:text-blue-500">Home</li>
//             <li className="cursor-pointer hover:text-blue-500">About</li>
//             <li className="cursor-pointer hover:text-blue-500">Blog</li>
//             <li className="cursor-pointer hover:text-blue-500">Contact</li>
//           </ul>

//           <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
//             +251900000
//           </button>
//         </nav>

//       </div>
//     </div>
//   );
// }

// export default HeaderPage;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { headerData } from "../data/headerdata";

function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <div className="flex items-center gap-4">
          {headerData.map(({ title, heroImage, heroImageAlt }) => (
            <div key={title} className="flex items-center gap-3">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-12 h-12 object-contain"
              />

              <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-sm text-gray-500">Grow yourself</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Blog</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
          </ul>

          <button className="bg-gradient-to-br from-[#39FF14] via-[#18C7A0] to-[#1565C0] hover:bg-blue-600 text-white px-5 py-2 rounded-full">
            +251900000
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg p-5 ">
          <ul className="flex flex-col font-semibold  justify-ceter  ">
            <li className="py-4 px-4 hover:bg-gray-100 cursor-pointer rounded-2xl">
              Home
            </li>
            <li className="py-4 px-4 rounded-2xl hover:bg-gray-100  cursor-pointer">
              About
            </li>
            <li className="py-4 px-4 rounded-2xl  hover:bg-gray-100 cursor-pointer">
              Blog
            </li>
            <li className="py-4 px-4 rounded-2xl hover:bg-gray-100 cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="p-4">
            <button className="w-full bg-gradient-to-br from-[#39FF14] via-[#18C7A0] to-[#1565C0] hover:bg-blue-600 text-white py-3 rounded-full cursor-pointer">
              +251900000
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default HeaderPage;
