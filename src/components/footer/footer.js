import React from "react";
import LogoKasa from '../../data/asset/LogoWhite.png';
import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    const currentYear = (new Date()).getFullYear()
    return(
        <footer className="footer">
           
            <Link to='/'>

                <img src={LogoKasa} alt="logo kasa" />
                </Link>
                <div className="copyrightContainer">
                <p className="copyright">© {currentYear} Kasa. All </p><p className="copyright">rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer