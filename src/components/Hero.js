import React from "react";
import "./Hero.scss";

function Hero(props){
    return (
        <section className="hero">
            {props.children}
        </section>
    );
}

export default Hero;