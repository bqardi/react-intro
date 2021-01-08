import React from "react";
import {Link} from "@reach/router";
import Button from "./Button";
import Icon from "./Icon";
import "./TopHeader.scss";

function TopHeader() {
    return (
        <div className="topHeader">
            <Link to="/contact#map">
                <Icon icon="mapmarker" cls="topHeader__link" />
            </Link>
            <Link to="/contact#phone">
                <Icon icon="phone" cls="topHeader__link" />
            </Link>
            <a href="mailto:hello@hificorner.com">
                <Icon icon="email-outline" cls="topHeader__link" />
            </a>
            <Button modifier="cta" icon="email" text="Subscribe"/>
        </div>
    );
}
export default TopHeader;