import React, { useState, useEffect } from "react";
import { Post } from "../types/post";

interface Props {
    onClick: () => void;
    post?: Post;
}

function PostForm(props: Props) {
    const post = props.post ?? "";
    return (
        <form>
            <div>
                <label>PictureURL</label>
                <input
                    type="text"
                    id="pictureUrl"
                    contentEditable
                    defaultValue={props.post ? props.post.pictureUrl : ""}
                ></input>
            </div>
            <div>
                <label>Caption</label>
                <input
                    type="text"
                    id="caption"
                    contentEditable
                    defaultValue={props.post ? props.post.caption : ""}
                ></input>
            </div>
            <button onClick={props.onClick}> Submit! </button>
        </form>
    );
}

export default PostForm;
