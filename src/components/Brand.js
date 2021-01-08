import React from "react";
import {Link} from "@reach/router";
import image from "../images/logo-white.png";
import "./Brand.scss";

function Brand(props){
    var {modifier} = props;
    modifier = modifier ? " brand--" + modifier : "";
    return (
        <Link className={`brand${modifier}`} to="/">
            <img className="brand__image" src={image} alt="Logo"/>
        </Link>
    );
}

export default Brand;