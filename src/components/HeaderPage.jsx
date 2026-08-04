
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { headerData } from "../data/headerdata";

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center">
           {headerData.map(({ title, heroImage, heroImageAlt }) => (
             <div key={title} className="flex items-center">
               <img
                 src={heroImage}
                 alt={heroImageAlt}
                 className="w-15 h-15 object-contain"
               />

               <div>
                <h1 className="font-bold mb-0 leading-none">{title}</h1>
                 <p className="text-sm text-gray-500 mb-0 leading-none">Grow yourself</p>
               </div>
             </div>
          ))}
         </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-[#39FF14] text-xl"
                  : "text-gray-500 transition hover:text-#39FF14"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-gradient-to-br from-[#39FF14] via-[#18C7A0] to-[#1565C0] hover:bg-blue-600 text-white px-5 py-2 rounded-full">
            +251900000
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-md  p-2 text-blue-600 transition hover:bg-gray-300 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 border-3 rounded-3xl border-gray-300 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `rounded-md px-4 py-3 transition ${
                  isActive
                    ? "bg-pink-100 font-bold text-[#39FF14]"
                    : "text-gray-600 hover:bg-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default HeaderPage;

