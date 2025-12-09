import { FaEnvelope, FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 font-open-sans">
        Contact Details
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaEnvelope className="text-gray-400" />
          <a
            href="mailto:mhnakashima@gmail.com"
            className="hover:text-gray-900 transition-colors"
          >
            mhnakashima@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaGlobe className="text-gray-400" />
          <a
            href="http://mhnakashima.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            http://mhnakashima.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaLinkedin className="text-gray-400" />
          <a
            href="https://linkedin.com/in/mhnakashima"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            /mhnakashima
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaGithub className="text-gray-400" />
          <a
            href="https://github.com/mhnakashima"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            /mhnakashima
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
