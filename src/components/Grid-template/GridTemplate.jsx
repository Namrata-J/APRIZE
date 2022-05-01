import "./gridTemplate.css";
import { gridTemplatesArr } from "../../utils/utilityArrays";
import { useFilterData } from "../../contexts/filterData-context";
import { useNavigate } from "react-router-dom";

const GridTemplate = () => {

    const navigate = useNavigate();
    const { dispatchOfProductsBeingShown } = useFilterData();

    const gridTemplateClickHandler = (eachTemplate, index) => {
        dispatchOfProductsBeingShown({ type: "clear" });
        
        if(index === 1 || index === 2){
            dispatchOfProductsBeingShown({ type: "filterBySection", payload: eachTemplate.templateName })
        }else{
            dispatchOfProductsBeingShown({ type: "filterByCategory", payload: eachTemplate.templateName })
        }
        
        navigate("/Productlisting")
    }

    return (
        <div className="ap_grid-template">
            {
                gridTemplatesArr.map((eachTemplate, index) => {
                    if (index === 0) {
                        return (
                            <div className="ap_template-type template-type1" key={index} onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                                <img src={eachTemplate.templateImg} />
                                <div className="ap_grid-template-overlay">
                                    <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                                </div>
                            </div>
                        )
                    }
                    if (index === 1 || index === 2) {
                        return (
                            <div className="ap_template-type template-type2" key={index} onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                                <img src={eachTemplate.templateImg} />
                                <div className="ap_grid-template-overlay">
                                    <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                                </div>
                            </div>
                        )
                    }
                    if (index === 3 || index === 4 || index === 5) {
                        return (
                            <div className="ap_template-type template-type3" key={index} onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                                <img src={eachTemplate.templateImg} />
                                <div className="ap_grid-template-overlay">
                                    <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                                </div>
                            </div>
                        )
                    }
                    if (index === 6 || index === 7) {
                        return (
                            <div className="ap_template-type template-type4" key={index} onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                                <img src={eachTemplate.templateImg} />
                                <div className="ap_grid-template-overlay">
                                    <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                                </div>
                            </div>
                        )
                    }
                    if (index === 8) {
                        return (
                            <div className="ap_template-type template-type5" key={index} onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                                <img src={eachTemplate.templateImg} />
                                <div className="ap_grid-template-overlay">
                                    <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export { GridTemplate };