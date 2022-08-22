import {
    CLEAR,
    FILTER_BY_SECTION,
    FILTER_BY_CATEGORY
} from "../constants/filterStateConstants";

const gridTemplateClickHandler = (eachTemplate, index, dispatchOfProductsBeingShown, navigate) => {
    dispatchOfProductsBeingShown({ type: CLEAR });

    if (index === 1 || index === 2 || index === 8) {
        dispatchOfProductsBeingShown({
            type: FILTER_BY_SECTION,
            payload: eachTemplate.templateName
        })
    } else {
        dispatchOfProductsBeingShown({
            type: FILTER_BY_CATEGORY,
            payload: eachTemplate.templateName
        })
    }

    navigate("/Productlisting")
}

const getTheGridTemplateClass = (index) => {
    switch (index) {
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

export { gridTemplateClickHandler, getTheGridTemplateClass };