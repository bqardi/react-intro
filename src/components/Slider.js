import React, {useState, useEffect} from "react";
import useDocTitle from "./DocTitle";
import {Link} from "@reach/router";
import "./Slider.scss";
import dvdPlayer from "../images/parasound_halod3.jpg";
import speaker from "../images/harbeth_p3es2.jpg";
import lp from "../images/Pro_ject_rpm10.jpg";
import Icon from "./Icon";

var images = [
    {to: "/products", img: dvdPlayer},
    {to: "/products", img: speaker},
    {to: "/products", img: lp}];

var {length} = images;
var timeout;

function Slider(){
    var [index, setIndex] = useState(0);

    useEffect(() => {
        runSlideShow();
        return () => clearInterval(timeout);
    });
    
    function runSlideShow(){
        timeout = setInterval(() => {
            setIndex(nextImage(index, length));
        }, 3000);
    }
    
    useDocTitle("HiFi Corner | Home");

    return (
        <section className="slider">
            <h2 className="slider__title">PRIMALUNA SOUNDS</h2>
            <Link className="slider__link" to="/">
                <Icon icon="chevron-left" cls="slider__icon"/>
            </Link>
            <Link className="slider__link slider__link--large" to={images[index].to}>
                <img className="slider__image" src={images[index].img} alt="Logo"/>
            </Link>
            <Link className="slider__link" to="/">
                <Icon icon="chevron-right" cls="slider__icon"/>
            </Link>
        </section>
    );
}

function nextImage(index, max){
    var i = index + 1;
    if (i >= max) {
        i = 0;
    }
    return i;
}

function previousImage(index, max){
    var i = index - 1;
    if (i < 0) {
        i = max - 1;
    }
    return i;
}

export default Slider;