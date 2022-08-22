const filterableFormSortByDiscountArr = [
    {
        inputId: "ap_sort-tenPercentAndAbove",
        optionForSortByDiscount: "10% & above"
    },
    {
        inputId: "ap_sort-thirtyPercentAndAbove",
        optionForSortByDiscount: "30% & above"
    },
    {
        inputId: "ap_sort-sixtyPercentAndAbove",
        optionForSortByDiscount: "60% & above"
    },
    {
        inputId: "ap_sort-eightyPercentAndAbove",
        optionForSortByDiscount: "80% & above"
    }
];

const filterableFormCategoryArr = [
    {
        inputId: "ap_filter-bags",
        categoryName: "Bags"
    },
    {
        inputId: "ap_filter-bodycareProducts",
        categoryName: "Bodycare Products"
    },
    {
        inputId: "ap_filter-furniture",
        categoryName: "Furniture"
    },
    {
        inputId: "ap_filter-free-style",
        categoryName: "Free Style"
    },
    {
        inputId: "ap_filter-headphones",
        categoryName: "Headphones"
    },
    {
        inputId: "ap_filter-jewellery",
        categoryName: "Jewellery"
    },
    {
        inputId: "ap_filter-kitchenUtensils",
        categoryName: "Kitchen utensils"
    },
    {
        inputId: "ap_filter-makeUp",
        categoryName: "Makeup"
    },
    {
        inputId: "ap_filter-masks",
        categoryName: "Masks"
    },
    {
        inputId: "ap_filter-mobiles",
        categoryName: "Mobiles"
    },
    {
        inputId: "ap_filter-perfumes",
        categoryName: "Perfumes"
    },
    {
        inputId: "ap_filter-professionals",
        categoryName: "Professionals"
    },
    {
        inputId: "ap_filter-saree",
        categoryName: "Saree"
    },
    {
        inputId: "ap_filter-shoes",
        categoryName: "Shoes"
    },
    {
        inputId: "ap_filter-sunglasses",
        categoryName: "Sunglasses"
    },
    {
        inputId: "ap_filter-watches",
        categoryName: "Watches"
    },
    {
        inputId: "ap_filter-waterBottles",
        categoryName: "Water Bottles"
    },
    {
        inputId: "ap_filter-western",
        categoryName: "Western"
    },
    {
        inputId: "ap_filter-winter",
        categoryName: "Winter"
    }
];

const filterableFormSortByRatingArr = [
    {
        _id: "ap_sort-threeStarAndAbove",
        value: "3 star & above",
    },
    {
        _id: "ap_sort-fourStarAndAbove",
        value: "4 star & above"
    },
    {
        _id: "ap_sort-fiveStar",
        value: "5 star"
    }
];

const filterableFormSectionArr = [
    {
        _id: "ap_filter-men",
        value: "Men"
    },
    {
        _id: "ap_filter-women",
        value: "Women"
    },
    {
        _id: "ap_filter-kids",
        value: "Kids"
    }
];

const filterableFormProductsArr = [
    {
        _id: "ap_filter-newArrivals",
        value: "New Arrivals",
        payloadValue: "isNewArrival"
    },
    {
        _id: "ap_filter-discountedProducts",
        value: "Discounted",
        payloadValue: "hasDiscount"
    },
    {
        _id: "ap_filter-fastDelivery",
        value: "Fast Delivery",
        payloadValue: "hasFastDelivery"
    },
    {
        _id: "ap_filter-inStock",
        value: "In Stock",
        payloadValue: "isInStock"
    },
    {
        _id: "ap_filter-inSale",
        value: "In Sale",
        payloadValue: "isInSale"
    },
    {
        _id: "ap_filter-trending",
        value: "Trending",
        payloadValue: "isTrending"
    }
];

export {
    filterableFormSortByDiscountArr,
    filterableFormCategoryArr,
    filterableFormSortByRatingArr,
    filterableFormSectionArr,
    filterableFormProductsArr
};