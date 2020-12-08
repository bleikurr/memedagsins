import { Container, Typography } from "@material-ui/core";
import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import { BrowserHistory } from "history";

import ImageViewContainer from "./ImageContainer/ImageViewContainer";
import AppMenu from "./AppMenu";

import "./../assets/scss/App.scss";
import SetMemeContainer from "./SetMemeContainer";

class App extends React.Component<{ history: BrowserHistory }, unknown> {
    public render() {
        const { history } = this.props;

        return (
            <>
                <div className="header">
                    <AppMenu />
                    <Typography
                        variant="h4"
                        color="primary"
                        onClick={() => history.push("/")}
                    >
                        Meme Dagsins
                    </Typography>
                </div>
                <Container id="main-container">
                    <Switch>
                        <Route exact path="/setmeme">
                            <SetMemeContainer />
                        </Route>
                        <Route exact path="/">
                            <ImageViewContainer />
                        </Route>
                    </Switch>
                </Container>
            </>
        );
    }
}

declare let module: Record<string, unknown>;
export default hot(module)(withRouter(App));
