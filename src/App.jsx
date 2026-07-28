import React from 'react';
import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Performance from "./components/Performance.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <div>
           <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
        </div>
    );
};

export default App;
