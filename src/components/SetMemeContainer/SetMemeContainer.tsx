import React from "react";
import { Card } from "@material-ui/core";
import SetMemeForm from "./SetMemeForm";

export default function SetMemeContainer() {
    return (
        <Card style={{ height: 200, width: 500 }}>
            <SetMemeForm />
        </Card>
    );
}
