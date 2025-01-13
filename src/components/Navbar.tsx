import { useState } from "react";
import logo from "/img/logo.png";

const menuItems = [
  { id: 1, label: "Welcome", link: "#welcome" },
  { id: 2, label: "About Me", link: "#aboutme" },
  { id: 3, label: "Skills", link: "#skills" },
  { id: 4, label: "Projects", link: "#prjects" },
  { id: 5, label: "Contact", link: "#contact" },
];

function Navbar() {
  const [menuvisble, setMenuvisble] = useState(false);

  const menuClickHandle = () => {
    setMenuvisble(!menuvisble);
  };

  return (
    <div
      id="navbar"
      className="w-11/12 mx-auto flex flex-row justify-between h-16 my-2 lg:my-5"
    >
      <img src={logo} alt="logo-nav" className="w-14 invert" />
      <ul
        className={`flex flex-col flex-1 ml-4 w-2/5 justify-center lg:justify-end items-center absolute bg-slate-800 opacity-80 h-screen lg:h-auto top-0 left-0 transform transition-transform duration-500 ease-in-out
        lg:flex-row lg:static lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:items-start
        ${menuvisble ? "translate-x-[-20px]" : "translate-x-[-500px]"} `}
      >
        {menuItems.map((item) => (
          <li key={item.id} className="p-4">
            <a
              onClick={menuClickHandle}
              href={item.link}
              className={`${
                item.id === 1 ? "active" : ""
              } text-xl lg:font-normal pb-1 transition duration-500 ease-in-out border-b-2 border-solid border-transparent`}
            >
              {item.label}
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
