import Link from "next/Link";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <a>Planet</a>
    </Link>

    <Link href="/new">
      <a>Create Planet</a>
    </Link>
  </nav>
);

export default Navbar;
