import React, { useEffect, useState } from "react";
import { getPost } from "./show";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../types/post";
import PostForm from "../components/PostForm";
import handleErrors from "../lib/handleErrors";

function Edit() {
    const { id } = useParams();
    const [post, setPost] = useState<PostType | null>(null);
    useEffect(() => {
        getPost(id).then((response) => setPost(response));
    }, []);
    return (
        <>
            <h1>Edit</h1>
            {post && <PostForm onClick={() => onClick(id)} post={post} />}
        </>
    );
}

function onClick(id: string) {
    const pictureUrlInput = document.querySelector(
        "#pictureUrl",
    ) as HTMLInputElement;
    const captionInput: HTMLInputElement = document.querySelector(
        "#caption",
    ) as HTMLInputElement;

    updatePost(pictureUrlInput.value, captionInput.value, id);
}
async function updatePost(pictureUrl: string, captionUrl: string, id: string) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pictureUrl: pictureUrl,
            caption: captionUrl,
        }),
    };

    try {
        const response = await fetch(`/api/v1/posts/${id}`, requestOptions);
        handleErrors(response);
        // HACK: redirect
        location.href = location.href.replace("/edit", "");
    } catch (err) {
        console.error("Something went wrong:", err);
    }
}

export default Edit;
