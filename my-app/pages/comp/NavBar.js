import Link from 'next/link'
const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Plants List</h1>
            </div>
            <a href='/'>Home</a> 
           <Link href='/Add'><a>Add Plants</a></Link>
        </nav>
     );
}
 
export default NavBar;