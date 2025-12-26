import eu from "./../../../assets/images/eu.jpeg";

const Avatar = () => {
  return (
    <div className="flex justify-center mt-4 mb-6">
      <div className="relative w-24 h-24 md:w-30 md:h-30 lg:w-40 lg:h-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-blue-300 to-yellow-200 opacity-80 blur-md scale-105"></div>
        <div className="relative w-full h-full">
          <img
            src={eu}
            alt="Michael Nakashima"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
