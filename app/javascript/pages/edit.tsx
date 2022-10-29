import React, { useEffect, useState } from "react";
import { getPost } from "./show";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../types/post";
import PostForm from "../components/PostForm";

function Edit() {
    const { id } = useParams();
    const [post, setPost] = useState<PostType | null>(null);
    useEffect(() => {
        getPost(id).then((response) => setPost(response));
    }, []);
    return (
        <>
            <h1>Edit</h1>
            {post && <PostForm onClick={onClick} post={post} />}
        </>
    );
}

async function onClick() {
    const pictureUrlInput = document.querySelector(
        "#pictureUrl",
    ) as HTMLInputElement;
    const captionInput: HTMLInputElement = document.querySelector(
        "#caption",
    ) as HTMLInputElement;

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pictureUrl: pictureUrlInput.value,
            caption: captionInput.value,
        }),
    };
    const response = await fetch("/api/v1/posts", requestOptions);
    const body = await response.json();
    location.href = `${body.id}`;
}

export default Edit;
