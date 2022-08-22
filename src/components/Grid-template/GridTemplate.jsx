import "./gridTemplate.css";
import { useFilterData } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { gridTemplatesArr } from "../../utils/utilityArrays";
import { gridTemplateClickHandler, getTheGridTemplateClass } from "../../utils/gridTemplateFuncs";

const GridTemplate = () => {

    const navigate = useNavigate();
    const { dispatchOfProductsBeingShown } = useFilterData();

    return (
        <div className="ap_grid-template">
            {
                gridTemplatesArr.map((eachTemplate, index) => (
                    <div
                        className={getTheGridTemplateClass(index)}
                        key={index}
                        onClick={
                            () =>
                                gridTemplateClickHandler(
                                    eachTemplate,
                                    index,
                                    dispatchOfProductsBeingShown,
                                    navigate
                                )
                        }>
                        <img src={eachTemplate.templateImg} />
                        <div className="ap_grid-template-overlay">
                            <p className="ap_grid-template-overlay-text">
                                {eachTemplate.templateName}
                            </p>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
}

export { GridTemplate };