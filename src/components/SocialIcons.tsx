function SocialIcons() {
  const socialIcons = [
    {
      id: 1,
      icon: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/david-alberto-anrango-6b0b05233/",
    },
    {
      id: 2,
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/davichoanrango/",
    },
    {
      id: 3,
      icon: "fa-brands fa-github",
      link: "https://github.com/daanrango",
    },
    {
      id: 4,
      icon: "fa-brands fa-x-twitter",
      link: "https://x.com/davicho_anrango",
    },
  ];

  return (
    <ul id="social-icons" className="flex flex-row my-5">
      {socialIcons.map((item) => (
        <li
          key={item.id}
          className={`flex justify-center items-center cursor-pointer bg-transparent border-2 border-blue-neon rounded-full w-10 h-10 text-blue-neon transition ease-in-out duration-300 ${
            item.id === 1 ? "mr-2" : "mx-2"
          }`}
        >
          <a
            href={item.link}
            className="w-full h-full flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={item.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
