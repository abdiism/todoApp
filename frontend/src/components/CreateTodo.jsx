import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        if (!title.trim() || !description.trim()) {
            alert("please enter both the title and description")
            return;
        }
        fetch("http://localhost:3300/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "Content-type": "application/json",
            },
        }).then(async function (res) {
            const json = await res.json();
            setTitle("")// todo da kale imanysa usi bane
            setDescription("")
        });
    }
    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={function (e) {
                    //   const insideValue = e.target.value;
                    setTitle(e.target.value);
                }}
            />
            <br />
            <input
                type="description"
                placeholder="description"
                onChange={function (e) {
                    //   const insideValue = e.target.value;
                    setDescription(e.target.value);
                }}
            />
            <br />
            <button
                onClick={handleAddTodo}
            >  Add to do </button>
            <br />
        </div>
    );
}
