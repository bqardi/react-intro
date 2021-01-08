import React from "react";
import { Link } from "@reach/router";

function ActiveLink(props){
    return (
        <Link
            getProps={
                ({isCurrent}) => {
                    return isCurrent
                        ? {className: "primaryNavigation__link primaryNavigation__link--active"}
                        : {}
                }
            }
            {...props}>
        </Link>
    );
}

export default ActiveLink;