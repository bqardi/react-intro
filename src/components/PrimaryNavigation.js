import React from "react";
import "./PrimaryNavigation.scss";
import ActiveLink from "./ActiveLink";

function PrimaryNavigation(){    
    var linkSettings = [
        {link: "/", text: "Home"},
        {link: "/about", text: "About Us"},
        {link: "/brands", text: "Brands"},
        {link: "/blog", text: "Blog"},
        {link: "/events", text: "Events"},
        {link: "/shop", text: "Shop"},
        {link: "/contact", text: "Contact Us"},
    ]

    return (
        <nav className="primaryNavigation">
            {linkSettings.map(linkSetting =>{
                return <ActiveLink
                        key={linkSetting.text}
                        className="primaryNavigation__link"
                        to={linkSetting.link}
                    >
                        {linkSetting.text}
                    </ActiveLink>;
            })}
        </nav>
    );
}

export default PrimaryNavigation;