import React from "react";
import "./UnderConstruction.scss";
import underConstructionImage from "../images/Under-Construction-Sign.png";

function UnderConstruction(){
    return (
        <section className="underConstruction">
            <img className="underConstruction__image" src={underConstructionImage} alt="Under Construction"/>
        </section>
    );
}

export default UnderConstruction;