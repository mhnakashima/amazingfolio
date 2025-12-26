import "./tailwind.css";
import "./index.scss";
import useExperiencesWebContainer from "./context/useExperiencesWebContainer";
import Sidebar from "./components/container/sidebar";
import Header from "./components/atoms/header/Header";
import Experience from "./components/container/experience/Experience";
import AboutContainer from "./components/atoms/about-container/AboutContainer";
import About from "./components/container/about/About";

function App() {
  const { isLoaded } = useExperiencesWebContainer();

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoaded && (
        <div className="flex items-center justify-center min-h-screen">
          <div>Loading...</div>
        </div>
      )}
      {isLoaded && (
        <>
          <Header />
          <div className="flex flex-col items-center sm:pt-8 pb-8 sm:pb-16">
            {/* Centered content column with white space on sides */}
            <div className="w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-2 bg-white md:bg-transparent md:rounded-none shadow-sm md:shadow-none">
              <Sidebar />
              <div className="mt-4">
                <About className="mb-8" />
                <Experience />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
