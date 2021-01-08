import React from "react";
import "./SiteMain.scss";

function SiteMain(props){
    var topSpace = props.topSpace ? " siteMain--topSpace" : "";
    var modifier = props.modifier ? " siteMain--" + props.modifier : "";
    return (
        <main className={`siteMain${topSpace}${modifier}`}>
            {props.children}
        </main>
    );
}

export default SiteMain;