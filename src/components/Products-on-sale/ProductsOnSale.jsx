import { productsOnSaleArr } from "../../utils/filteredCategoriesArr";
import "./productsOnSale.css";
import { Link } from "react-router-dom";

const ProductsOnSale = () =>{
    return (
        <div className="ap_homePage-productsOnSale-category">
            <div className="ap_productsOnSale-section">
                {
                    productsOnSaleArr.map((productOnSale, index) => {
                        return (
                            <Link to='/Productlisting' key={ index } state= { productOnSale }>
                                <img src= { productOnSale.img } alt= "product On Sale" className="ap_productOnSale-img" />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export { ProductsOnSale };