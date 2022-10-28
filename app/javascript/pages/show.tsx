import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
    caption: string;
    pictureUrl: string;
};

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        getPost(id).then((response) => setPost(response));
    }, []);

    return (
        <div>
            <p>cat</p>
            {post && <p>{post.caption}</p>}
        </div>
    );
}

async function getPost(id: string) {
    const response = await fetch(`/api/v1/posts/${id}`);
    const body = await response.json();
    return body;
}

export default Post;
