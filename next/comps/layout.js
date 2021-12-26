import Footer from "./footer";
import Header from "./header";

const Layoute = ({children}) => {
    return ( <div className="content"><Header/>{children}<Footer/></div> );
}
 
export default Layoute;