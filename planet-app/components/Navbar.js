import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Planet App</a>
        </Link>
        <Link href="/new">
            <a className="create">Create Planet</a>
        </Link>
    </nav>
)

export default Navbar;