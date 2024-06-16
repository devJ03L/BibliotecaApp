import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand" to="/">
                Biblioteca
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/libros">
                        Libros
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/prestamos">
                        Prestamos
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}