import React from "react";
import PrimaryNavigation from "./PrimaryNavigation";
import TopHeader from "./TopHeader";
import "./SiteHeader.scss"

function SiteHeader(){
    return (
        <header className="siteHeader">
            <TopHeader/>
            <PrimaryNavigation/>
        </header>
    );
}

export default SiteHeader;