import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks [] = [
    {
        label: "Nous contacter",
        baseUrl: "/contact",
        type: "internal", 
    },

    {
        label: "Qui sommes nous",
        baseUrl: "/",
        type: "internal", 
    },

    {
        label: "Mention légales",
        baseUrl: "/#",
        type: "internal", 
    },



];

export const footerUserLinks: AppLinks [] = [
    {
        label: "Politique de confidentialié",
        baseUrl: "/#",
        type: "internal", 
    },

    {
        label: "Condition d'utilisation",
        baseUrl: "/connexion",
        type: "internal", 
    },

  

];
const footerInformationLinks: AppLinks [] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal", 
    },

    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal", 
    },

    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal", 
    },
    
    {
        label: "Contact",
        baseUrl: "/contact",
        type: "external", 
    },


];

export const footerSocialNetworksLinks: AppLinks [] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com@remotemonkey",
        type: "external", 
        icon: RiYoutubeFill,
    },

    {
        label: "Linkeldin",
        baseUrl: "https://youtube.com@remotemonkey",
        type: "external", 
        icon: RiLinkedinFill,
    },

    {
        label: "Stack",
        baseUrl: "https://youtube.com@remotemonkey",
        type: "external", 
        icon: RiSlackFill,
    },
 
];

export const footerLinks = [
    {
        label: "App",
        links : footerApplicationLinks,
    },

    {
        label: "Utilisateurs",
        links : footerUserLinks,
    },

   
]

