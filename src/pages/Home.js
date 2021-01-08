import React from "react";
import useDocTitle from "../components/DocTitle";
import Hero from "../components/Hero";
import SiteMain from "../components/SiteMain";
import Info from "../components/Info";
import Slider from "../components/Slider";
import SocialSection from "../components/SocialSection";
import Brand from "../components/Brand";

function Home(){
    useDocTitle("Home");
    return (
        <>
            <Hero>
                <Brand/>
            </Hero>
            <SiteMain>
                <Info/>
                <Slider/>
                <SocialSection/>
            </SiteMain>
        </>
    )
}

export default Home;