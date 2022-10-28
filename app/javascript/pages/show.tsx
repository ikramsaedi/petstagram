import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

type Post = {
    caption: string;
    pictureUrl: string;
};

function Show() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        getPost(id).then((response) => setPost(response));
    }, []);

    return (
        <div>
            <h1>Post</h1>
            {post && (
                <Post
                    caption={post.caption}
                    pictureUrl={post.pictureUrl}
                    id={id}
                />
            )}
        </div>
    );
}

async function getPost(id: string) {
    const response = await fetch(`/api/v1/posts/${id}`);
    const body = await response.json();
    return body;
}

export default Show;
