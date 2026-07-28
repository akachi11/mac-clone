import React from 'react';
import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";

const App = () => {
    return (
        <div>
           <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </div>
    );
};

export default App;
