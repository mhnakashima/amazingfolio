import Avatar from "../../atoms/avatar/avatar";
import Headline from "../../atoms/headline/Headline";
import Navigation from "../../molecules/navigation/Navigation";

const Sidebar = () => {
  return (
    <section className="flex flex-col items-center py-4">
      <Avatar />
      <Headline />
      <Navigation />
    </section>
  );
};

export default Sidebar;
