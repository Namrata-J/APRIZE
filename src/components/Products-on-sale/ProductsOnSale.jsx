import { productsOnSaleArr } from "../../utils/filteredCategoriesArr";
import "./productsOnSale.css";

const ProductsOnSale = () =>{
    return (
        <div className="ap_homePage-productsOnSale-category">
            <div className="ap_productsOnSale-section">
                {
                    productsOnSaleArr.map((productOnSale, index) => {
                        return (
                            <div key={ index }>
                                <img src= { productOnSale.img } alt= "product On Sale" className="ap_productOnSale-img" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export { ProductsOnSale };