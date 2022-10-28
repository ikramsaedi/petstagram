import React from "react";

function NewPost() {
    return (
        <>
            <form>
                <div>
                    <label>PictureURL</label>
                    <input type="text" id="pictureUrl"></input>
                </div>
                <div>
                    <label>Caption</label>
                    <input type="text" id="caption"></input>
                </div>
                <button onClick={onSubmit}> Submit! </button>
            </form>
        </>
    );
}

async function onSubmit() {
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
