import React from "react";
import "./Button.scss";
import Icon from "./Icon";

function Button(props){
    var icon = "";
    if (props.icon) {
        icon = <Icon icon={props.icon} cls="button__icon" />;
    }
    return (
        <button className={`button${props.modifier ? " button--" + props.modifier : ""}${props.cls ? " " + props.cls : ""}`}>
            {icon}
            <span className="button__text">{props.text}</span>
        </button>
    );
}

export default Button;