import React from "react";
import PostForm from "../components/PostForm";

function NewPost() {
    return (
        <>
            <h1>New Post</h1>
            <PostForm onClick={onClick} />
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

export default NewPost;
