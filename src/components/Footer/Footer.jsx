import "./footer.css";
import { Link } from "react-router-dom";
import { useFilterData } from "../../contexts";
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrTwitter, GrGithub } from "../../utils/icons";

const Footer = () => {

    const { dispatchOfProductsBeingShown } = useFilterData();

    return (
        <div className="ap_footer-container">
            <div className="ap_footer-connect-info">
                <a href="https://www.facebook.com/people/Namrata-Jain/100036608312591/" target="_blank"><GrFacebookOption /></a>
                <a href="https://www.instagram.com/the_dexterous_me/?r=nametag" target="_blank"><GrInstagram /></a>
                <a href="https://www.linkedin.com/in/namrata-jain-2b6203216/" target="_blank"><GrLinkedinOption /></a>
                <a href="https://twitter.com/muse_the_coder" target="_blank"><GrTwitter /></a>
                <a href="https://github.com/Namrata-J" target="_blank"><GrGithub /></a>
            </div>
            <div className="ap_footer-aprize-related-info">
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Sponsors</p>
                    <div className="ap_footer-info-listing">
                        <p>Puma</p>
                        <p>Adidas</p>
                        <p>Reebok</p>
                        <p>Chanel</p>
                        <p>Air Jordan</p>
                        <p>Nike</p>
                        <p>Sony</p>
                        <p>Lakme</p>
                        <p>Samsung</p>
                        <p>Apple</p>
                    </div>
                </div>
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Pages</p>
                    <div className="ap_footer-info-listing">
                        <p><Link to="/LogIn">LogIn</Link></p>
                        <p><Link to="/LogOut">LogOut</Link></p>
                        <p><Link to="/SignUp">SignUp</Link></p>
                        <p><Link to="/Cart">Cart</Link></p>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/Wishlist">Wishlist</Link></p>
                        <p><Link to="/Productlisting" onClick= {() => dispatchOfProductsBeingShown({ type: "clear" })}>Product listing</Link></p>
                    </div>
                </div>
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Credits</p>
                    <div className="ap_footer-info-listing">
                        <p><a href="https://expeditech-ui.netlify.app/" target="_blank">Expeditech UI</a></p>
                        <p><a href="https://react-icons.github.io/react-icons" target="_blank">React Icons</a></p>
                        <p><a href="https://cloudinary.com/" target="_blank">Cloudinary</a></p>
                    </div>
                </div>
            </div>
            <h3>APRIZE</h3>
            <p className="ap_footer-aprize-copyright">All rights reserved || Copyright @ 2022 || APRIZE</p>
        </div>
    );
}

export { Footer };