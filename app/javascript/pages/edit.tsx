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
    // .then((response) => {
    //     if (response) location.href = location.href.replace("/edit", "");
    // });
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
    await fetch(`/api/v1/posts/${id}`, requestOptions)
        .then((response) => {
            handleErrors(response);
        })
        .catch((err) => {
            console.error("Something went wrong:", err);
        });
}

function handleErrors(response: Response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export default Edit;
