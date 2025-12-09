import {
  SiFigma,
  SiAngular,
  SiSass,
  SiFirebase,
  SiDotnet,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiAmazon,
  SiWebcomponentsdotorg,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const techStack: TechItem[] = [
  { name: "Figma", icon: SiFigma },
  { name: "Angular", icon: SiAngular },
  { name: "Sass", icon: SiSass },
  { name: "Firebase", icon: SiFirebase },
  { name: ".Net", icon: SiDotnet },
  { name: "CSS", icon: SiCss3 },
  { name: "Javascript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Typescript", icon: SiTypescript },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
  { name: "Github Actions", icon: SiGithubactions },
  { name: "AWS", icon: SiAmazon },
  { name: "Microfrontends", icon: SiWebcomponentsdotorg },
];

const TechStack = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 font-open-sans">
        Tech Stack
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1 p-2 hover:bg-gray-50 rounded transition-colors"
            >
              <Icon className="text-2xl text-gray-600" />
              <span className="text-xs text-gray-600 text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
