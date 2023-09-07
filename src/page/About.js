import { Link } from "react-router-dom";
import '../App.css';

export default function About(){

        return(
            <>
            <h1 className="AboutTitle">About Our Team07</h1>
            <nav className="Aboutnav">
                <ul className="Aboutul">
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/LuisAbout">Luis</Link>
                    </li>
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/dorrieabout">Dorrie</Link>
                    </li>
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/VedangAbout">Vedang</Link>
                    </li>
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/GwangwooAbout">Gwangwoo</Link>
                    </li>
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/JoohoAbout">Jooho</Link>
                    </li>
                    <li className="Aboutli">
                        <Link className={"About-link"} to="/teammember/LesliAbout">Lesli</Link>
                    </li>
                </ul>
            </nav>
            </>
        );
    
}

