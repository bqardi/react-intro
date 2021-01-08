import React from "react";
import useDocTitle from "../components/DocTitle";
import SiteMain from "../components/SiteMain";
import UnderConstruction from "../components/UnderConstruction";

function Contact(){
    useDocTitle("Contact Us");
    return (
        <SiteMain topSpace="true">
            <UnderConstruction/>
        </SiteMain>
    )
}

export default Contact;