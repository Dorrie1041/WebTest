import { Outlet,Link } from "react-router-dom";

const aboutLayout = () =>{
    return(
        <>
        <h1>About Our Team07</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/teammember/LuisAbout">Luis</Link>
                </li>
                <li>
                    <Link to="/teammember/dorrieabout">Dorrie</Link>
                </li>
                <li>
                    <Link to="/teammember/VedangAbout">Vedang</Link>
                </li>
                <li>
                    <Link to="/teammember/GwangwooAbout">Gwangwoo</Link>
                </li>
                <li>
                    <Link to="/teammember/JoohoAbout">Jooho</Link>
                </li>
                <li>
                    <Link to="/teammember/LesliAbout">Lesli</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
};
export default aboutLayout;