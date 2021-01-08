import React from "react";
import useDocTitle from "../components/DocTitle";
import SiteMain from "../components/SiteMain";
import CategoryElement from "../components/CategoryElement";
// Images
import shopByBrand from "../images/shoppage_shopbybrand_bgimage.jpg"
import amplifier from "../images/shoppage_amplifier_bgimage.jpg"
import speaker from "../images/shoppage_speaker_bgimage.jpg"
import turntable from "../images/shoppage_turntables_bgimage.jpg"
import cdplayer from "../images/shoppage_cdplayer_bgimage.jpg"
import streamers from "../images/shoppage_streamers_bgimage.jpg"
import cables from "../images/shoppage_cables_bgimage.jpg"
import furniture from "../images/shoppage_furniture_bgimage.jpg"
import blogger from "../images/shoppage_b_bgimage.jpg"
import homeCinema from "../images/shoppage_homecinema_bgimage.jpg"
import outlet from "../images/shoppage_outlet_bgimage.jpg"
import ebayshop from "../images/shoppage_ebayshop_bgimage.jpg"
import ceilingSpeakers from "../images/shoppage_ceilingspeakers_bgimage.jpg"
import tv from "../images/shoppage_tv_bgimage.jpg"
import vinyllps from "../images/shoppage_vinyllps_bgimage.jpg"

var categories = [
    {
        title: "SHOP BY BRAND",
        src: shopByBrand,
        link: "/shop",
    },
    {
        title: "INTEGRATED AMPLIFIERS",
        src: amplifier,
        link: "/shop",
    },
    {
        title: "SPEAKERS",
        src: speaker,
        link: "/shop",
    },
    {
        title: "DVD PLAYERS",
        src: turntable,
        link: "/shop",
    },
    {
        title: "CD PLAYERS",
        src: cdplayer,
        link: "/shop",
    },
    {
        title: "STREAMERS",
        src: streamers,
        link: "/shop",
    },
    {
        title: "PRE AMPLIFIERS",
        src: cables,
        link: "/shop",
    },
    {
        title: "POWER AMPLIFIERS",
        src: furniture,
        link: "/shop",
    },
    {
        title: "TUBE AMPLIFIERS",
        src: blogger,
        link: "/shop",
    },
    {
        title: "HOME CINEMA",
        src: homeCinema,
        link: "/shop",
    },
    {
        title: "OUTLET - SAVE UP TO 50%",
        src: outlet,
        link: "/shop",
    },
    {
        title: "EBAY SHOP",
        src: ebayshop,
        link: "/shop",
    },
    {
        title: "CEILING SPEAKERS",
        src: ceilingSpeakers,
        link: "/shop",
    },
    {
        title: "TVS",
        src: tv,
        link: "/shop",
    },
    {
        title: "VINYL LP'S",
        src: vinyllps,
        link: "/shop",
    },
    {
        title: "SHOP NOW",
        src: "",
        link: "/products",
    },

];

function Shop(){
    useDocTitle("Shop");
    return (
        <SiteMain topSpace="true" modifier="grid">
            <div className="siteMain__center">
                {categories.map(category => {
                    return <CategoryElement
                            key={category.title}
                            link={category.link}
                            text={category.title}
                            src={category.src}
                            alt={category.title}
                        />
                })}
            </div>
        </SiteMain>
    )
}

export default Shop;