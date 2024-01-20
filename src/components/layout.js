import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"

// Define your links in an array
const links = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Om mig", path: "/about" },
  { name: "Kontakta mig", path: "/contact" },
]

const Layout = ({ children }) => (
  <>
    <header>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/*           <Link to="/" className="nav-link">
            Maximilian
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* Map over the links and generate a Link component for each one */}
              {links.map((link, index) => (
                <Link key={index} to={link.path} className="nav-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>

    {<main className="main">{children}</main>}

    {/* Bootstrap card */}
    <footer className="footer">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">Maximilian Bakaldin</p>
          <Link to="/" className="nav-link">
            Hem
          </Link>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
