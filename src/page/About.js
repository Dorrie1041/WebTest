import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css';

export default function About(){

        return(
            <>
            <h1 className="AboutTitle">About Our Team07</h1>
            <nav className="Aboutnav">
                <ul className="Aboutul">
                    <li className="Aboutli">
                        <StyleLink to="/teammember/LuisAbout" style={{ textDecoration: 'none' }}>Luis</StyleLink>
                    </li>
                    <li className="Aboutli">
                        <StyleLink to="/teammember/dorrieabout" style={{ textDecoration: 'none' }}>Dorrie</StyleLink>
                    </li>
                    <li className="Aboutli">
                        <StyleLink to="/teammember/VedangAbout" style={{ textDecoration: 'none' }}>Vedang</StyleLink>
                    </li>
                    <li className="Aboutli">
                        <StyleLink to="/teammember/GwangwooAbout" style={{ textDecoration: 'none' }}>Gwangwoo</StyleLink>
                    </li>
                    <li className="Aboutli">
                        <StyleLink to="/teammember/JoohoAbout" style={{ textDecoration: 'none' }}>Jooho</StyleLink>
                    </li>
                    <li className="Aboutli">
                        <StyleLink to="/teammember/LesliAbout" style={{ textDecoration: 'none' }}>Lesli</StyleLink>
                    </li>
                </ul>
            </nav>
            </>
        );
    
}

const StyleLink = styled(Link)`
   text-decoration: none;
   &:hover{
     color: blue;
   }
`;

