import React from "react";

function NewPost() {
    return (
        <>
            <form>
                <div>
                    <label>PictureURL</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Caption</label>
                    <input type="text"></input>
                </div>
                <button onClick={onSubmit}> Submit! </button>
            </form>
        </>
    );
}

async function onSubmit() {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pictureUrl: "dummypikjdslddsklc",
            caption: "dummycaptiskdldon",
        }),
    };
    const response = await fetch("/api/v1/posts", requestOptions);
    const body = await response.json();
    location.href = `${body.id}`;
}

export default NewPost;
