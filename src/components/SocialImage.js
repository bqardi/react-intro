import React from "react";
import Icon from "./Icon";
import "./SocialImage.scss";

function SocialImage(props){
    return (
        <a className="socialImage" href={props.link}>
            <img className="socialImage__image" src={props.src} alt={props.alt}/>
            <span className="socialImage__abscenter">
                <Icon icon={props.icon} cls="socialImage__icon" />
            </span>
        </a>
    );
}

export default SocialImage;