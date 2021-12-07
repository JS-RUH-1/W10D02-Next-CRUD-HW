import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link href="/">
          <a className="navbar-brand">PlanetWorld</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <Link href="/planets/">
              <a className="nav-link">Planet List</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
