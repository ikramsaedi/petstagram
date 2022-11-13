import React from "react";
import handleErrors from "../lib/handleErrors";

interface Props {
    caption: string;
    pictureUrl: string;
    id: string;
}

function Post(props: Props) {
    return (
        <>
            <p>Caption: {props.caption}</p>
            <p>PictureURL: {props.pictureUrl}</p>
            <a href={`/posts/${props.id}/edit`}>Edit</a>
            <br />
            <button onClick={() => onDelete(props.id)}>Delete</button>
        </>
    );
}

async function onDelete(id: string) {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    };

    try {
        const response = await fetch(`/api/v1/posts/${id}`, requestOptions);
        handleErrors(response);
        location.href = location.href.replace(`/${id}`, "");
        console.log(`You have successfully deleted post ${id}!`);
    } catch (err) {
        console.error("Something went wrong:", err);
    }
}

export default Post;
