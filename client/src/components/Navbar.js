import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

    return(
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Excer Tracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto"> 
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Excercises</Link>
                    </li>
                    
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Buat Catatan Olahraga</Link>
                    </li>
                    
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Buat Akun</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;