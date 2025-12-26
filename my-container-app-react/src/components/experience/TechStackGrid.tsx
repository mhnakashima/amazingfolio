import React from "react";
import {
  SiFigma,
  SiAngular,
  SiSass,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiAmazon,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const techStackMap: Record<string, TechItem> = {
  Figma: { name: "Figma", icon: SiFigma },
  Angular: { name: "Angular", icon: SiAngular },
  Sass: { name: "Sass", icon: SiSass },
  CSS: { name: "CSS", icon: SiCss3 },
  Javascript: { name: "Javascript", icon: SiJavascript },
  Tailwind: { name: "Tailwind", icon: SiTailwindcss },
  Git: { name: "Git", icon: SiGit },
  Github: { name: "Github", icon: SiGithub },
  "Github Actions": { name: "Github Actions", icon: SiGithubactions },
  AWS: { name: "AWS", icon: SiAmazon },
  "CloudFront UI": { name: "CloudFront UI", icon: SiAmazon },
  Microfrontends: { name: "Microfrontends", icon: SiAngular },
};

interface TechStackGridProps {
  technologies: string[];
}

const TechStackGrid = ({ technologies }: TechStackGridProps) => {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold text-gray-800 mb-3">Tech Stack</h4>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {technologies.map((tech, index) => {
          const techItem = techStackMap[tech];
          if (!techItem) {
            // Fallback for technologies without icons
            return (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="w-6 h-6 rounded bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-bold">
                    {tech.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-gray-700 text-center">
                  {tech}
                </span>
              </div>
            );
          }
          const Icon = techItem.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <Icon className="w-6 h-6 text-gray-800" />
              <span className="text-xs text-gray-700 text-center">
                {techItem.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackGrid;
