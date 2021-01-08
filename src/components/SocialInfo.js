import React from "react";
import Button from "./Button";
import "./SocialInfo.scss";

function SocialInfo(props){
    return (
        <div className="socialInfo">
            <Button modifier="gold" text={props.buttonText}/>
            <p className="socialInfo__text">{props.children}</p>
        </div>
    );
}

export default SocialInfo;