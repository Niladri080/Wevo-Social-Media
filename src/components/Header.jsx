import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="p-3 bg-nav">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ml-2">
            <li>
              <Link
                to="/"
                className={`nav-link px-2 hover-green ${
                  location.pathname === "/"
                    ? "text-green-clicked"
                    : "text-green"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`nav-link px-2 hover-green ${
                  location.pathname === "/contact"
                    ? "text-green-clicked"
                    : "text-green"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`nav-link px-2 hover-green ${
                  location.pathname === "/pricing"
                    ? "text-green-clicked"
                    : "text-green"
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`nav-link px-2 hover-green ${
                  location.pathname === "/faq"
                    ? "text-green-clicked"
                    : "text-green"
                }`}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link px-2 hover-green ${
                  location.pathname === "/about"
                    ? "text-green-clicked"
                    : "text-green"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-green bg-y"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2 button-green">
              Login
            </button>
            <button type="button" className="btn btn-sign">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
