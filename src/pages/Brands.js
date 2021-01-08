import React from "react";
import useDocTitle from "../components/DocTitle";
import BrandsLayout from "../components/BrandsLayout";
import SiteMain from "../components/SiteMain";

function Brands(){
    useDocTitle("Brands");
    return (
        <SiteMain topSpace="true" modifier="brandImage">
            <BrandsLayout/>
        </SiteMain>
    )
}

export default Brands;