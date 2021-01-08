import React from "react";
import {Link} from "@reach/router";
import "./BrandsLayout.scss";
import Brand from "../components/Brand";
import brandsImage from "../images/brands.png";

function BrandsLayout(){
    return (
        <div className="brandsLayout">
            <header className="brandsLayout__header">
                <h1 className="brandsLayout__title">TOP BRANDS</h1>
                <Brand modifier="small"/>
            </header>
            <div className="brandsLayout__content">
                <img src={brandsImage} alt="brandsLayout"/>
                <div className="brandsLayout__info">
                    <h2 className="brandsLayout__heading">BRANDS</h2>
                    <p className="brandsLayout__text">
                        As an independent retailer of home audio and visual products, we are able to select the very best brands and manufacturers from across the world.
                    </p>
                    <p className="brandsLayout__text">
                        Not only do we have the best known brands such as B&amp;W, Devialet, KEF, Naim, and Linn; we also stock and are well versified with smaller autonomous companies like Michell Engineering, Neat Acoustics, Harbeth, SME, Trichord Research, PrimaLuna, to name but a few.
                    </p>
                    <p className="brandsLayout__text">
                        With over a hundred brands, we can happily say that if a brand meets our high standards for sound reproduction, then you can be assured to find it at Hi-Fi Corner.
                    </p>
                    <Link className="brandsLayout__link" to="/products">
                        VISIT OUR SHOP TO FIND MORE BRANDS&gt;
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BrandsLayout;