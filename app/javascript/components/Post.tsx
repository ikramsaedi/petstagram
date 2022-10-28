import React from "react";

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
        </>
    );
}

export default Post;
