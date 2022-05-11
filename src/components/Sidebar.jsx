import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                
            </div>

            <div className="menu">
                <ul>
                    <Link to="/" className="menu-item">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="menu-item">
                        <li>About</li>
                    </Link>
                    <Link to="/portfolio" className="menu-item">
                        <li>Porftolio</li>
                    </Link>
                    <Link to="/contact" className="menu-item">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

        </div>
    );
}

export default Sidebar;