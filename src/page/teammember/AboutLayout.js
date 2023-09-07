import { Outlet,Link } from "react-router-dom";

const aboutLayout = () =>{
    return(
        <>
        <h1>About Our Team07</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/teammember/dorrieabout">Dorrie</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default aboutLayout;