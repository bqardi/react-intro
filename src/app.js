import React from "react";
import {render} from "react-dom";
import SiteHeader from "./components/SiteHeader";
import {Router} from "@reach/router";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SiteFooter from "./components/SiteFooter";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Products from "./pages/Products";

function App() {
    return (
        <>
            <SiteHeader/>
            <Router>
                <Home path="/" />
                <Brands path="/brands" />
                <About path="/about" />
                <Blog path="/blog" />
                <Events path="/events" />
                <Shop path="/shop" />
                <Contact path="/contact" />
                <Products path="/products" />
            </Router>
            <SiteFooter/>
        </>
    );
}

render(<App/>, document.getElementById("root"));