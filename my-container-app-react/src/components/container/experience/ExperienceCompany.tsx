import TechStackGrid from "./TechStackGrid";

interface ExperienceCompanyProps {
  company: string;
  dates: string;
  role: string;
  responsibilities: string[];
  logo?: string; // Path to company logo image
  projects?: Array<{
    title: string;
    dates: string;
    description: string;
    technologies: string[];
  }>;
  className?: string;
}

const ExperienceCompany = ({
  company,
  dates,
  role,
  responsibilities,
  logo,
  projects,
  className,
}: ExperienceCompanyProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-5 object-contain"
          />
        )}
        <h3 className="text-xl font-bold text-gray-800">{company}</h3>
        <span className="text-sm text-gray-600 font-normal ml-1">{dates}</span>
      </div>
      <p className="text-gray-700 font-semibold mb-4">{role}</p>
      <ul className="space-y-2 text-gray-700 text-sm md:text-base">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="mr-2 flex-shrink-0">•</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      {projects && projects.length > 0 && (
        <div className="mb-8 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Projects</h3>

          <div className="projects-timeline">
            {projects.map((project, index) => (
              <div key={index} className="mb-10 relative pl-6 project-item">
                <div className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full"></div>
                <div className="mb-2">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {project.title}
                  </h4>
                  <span className="text-sm text-gray-600">{project.dates}</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <TechStackGrid technologies={project.technologies} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCompany;
