import React from "react";
import useDocTitle from "../components/DocTitle";
import ProductsLayout from "../components/ProductsLayout";
import SiteMain from "../components/SiteMain";

function Products(){
    useDocTitle("Products");
    return (
        <SiteMain topSpace="true">
            <ProductsLayout/>
        </SiteMain>
    )
}

export default Products;