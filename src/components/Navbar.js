import { Link } from 'react-scroll';
import './styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-logo" href="/">Timur Rakhimov</a>
            <div className="navbar-links">
                <Link to="hero" spy={true} smooth={true} duration={500} activeClass="active">
                    Home
                </Link>
                <span className="divider"></span>
                <Link to="experience" spy={true} smooth={true} duration={500} activeClass="active">
                    Experience
                </Link>
                <span className="divider"></span>
                <Link to="projects" spy={true} smooth={true} duration={500} activeClass="active">
                    Projects
                </Link>
                <span className="divider"></span>
                <Link to="skills" spy={true} smooth={true} duration={500} activeClass="active">
                    Skills
                </Link>
                <span className="divider"></span>
                <Link to="contact" spy={true} smooth={true} duration={500} activeClass="active">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
