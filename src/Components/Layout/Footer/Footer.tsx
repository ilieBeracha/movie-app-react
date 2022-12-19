import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3><span>NEEDS</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Movies</a>

                        <a href="#">TV Shows</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Needs © 2015</p>
                </div>

                <div className="footer-center">
                    <div>
                    
                        <i className="fa fa-map-marker"></i>
                        <p><span>Anshei Bereshit, </span> Moshav Beney Zion</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+972-544-868-495</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:ilieberacha123@gmail.com">support@company.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">
                        <a href="#"> <LinkedInIcon fontSize="large" /></a>
                        <a href="#"> <InstagramIcon fontSize="large" /> </a>
                        <a href="#"> <TwitterIcon fontSize="large" /></a>
                        <a href="#"> <GitHubIcon fontSize="large" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
