import { useEffect, useState } from "react";

const useExperiencesWebContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the Angular web component
    const script = document.createElement("script");
    script.src = "http://localhost:4200/main.js";
    script.type = "module";

    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = (error) => {
      console.error("Error loading experiences component:", error);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

	return {
		isLoaded,
		experiencesElement: isLoaded ? document.createElement('experiences-element') : null,
	}
};

export default useExperiencesWebContainer;
