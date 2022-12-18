import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Contact from "./Contact";
import About from "./AboutUs";
import Error from "./Error";
import Navbar from './Navbar';
import EmployeeAPI from "./EmployeeAPI";


function Main()
{
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
               <Switch>
                <Route exact path= '/Home' component={Home} />
                <Route exact path= '/About' component={About} />
                <Route exact path= '/Contact' component={Contact} />
                <Route exact path= '/employee' component={EmployeeAPI} />
                <Route>
                    <Error />
                </Route>
               </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Main;