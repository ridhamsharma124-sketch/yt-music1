import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // sun/moon icons
import Logo from '../../public/images/Logo.svg';
import img from "../../public/images/img.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      document.body.classList.toggle("dark", JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">

        <a className="navbar-brand d-flex" href="#">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <form role="search" className='col-lg-5 search col-12'>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search songs, albums, artists, podcasts"
            />
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0 gap-3 d-flex align-items-center">

         

            {/* Profile image */}
            <li>
              <img src={img} width={30} height={30} alt="" />
            </li>

            <li className="nav-item">
              <a className="nav-link btn bg-white text-dark rounded-pill px-3 p-2 pt-1 fw-semibold" href="/Signin">
                Sign in
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
