import React from "react";
import ProductCard from "./ProductCard";
import "./ProductsLayout.scss";
// Image import. Er der en bedre måde at gøre det her på?
import dvdPlayer from "../images/parasound_halod3.jpg";
import speaker from "../images/harbeth_p3es2.jpg";
import cdPlayer from "../images/creek_classic5350SE.jpg";
import lp from "../images/Pro_ject_rpm10.jpg";

var cards = [
    {src: dvdPlayer, alt: "Parasound Halo D3", description: "SOME DESCRIPTION OF THE PRODUCT", retail: "£123.00", price: "£99.95"},
    {src: dvdPlayer, alt: "Parasound Halo D4", description: "SOME DESCRIPTION OF THE PRODUCT", retail: "£123.00", price: ""},
    {src: cdPlayer, alt: "Creek Classic 5350SE", description: "SOME DESCRIPTION OF THE PRODUCT", retail: "£123.00", price: "£99.95"},
    {src: speaker, alt: "Harbeth P3ES2", description: "SOME DESCRIPTION OF THE PRODUCT", retail: "£123.00", price: "£99.95"},
    {src: lp, alt: "Pro-Ject RPM10", description: "SOME DESCRIPTION OF THE PRODUCT", retail: "£123.00", price: "£99.95"},
];

function ProductsLayout(){
    return (
        <section className="productsLayout">
            {cards.map(card => {
                return <ProductCard
                    key={card.alt}
                    src={card.src}
                    alt={card.alt}
                    description={card.description}
                    retail={card.retail}
                    price={card.price}
                />
            })}
        </section>
    );
}

export default ProductsLayout;