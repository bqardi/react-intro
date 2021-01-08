import React from "react";
import Button from "./Button";
import "./ProductCard.scss";

function ProductCard(props){
    return (
        <article className="productCard">
            <div className="productCard__imageContainer">
                <img className="productCard__image" src={props.src} alt={props.alt}/>
            </div>
            <p className="productCard__description">{props.description}</p>
            <div className="productCard__prices">
                <p className={`productCard__retail${props.price ? " js-disabled" : ""}`}>{props.retail}</p>
                <p className={`productCard__price${props.price ? "" : " js-disabled"}`}>{props.price}</p>
            </div>
            <Button modifier="productCard" text="ADD TO CART"/>
        </article>
    );
}

export default ProductCard;