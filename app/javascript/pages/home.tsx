import React, { useEffect, useState } from "react";
import Posts from "./posts";
import styled from "styled-components";
// import background from "../../assets/images/wallpaper.jpg";

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

async function getPosts() {
    const response = await fetch("/api/v1/posts");
    const body = await response.json();
    return body;
}

export default App;
