import { useCallback, useState } from "react";
import useExperiencesWebContainer from "../context/useExperiencesWebContainer";

const MainPage = () => {
  const { experiencesElement, isLoaded } = useExperiencesWebContainer();

  const [activeSection, setActiveSection] = useState<string>("about");

  const handleSectionClick = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  return (
    <>
      
      <main className="main-page">
      <menu className="xl:mt-4 font-oswald font-oswald font-bold text-4xl ">
        <ul className="space-y-4">
          <li>
            <a
              className={`${
                activeSection === "about" ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-500 transition-colors`}
              href="#about"
              onClick={() => handleSectionClick("about")}
            >
              SOBRE /
            </a>
          </li>
          <li>
            <a
              className={`${
                activeSection === "experiences" ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-500 transition-colors`}
              href="#experiences"
              onClick={() => handleSectionClick("experiences")}
            >
              EXPERIÊNCIAS /
            </a>
          </li>
          <li>
            <a
              className={`${
                activeSection === "education" ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-500 transition-colors`}
              href="#education"
              onClick={() => handleSectionClick("education")}
            >
              FORMAÇÃO /
            </a>
          </li>
          <li>
            <a
              className={`${
                activeSection === "contact" ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-500 transition-colors`}
              href="#contact"
              onClick={() => handleSectionClick("contact")}
            >
              CONTATO /
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleSectionClick("faq");
              }}
              className={`${
                activeSection === "faq" ? "text-blue-500" : "text-gray-500"
              } hover:text-blue-500 transition-colors`}
              href="#faq"
            >
              FAQ /
            </a>
          </li>
        </ul>
      </menu>
        <h1 className="text-xs">React Container App</h1>
        {isLoaded && experiencesElement && <experiences-element />}
      </main>
    </>
  );
};

export default MainPage;
