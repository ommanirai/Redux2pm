import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Navbar from "./component/Layout/Navbar";
import Game from "./pages/Game";
// import Card from "./component/Layout/Card";
import Cart from "./pages/Cart";

const MyRoute = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/game" element={<Game />} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoute