
const categoryTypeArr = [
    {
        category: "Men",
        img: "https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0018/812/677/assets/200427_24A_M_DP_Sale.jpg"
    },
    {
        category: "Women",
        img: "https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dwf5fa28c2/images/homepage/CategoryTiles/CategoryTilesHomePage/Women%27s%20Jeans.jpg"
    },
    {
        category: "MakeUp",
        img: "https://www.pinkvilla.com/imageresize/amazon_republic_day_sale_best_eye_makeup_products_to_grab_under_rs_600.jpg?width=752&format=webp&t=pvorg"
    },
    {
        category: "Furniture",
        img: "https://www.archiproducts.com/images/editor/gallery/desktop_260x260_1031d6ff-1ee8-4ae3-a14b-d26aaf38ca38.jpg"
    },
    {
        category: "Kids",
        img: "https://www.hopscotch.in/blog/wp-content/uploads/2019/11/Kids-fashion-rules-for-different-seasons_2.jpg"
    },
    {
        category: "Saree",
        img: "https://looksgud.com/blog/wp-content/uploads/2016/04/traditional-nath-clip.jpg"
    },
    {
        category: "Shoes",
        img: "https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?k=20&m=1303978937&s=612x612&w=0&h=ipieQsE8SrbQFtnZBKbDOK65HZfKF764FuojDll90CQ="
    },
    {
        category: "Jewellery",
        img: "https://www.wamanharipethesons.com/portalrepository/https://www.wamanharipethesons.com/portalrepository/images/homerollingimages/20190828_112652.jpg"
    },
    {
        category: "Perfumes",
        img: "https://cdn.pixabay.com/photo/2014/08/17/20/24/perfume-420174__340.jpg"
    },
    {
        category: "Mobiles",
        img: "https://image.oppo.com/content/dam/oppo/in/mkt/homepage/middle/f19s-middle-banner-mobile.jpg.thumb.webp"
    },
    {
        category: "Watches",
        img: "https://staticimg.titan.co.in/Sonata/Catalog/87036PL08W_1.jpg?pView=listing"
    },
    {
        category: "Headphones",
        img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/plp/bbd.plpasset.headphones.studio3-v2.jpg.large.1x.jpg"
    },
    {
        category: "Winter",
        img: "https://media.glamour.com/photos/5f3eebe2cdf05b6c483abd1f/master/pass/best%20fall%20sweater.jpg"
    },
    {
        category: "Kitchen utensils",
        img: "https://www.wikihow.com/images/thumb/6/6e/Select-Cooking-Utensils-Step-1.jpg/v4-460px-Select-Cooking-Utensils-Step-1.jpg.webp"
    },
    {
        category: "Water Bottles",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/water-bottles-1613062033.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
    },
    {
        category: "MamaEarth Products",
        img: "https://m.media-amazon.com/images/I/51H59tBryGL._SL1200_.jpg"
    },
    {
        category: "Masks",
        img: "https://shereads.com/wp-content/uploads/2021/12/slowburn-1.jpeg"
    },
    {
        category: "Bags",
        img: "https://5.imimg.com/data5/ANDROID/Default/2021/4/RF/CC/DX/33576657/product-jpeg-500x500.jpg"
    }
]; 

const newArrivalsArr = [
    {
        isNewArrival: true,
        img: "https://cdn.create.vista.com/downloads/8168c482-8851-4977-921b-8156e16cced1_1024.jpeg"
    },
    {
        isNewArrival: true,
        img: "https://assets.visme.co/templates/banners/thumbnails/i_New-Arrivals-Facebook-Ad_full.jpg"
    },
    {
        isNewArrival: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/retail-store-facebook-shop-cover-design-template-3b90163b24d7f9c789c1be51b5a3951d_screen.jpg?ts=1590736716"
    },
    {
        isNewArrival: true,
        img: "https://piktochart.com/wp-content/uploads/2021/12/large-370.jpg"
    },
    {
        isNewArrival: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/handbag-retail-store-facebook-shop-cover-design-template-40a6e8390030a201805361d3b5be2d02_screen.jpg?ts=1590736721"
    },
    {
        isNewArrival: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-arrival-sale-design-template-641c0ad4c4208872b7c318c43d3bcfc0_screen.jpg?ts=1640011293"
    },
    {
        isNewArrival: true,
        img: "https://cdn.create.vista.com/downloads/6431758d-0d3a-4d0e-8141-ed217cc22da6_450.jpeg"
    },
    {
        isNewArrival: true,
        img: "https://cdn.create.vista.com/downloads/dda6cd11-af3e-48ad-9ad8-18f11b727ea2_450.jpeg"
    },
    {
        isNewArrival: true,
        img: "https://img.seapik.com/large/ins-wind-clothing-luggage-promotion-public-account-cover-template_3663286.jpg!w432"
    }
];

const discountedProductsArr = [
    {
        hasDiscount: true,
        img: "https://cdn.create.vista.com/common/0e6d32c3-7023-4dd2-89eb-c130b8ba0547_1024.jpeg"
    },
    {
        hasDiscount: true,
        img: "https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg"
    },
    {
        hasDiscount: true,
        img: "https://cdn.create.vista.com/downloads/0cbcb23f-8cd2-4e59-8bc2-8fd98e32e9d5_450.jpeg"
    },
    {
        hasDiscount: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hair-salon-discount-offer-banner-design-template-5ce8b4bd8d61e2529b94eeede00d9a54.jpg?ts=1567082208"
    },
    {
        hasDiscount: true,
        img: "https://img-cdn.pixlr.com/pixlr-templates/606c344a48cbf009caa394a1/preview.webp"
    },
    {
        hasDiscount: true,
        img: "https://images.template.net/wp-content/uploads/2021/06/gift-certificate-voucher-coupon-bon-card-ad-design-template-43b6f585d5bfd9dff8e7c7c4145492f5_screen.jpg"
    }
];

const productsOnSaleArr = [
    {
        onSale: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/season-sale-poster-ad-video-design-template-bdeae870f850e17693fc8b0abcf78260.jpg?ts=1567084470",
    },
    {
        onSale: true,
        img: "https://piktochart.com/wp-content/uploads/2021/12/large-858.jpg",
    },
    {
        onSale: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-ad-facebook-cover-template-design-372328f14f184754ec52dd80a0ba2e4c_screen.jpg?ts=1579262269",
    },
    {
        onSale: true,
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mega-fashion-sale-poster-%7C-festive-sale-design-template-5bb927bf61a7fc69477949f600d7c3a2_screen.jpg?ts=1606888511",
    },
    {
        onSale: true,
        img: "https://i.fbcd.co/products/resized/resized-750-500/dff0bca857016f16cdbeee90df63ca85a71d720995c927c584fc9642ad4bb49e.jpg",
    },
    {
        onSale: true,
        img: "https://www.edrawsoft.com/templates/images/hot-sale-facebook-cover.png",
    },
    {
        onSale: true,
        img: "https://images.template.net/wp-content/uploads/2016/11/15115545/Free-Marketing-Product-Sale-Banner.jpg",
    },
    {
        onSale: true,
        img: "https://s.tmimgcdn.com/scr/1200x750/215800/flash-sale-promotional-sale-banner-template_215832-original.jpg",
    },
    {
        onSale: true,
        img: "https://assets.market-storefront.envato-static.com/storefront/packs/media/images/shared/themeforest_marchsale_home_646x347_x1-3046dfc343b5738bd0ed2bae857b18d2.png"
    }
];

export { categoryTypeArr, newArrivalsArr, discountedProductsArr, productsOnSaleArr };