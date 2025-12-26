const Header = () => {
  return (
    <header className="flex items-center justify-center md:justify-end md:fixed md:top-0 md:right-0 gap-3 z-10 w-full md:w-auto m-2 md:m-4">
      <span className="text-gray-700 text-sm font-medium">
        AVAILABLE FOR FREELAS :D
      </span>
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <span className="text-gray-700 text-sm font-medium">PT | EN</span>
    </header>
  );
};

export default Header;
