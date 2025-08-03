import eu from "./../../assets/images/eu.jpeg";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img
        src={eu}
        alt="avatar"
        className="avatar-image h-10 w-10 rounded-full bg-gray-200"
      />
    </div>
  );
};

export default Avatar;
