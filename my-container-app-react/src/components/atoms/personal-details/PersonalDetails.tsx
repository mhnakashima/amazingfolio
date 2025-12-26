const PersonalDetails = ({ className }: { className?: string }) => {
  return (
    <div
      className={`font-lato font-light text-base leading-relaxed ${className}`}
    >
      <p className="mb-4 text-justify">
        Senior Frontend Engineer with 15+ years transforming complex business
        requirements into elegant, high-performance web applications. I
        specialize in building enterprise-grade microfrontends using React,
        TypeScript, and Next.js, with a proven track record of delivering
        solutions for Fortune 500 companies including AB-INBEV, Johnson &
        Johnson, and Burger King across financial services, healthcare, and
        e-commerce sectors.
      </p>
      <p>
        <span className="font-semibold">Location:</span> Belo Horizonte, Brazil
        | Remote-first | Flexible across time zones
      </p>
      <p>
        <span className="font-semibold">Languages:</span> Portuguese (Native),
        English (Fluent - B2), Spanish (A2)
      </p>
    </div>
  );
};

export default PersonalDetails;
