
import { NavLink } from "react-router-dom";
import './style.css';

function Navbar()
{

    return(
        <div className="nav">
            <nav>
                <table width='100%'>
                    <tr>
                        <td><NavLink to ='/home' className= "text">Home</NavLink></td>
                        <td><NavLink to ='/about'  className= "text">About</NavLink></td>
                        <td><NavLink to ='/contact'  className= "text">Contact</NavLink></td>
                        <td><NavLink to ='/employee'  className= "text">Employee</NavLink></td>
                    </tr>
                </table>
            </nav>
        </div>
    )
}
export default Navbar;