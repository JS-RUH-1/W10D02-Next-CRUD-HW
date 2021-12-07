import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Planet App</a>
        </Link>
        <Link href="/news">
            <a className="create">Create a Planet</a>
        </Link>
    </nav>
)
// 10 go to pages / index.js
export default Navbar;
