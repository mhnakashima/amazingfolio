import "./experience.scss";
import ExperienceCompany from "./ExperienceCompany";
import ciandtLogo from "../../assets/images/ciandt_logo.jpeg";
import takeblipLogo from "../../assets/images/takeblip_logo.jpeg";
import totvsLogo from "../../assets/images/totvs_logo.jpeg";

const Experience = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full ${className || ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Experience.
      </h2>

      <ExperienceCompany
        company="Ciandt"
        dates="May. 2022 - Present."
        role="Senior Front End Engineer"
        logo={ciandtLogo}
        responsibilities={[
          "Creating interfaces, web apps, and mobile applications using Sketch and Figma for pixel-perfect layouts.",
          "Creating web applications with cross-browser compatibility, semantic HTML, accessibility, and adaptability.",
          "Assisting team members with mentoring, KT sessions, and feedback.",
        ]}
        projects={[
          {
            title: "Kenvue | Johnson & Johnson",
            dates: "Apr. 2024 - Present",
            description:
              "Creating interfaces, web apps, and mobile applications using Sketch and Figma for international projects, collaborating on a B2B/B2C application for a beverage brand.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Maintenance, conversion to new technologies, and development of new functionalities for a financial management system, utilizing HTML5, SASS, React (Next), Typescript, JavaScript, Web Components, Storybook, and Git. Also contributing to a Design System and cloud deployment on Azure with Jest testing.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Joining a development team for a fast-food chain, contributing to a solution integrating Salesforce, an application, and an Interactive Voice Response (IVR) system for order placement, leveraging GPS technologies for delivery.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
        ]}
      />

      <ExperienceCompany
        company="Blip"
        dates="May. 2022 - Present."
        role="Senior Front End Engineer"
        logo={takeblipLogo}
        responsibilities={[
          "Creating interfaces, web apps, and mobile applications using Sketch and Figma for pixel-perfect layouts.",
          "Creating web applications with cross-browser compatibility, semantic HTML, accessibility, and adaptability.",
          "Assisting team members with mentoring, KT sessions, and feedback.",
        ]}
        projects={[
          {
            title: "Kenvue | Johnson & Johnson",
            dates: "Apr. 2024 - Present",
            description:
              "Creating interfaces, web apps, and mobile applications using Sketch and Figma for international projects, collaborating on a B2B/B2C application for a beverage brand.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Maintenance, conversion to new technologies, and development of new functionalities for a financial management system, utilizing HTML5, SASS, React (Next), Typescript, JavaScript, Web Components, Storybook, and Git. Also contributing to a Design System and cloud deployment on Azure with Jest testing.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Joining a development team for a fast-food chain, contributing to a solution integrating Salesforce, an application, and an Interactive Voice Response (IVR) system for order placement, leveraging GPS technologies for delivery.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
        ]}
        className={className}
      />

      <ExperienceCompany
        company="Totvs"
        dates="May. 2022 - Present."
        role="Senior Front End Engineer"
        logo={totvsLogo}
        responsibilities={[
          "Creating interfaces, web apps, and mobile applications using Sketch and Figma for pixel-perfect layouts.",
          "Creating web applications with cross-browser compatibility, semantic HTML, accessibility, and adaptability.",
          "Assisting team members with mentoring, KT sessions, and feedback.",
        ]}
        projects={[
          {
            title: "Kenvue | Johnson & Johnson",
            dates: "Apr. 2024 - Present",
            description:
              "Creating interfaces, web apps, and mobile applications using Sketch and Figma for international projects, collaborating on a B2B/B2C application for a beverage brand.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Maintenance, conversion to new technologies, and development of new functionalities for a financial management system, utilizing HTML5, SASS, React (Next), Typescript, JavaScript, Web Components, Storybook, and Git. Also contributing to a Design System and cloud deployment on Azure with Jest testing.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
          {
            title: "Poppulus Financial Group | PFG",
            dates: "May. 2023 - Apr. 2024",
            description:
              "Joining a development team for a fast-food chain, contributing to a solution integrating Salesforce, an application, and an Interactive Voice Response (IVR) system for order placement, leveraging GPS technologies for delivery.",
            technologies: [
              "Figma",
              "Angular",
              "Sass",
              "CSS",
              "Javascript",
              "Tailwind",
              "Git",
              "Github",
              "Github Actions",
              "AWS",
              "CloudFront UI",
              "Microfrontends",
            ],
          },
        ]}
        className={className}
      />
    </div>
  );
};

export default Experience;
