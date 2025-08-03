import Avatar from "../avatar/avatar";
import Headline from "../headline/Headline";

const Sidebar = () => {
  return (
    <section className="sidebar p-4">
      <Avatar />
      <Headline />
      <div className="xl:mt-4 font-lato text-sm xl:text-base font-light text-gray-500">
      Front end Engineer with 15 years of experience, used to work with small and bigger teams, developing solutions like apps, interfaces, websites, helping colleagues to developer themselves helping them with Front end technical knowledge, proven experience developing solutions for companies and clients. 
      </div>
    </section>
  );
};

export default Sidebar;
