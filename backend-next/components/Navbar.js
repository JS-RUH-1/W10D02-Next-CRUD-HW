import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/addPlanet"><a>Add Planet</a></Link>
        </nav>
    );
}

export default Navbar;