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

    const getTheGridTemplateClass = (index) => {
       if(index === 0){
           return "ap_template-type template-type1"
       }else
           if(index === 1 || index === 2){
               return "ap_template-type template-type2"
           }else
               if(index === 3 || index === 4 || index === 5){
                   return "ap_template-type template-type3"
               }else
                   if(index === 6){
                       return "ap_template-type template-type4"
                   }else
                       if(index === 7){
                           return "ap_template-type template-type5"
                       }else
                           return "ap_template-type template-type6"
    }

    return (
        <div className="ap_grid-template">
            {
                gridTemplatesArr.map((eachTemplate, index) => {
                    return (
                        <div className={getTheGridTemplateClass(index)} key={ index } onClick={() => gridTemplateClickHandler(eachTemplate, index)}>
                            <img src={eachTemplate.templateImg} />
                            <div className="ap_grid-template-overlay">
                                 <p className="ap_grid-template-overlay-text">{eachTemplate.templateName}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export { GridTemplate };