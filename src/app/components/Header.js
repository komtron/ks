const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed w-full z-10">
      <nav className="max-w-6xl mx-auto">
        <ul className="flex justify-center space-x-8 text-xl font-thin">
          <li>
            <a
              href="#home"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-500 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
