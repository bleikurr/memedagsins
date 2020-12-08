import { Button, Menu, MenuItem } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import { BrowserHistory } from "history";
import React from "react";
import { withRouter } from "react-router-dom";

function AppMenu(props: { history: BrowserHistory }) {
    const [anchor, setAnchor] = React.useState(null);

    const setMemeAndClose = () => {
        history.push("/setmeme");
        setAnchor(null);
    };

    const { history } = props;
    return (
        <>
            <Button
                style={{
                    height: 48,
                }}
                onClick={(e) => setAnchor(e.target)}
            >
                <MoreVert color="primary" />
            </Button>
            <Menu
                style={{ position: "absolute" }}
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}
            >
                <MenuItem onClick={setMemeAndClose}>Setja Meme</MenuItem>
            </Menu>
        </>
    );
}

export default withRouter(AppMenu);
