import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostComponent from "../components/Post";
import { Post } from "../types/post";

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
                <PostComponent
                    caption={post.caption}
                    pictureUrl={post.pictureUrl}
                    id={id}
                />
            )}
        </div>
    );
}

export async function getPost(id: string) {
    const response = await fetch(`/api/v1/posts/${id}`);
    const body = await response.json();
    return body;
}

export default Show;
