import Avatar from "../avatar/avatar";
import Headline from "../headline/Headline";
import Navigation from "../navigation/Navigation";

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
