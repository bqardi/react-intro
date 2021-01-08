import React from "react";
import {Link} from "@reach/router";
import "./SiteFooter.scss";
import paymentLogos from "../images/payment-logos.png";
import Button from "./Button";

function SiteFooter(){
    return (
        <footer className="siteFooter">
            <div className="siteFooter__side siteFooter__left">
                <address className="siteFooter__address">
                    Hi-Fi Corner<br/>
                    Edinburgh 2 Joppa Road EH15 2EU<br/>
                    Falkirk 44 Cow Wynd FK1 1PU
                </address>
                <div className="siteFooter__policies">
                    <Link to="/">
                        Returns &amp; Refunds
                    </Link>|
                    <Link to="/">
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div className="siteFooter__side siteFooter__right">
                <div className="siteFooter__payments">
                    <img src={paymentLogos} alt=""/>
                </div>
                <div className="siteFooter__social">
                    <Button modifier="social" icon="facebook" cls="siteFooter__socialIcon" />
                    <Button modifier="social" icon="youtube" cls="siteFooter__socialIcon" />
                    <Button modifier="social" icon="twitter" cls="siteFooter__socialIcon" />
                    <Button modifier="social" icon="instagram" cls="siteFooter__socialIcon" />
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;