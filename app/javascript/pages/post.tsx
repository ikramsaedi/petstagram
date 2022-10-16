import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(id).then((response) => setPost(response));
    }, []);

    return (
        <div>
            <p>cat</p>
            <p>{post.caption}</p>
        </div>
    );
}

async function getPost(id) {
    const response = await fetch(`/api/v1/posts/${id}`);
    const body = await response.json();
    return body;
}

export default Post;
