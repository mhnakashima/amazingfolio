const Navigation = () => {
  const navItems = [
    { label: "About", path: "#about", isBold: false },
    { label: "Experience", path: "#experience", isBold: true },
    { label: "Portfolio", path: "#portfolio", isBold: false },
    { label: "Contact Me", path: "#contact", isBold: false },
    { label: "FAQ", path: "#faq", isBold: false },
  ];

  return (
    <nav className="my-4">
      <ul className="flex items-center justify-center gap-2 text-gray-700 text-sm md:text-base">
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <a
              href={item.path}
              className={`${
                item.isBold ? "font-bold" : "font-normal"
              } hover:text-gray-900 transition-colors`}
            >
              {item.label}
            </a>
            {index < navItems.length - 1 && (
              <span className="mx-2 text-gray-700">|</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
