import React from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css';



 const Header = (props) => {
     const {branding} =props;

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="##" className="navbar-brand">
                        {branding}
                    </a>
                   <div >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="##" className="nav-link">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="##" className="nav-link">
                                    HOME
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        );
    
};
Header.defaultProps={
    branding:"MY APP"
};
Header.propTypes={
    branding:PropTypes.string.isRequired
};

export default Header;