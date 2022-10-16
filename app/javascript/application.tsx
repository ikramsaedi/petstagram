// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "./controllers/hello_controller.js";
import Posts from "./pages/posts";
import Post from "./pages/post";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((response) => setPosts(response));
    }, []);

    return (
        <>
            {posts.map((post) => {
                return <p>{post.caption}</p>;
            })}
            <Posts />
        </>
    );
}

function Loaf() {
    return <p>Loaf!!</p>;
}

async function getPosts() {
    const response = await fetch("/api/v1/posts");
    const body = await response.json();
    return body;
}

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="posts" element={<App />} />
            <Route path="posts/:id" element={<Post />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);
