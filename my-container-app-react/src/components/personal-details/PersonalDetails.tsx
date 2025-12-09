const PersonalDetails = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 font-open-sans">
        Personal Details
      </h3>
      <div className="space-y-2 text-sm text-gray-600">
        <div>
          <span className="font-semibold">Work Exp.:</span> 15 years
        </div>
        <div>
          <span className="font-semibold">Education:</span> Pontificia
          Universidade Católica - PUC - MG
        </div>
        <div>
          <span className="font-semibold">Current Occupation:</span> Software
          Engineer at Ciandt (2022)
        </div>
        <div>
          <span className="font-semibold">Languages:</span> PT-BR: Native,
          English: B2, Spanish: B1
        </div>
        <div>
          <span className="font-semibold">Date of Birth:</span> 11/13/1987
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
