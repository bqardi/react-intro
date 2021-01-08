import React from "react";
import {Link} from "@reach/router";
import "./CategoryElement.scss";

function CategoryElement(props){
    var imgTag = props.src ? <img className="categoryElement__image" src={props.src} alt={props.alt}/> : "";
    return (
        <Link className="categoryElement" to={props.link}>
            {imgTag}
            <span className="categoryElement__text">
                {props.text}
            </span>
        </Link>
    );
}

export default CategoryElement;