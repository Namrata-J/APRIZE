import "./footer.css";
import { Link } from "react-router-dom";
import { useFilterData } from "../../contexts";

const Footer = () => {

    const { dispatchOfProductsBeingShown } = useFilterData();

    return (
        <div className="ap_footer-container">
            <div className="ap_footer">
                <div className="ap_credits">
                    <p>Credits:</p>
                    <div>
                        <a href="https://expeditech-ui.netlify.app/" target="_blank">Expeditech UI</a>
                        <a href="https://react-icons.github.io/react-icons" target="_blank">React Icons</a>
                    </div>
                </div>
                <div className="ap_connect-info">
                    <p>Connect:</p>
                    <div>
                        <a href="https://www.facebook.com/people/Namrata-Jain/100036608312591/" target="_blank">Facebook</a>
                        <a href="https://www.instagram.com/the_dexterous_me/?r=nametag" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/namrata-jain-2b6203216/" target="_blank">LinkedIn</a>
                        <a href="https://twitter.com/muse_the_coder" target="_blank">Twitter</a>
                    </div>
                </div>
                <div className="ap_pages-info">
                    <p>Pages:</p>
                    <div>
                        <Link to="/LogIn">LogIn</Link>
                        <Link to="/LogOut">LogOut</Link>
                        <Link to="/SignUp">SigUp</Link>
                        <Link to="/Cart">Cart</Link>
                        <Link to="/">Home</Link>
                        <Link to="/Wishlist">Wishlist</Link>
                        <Link to="/Productlisting" onClick= {() => dispatchOfProductsBeingShown({ type: "clear" })}>Product listing</Link>
                    </div>
                </div>
            </div>
            <h4>APRIZE</h4>
            <div className="ap_copyright-text">
                <p>All rights reserved || Copyright @ 2022</p>
            </div>
        </div>
    );
}

export { Footer };