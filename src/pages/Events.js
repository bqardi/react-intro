import React from "react";
import useDocTitle from "../components/DocTitle";
import SiteMain from "../components/SiteMain";
import UnderConstruction from "../components/UnderConstruction";

function Events(){
    useDocTitle("Events");
    return (
        <SiteMain topSpace="true">
            <UnderConstruction/>
        </SiteMain>
    )
}

export default Events;