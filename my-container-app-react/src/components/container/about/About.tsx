import PersonalDetails from "../../atoms/personal-details/PersonalDetails";
import "./about.scss";

const About = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full ${className || ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        About.
      </h2>

      <PersonalDetails className="mb-8" />
    </div>
  );
};

export default About;
