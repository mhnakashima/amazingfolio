import "./index.scss";
import useExperiencesWebContainer from "./context/useExperiencesWebContainer";
import Sidebar from "./components/sidebar";
import MainPage from "./pages/MainPage";

function App() {
  const { isLoaded } = useExperiencesWebContainer();

  return (
    <>
      {!isLoaded && <div>Loading...</div>}
      {isLoaded && (
        <div className="app">
          <Sidebar />
          <MainPage />
        </div>
      )}
    </>
  );
}

export default App;
