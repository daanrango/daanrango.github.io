import { useState } from "react";
import logo from "/img/logo.png";

const menuItems = [
  { id: 1, label: "Welcome", link: "#welcome" },
  { id: 2, label: "About Me", link: "#aboutme" },
  { id: 3, label: "Skills", link: "#skills" },
  { id: 4, label: "Projects", link: "#prjects" },
  { id: 5, label: "Contact", link: "#contact" },
];

const socialIcons = [
  {
    id: 1,
    icon: "fa-regular fa-envelope",
    link: "davichoanrangojps17@gmail.com",
  },
  { id: 2, icon: "fa-brands fa-github", link: "https://github.com/daanrango" },
  {
    id: 3,
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/593998127022?text=Hola%20vengo%20de%20tu%20portafolio.%20%C2%BFQuisiera%20hablar%20contigo?",
  },
];

function Navbar() {
  const [menuvisble, setMenuvisble] = useState(false);

  const menuClickHandle = () => {
    setMenuvisble(!menuvisble);
  };

  return (
    <div className="flex flex-row justify-between h-16 ">
      <img src={logo} alt="logo-nav" className="w-14 invert" />
      <ul
        className={`flex flex-col flex-1 ml-4 w-2/5 justify-center items-center absolute bg-slate-800 opacity-80 h-screen lg:h-auto top-0 left-0 transform transition-transform duration-500 ease-in-out
        lg:flex-row lg:static lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:justify-normal lg:items-start
        ${menuvisble ? "translate-x-[-20px]" : "translate-x-[-500px]"} `}
      >
        {menuItems.map((item) => (
          <li key={item.id} className="p-4">
            <a
              onClick={menuClickHandle}
              href={item.link}
              className="pb-1 border-b-2 border-solid border-transparent text-xl lg:font-normal group hover:border-blue-50 transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row">
        {socialIcons.map((item) => (
          <li
            key={item.id}
            className="p-4 cursor-pointer hover:scale-150 transform transition duration-500"
          >
            <a
              href={item.link}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon.includes("fa-envelope") ? (
                <i
                  className={item.icon}
                  onClick={() => (window.location.href = "mailto:" + item.link)}
                ></i>
              ) : (
                <i className={item.icon}></i>
              )}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-3 block lg:hidden" onClick={menuClickHandle}>
        <i className="fa-solid fa-bars fa-2x"></i>
      </div>
    </div>
  );
}

export default Navbar;
