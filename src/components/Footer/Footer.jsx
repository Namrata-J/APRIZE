import "./footer.css";
import { Link } from "react-router-dom";
import { useFilterData } from "../../contexts";
import { CLEAR } from "../../constants/filterStateConstants";
import { sponsoredBrands, pagesLink, socialLinks, creditsList } from "../../constants/footerConstants";

const Footer = () => {

    const { dispatchOfProductsBeingShown } = useFilterData();

    return (
        <div className="ap_footer-container">
            <div className="ap_footer-connect-info">
                {
                    socialLinks.map((reachOutPage, index) =>
                        <a key={index} href={reachOutPage.link} target="_blank">
                            {reachOutPage.icon}
                        </a>
                    )
                }
            </div>
            <div className="ap_footer-aprize-related-info">
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Sponsors</p>
                    <div className="ap_footer-info-listing">
                        {
                            sponsoredBrands.map((brand) => <p>{brand}</p>)
                        }
                    </div>
                </div>
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Pages</p>
                    <div className="ap_footer-info-listing">
                        {
                            pagesLink.map((page, index) => page.pageName !== "Product listing" ?
                                <p key={index}>
                                    <Link
                                        to={page.pageLink}
                                        onClick={
                                            () => page.pageLink === "Product listing" ?
                                                dispatchOfProductsBeingShown({ type: CLEAR }) :
                                                ""
                                        }
                                    >
                                        {page.pageName}
                                    </Link>
                                </p> :
                                <p key={index}>
                                    <Link
                                        to={page.pageLink}
                                        onClick={() => dispatchOfProductsBeingShown({ type: CLEAR })}>
                                        {page.pageName}
                                    </Link>
                                </p>
                            )
                        }
                    </div>
                </div>
                <div className="ap_footer-aprize-related-info-subsection">
                    <p className="ap_footer-heading">Credits</p>
                    <div className="ap_footer-info-listing">
                        {
                            creditsList.map((credit) =>
                                <p><a href={credit.link} target="_blank">{credit.name}</a></p>
                            )
                        }
                    </div>
                </div>
            </div>
            <h3>APRIZE</h3>
            <p className="ap_footer-aprize-copyright">All rights reserved || Copyright @ 2022 || APRIZE</p>
        </div>
    );
}

export { Footer };