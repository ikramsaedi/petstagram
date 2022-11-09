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

async function onClick(id: string) {
    const pictureUrlInput = document.querySelector(
        "#pictureUrl",
    ) as HTMLInputElement;
    const captionInput: HTMLInputElement = document.querySelector(
        "#caption",
    ) as HTMLInputElement;

    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pictureUrl: pictureUrlInput.value,
            caption: captionInput.value,
        }),
    };
    const response = await fetch(`/api/v1/posts/${id}`, requestOptions);
    const body = await response.json();
    // HACK: this is not good practice and I shouldn't do this!
    location.href = location.href.replace("/edit", "");
}

export default Edit;
