import { FormControl, Input, InputLabel, TextField } from "@material-ui/core";
import React from "react";

export default function SetMemeForm() {
    const [url, setURL] = React.useState("");
    const [passw, setPassw] = React.useState("");

    return (
        <form className="basic-form" onSubmit={() => console.log("Nammi!")}>
            <TextField
                className="basic-form-field"
                id="Meme"
                label="Meme URL"
                variant="outlined"
                onChange={(e) => setURL(e.target.value)}
                value={url}
            />
            <TextField
                className="basic-form-field"
                id="leyniord"
                label="Leyniorð"
                variant="outlined"
                type="password"
                onChange={(e) => setPassw(e.target.value)}
                value={passw}
            />
        </form>
    );
}
