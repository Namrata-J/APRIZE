import "./gridTemplate.css";
import { useFilterData } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { gridTemplatesArr } from "../../utils/utilityArrays";

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

    const getTheGridTemplateClass = (index) => {
        switch(index){
            case 0: return "ap_template-type template-type1"
            case 1:
            case 2: return "ap_template-type template-type2"
            case 3:
            case 4:
            case 5: return "ap_template-type template-type3"
            case 6: return "ap_template-type template-type4"
            case 7: return "ap_template-type template-type5"
            default: return "ap_template-type template-type6"
        }
    }

    return (
        <div className="ap_grid-template">
            {
                gridTemplatesArr.map((eachTemplate, index) => (
                        <div className={getTheGridTemplateClass(index)} key={ index } onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                            <img src={eachTemplate.templateImg} />
                            <div className="ap_grid-template-overlay">
                                 <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}

export { GridTemplate };