import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrTwitter, GrGithub } from "../utils/icons";

const sponsoredBrands = [
    "Puma",
    "Adidas",
    "Reebok",
    "Chanel",
    "Air Jordan",
    "Nike",
    "Sony",
    "Lakme",
    "Samsung",
    "Apple"
];

const pagesLink = [
    {
        pageLink: "/LogIn",
        pageName: "LogIn"
    },
    {
        pageLink: "/LogOut",
        pageName: "LogOut"
    },
    {
        pageLink: "/SignUp",
        pageName: "SignUp"
    },
    {
        pageLink: "/Cart",
        pageName: "Cart"
    },
    {
        pageLink: "/",
        pageName: "Home"
    },
    {
        pageLink: "/Wishlist",
        pageName: "Wishlist"
    },
    {
        pageLink: "/Productlisting",
        pageName: "Product listing"
    }
];

const socialLinks = [
    {
        link: "https://www.facebook.com/people/Namrata-Jain/100036608312591/",
        icon: <GrFacebookOption />
    },
    {
        link: "https://www.instagram.com/the_dexterous_me/?r=nametag",
        icon: <GrInstagram />
    },
    {
        link: "https://www.linkedin.com/in/namrata-jain-2b6203216/",
        icon: <GrLinkedinOption />
    },
    {
        link: "https://twitter.com/muse_the_coder",
        icon: <GrTwitter />
    },
    {
        link: "https://github.com/Namrata-J",
        icon: <GrGithub />
    },
];

const creditsList = [
    {
        name: "Expeditech UI",
        link: "https://expeditech-ui.netlify.app/"
    },
    {
        name: "React Icons",
        link: "https://react-icons.github.io/react-icons"
    },
    {
        name: "Cloudinary",
        link: "https://cloudinary.com/"
    }
];

export { sponsoredBrands, pagesLink, socialLinks, creditsList };