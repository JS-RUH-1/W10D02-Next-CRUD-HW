import Link from 'next/link';
 
const Navbar =()=>(

    <nav className="navbar">
        <Link href ='/'>
            <a className="navbar-brand">Plant App</a>
        </Link>

        <Link href ='/new'>
            <a className="create"> Create Plant</a>
        </Link>

         
    </nav>
)

export default Navbar; 