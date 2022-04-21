import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GoodsView from "../GoodsView/GoodsView";

function Catalogue() {
    return (
        <div className="Catalogue">
            <ul>
                <li>
                    <Link to="/catalogue/1">мышка</Link>
                </li>
                <li>
                    <Link to="/catalogue/2">коврик</Link>
                </li>
                <li>
                    <Link to="/catalogue/3">клавиатура</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/:id" element={<GoodsView />} />
                <Route path="*" element={<h1>Something went wrong</h1>} />
            </Routes>
        </div>
    )
}

export default Catalogue