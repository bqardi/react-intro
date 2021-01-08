import React from "react";
import SocialImage from "./SocialImage";
import facebook from "../images/frontpage_facebook_bgimage.jpg";
import blogger from "../images/frontpage_b_bgimage.jpg";
import twitter from "../images/frontpage_twitter_bgimage.jpg";
import "./SocialSection.scss";
import SocialInfo from "./SocialInfo";

function SocialSection(){
    return (
        <section className="socialSection">
            <div className="socialSection__images">
                <SocialImage link="/" src={facebook} alt="Facebook" icon="facebook" />
                <SocialImage link="/" src={blogger} alt="Blogger" icon="blogger" />
                <SocialImage link="/" src={twitter} alt="Twitter" icon="twitter" />
            </div>
            <div className="socialSection__links">
                <SocialInfo buttonText="HISTORY">
                    ESTABLISHED IN THE LATE 1960S, OUR FAMILY OWNED BUSINESS IS BASED IN EDINBURGH AND FALKIRK, SERVICING CUSTOMERS ACROSS THE UK.
                </SocialInfo>
                <SocialInfo buttonText="NEWS">
                    CHECK OUT OUR LATEST NEWS STORIES FOR ALL THE UP TO DATE HI-FI CORNER PRODUCTS AND LAUNCHES.
                </SocialInfo>
                <SocialInfo buttonText="SHOP">
                    HAVE A LOOK IN OUR ONLINE SHOP FOR GREAT PRODUCTS AND DEALS.
                </SocialInfo>
            </div>
        </section>
    );
}

export default SocialSection;