import useExperiencesWebContainer from "../context/useExperiencesWebContainer";

const MainPage = () => {
  const { experiencesElement, isLoaded } = useExperiencesWebContainer();

  return (
    <main className="main-page">
      {isLoaded && experiencesElement && <experiences-element />}
    </main>
  );
};

export default MainPage;
