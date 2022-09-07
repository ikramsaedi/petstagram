// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "./controllers/hello_controller.js";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <p>LOAFLOAFLOAF</p>
        </>
    );
}

function Loaf() {
    return <p>Loaf!!</p>;
}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Loaf" element={<Loaf />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);