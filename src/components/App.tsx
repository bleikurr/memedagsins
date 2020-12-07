import { Button, Card, Container } from "@material-ui/core";
import * as React from "react";
import { hot } from "react-hot-loader";


import "./../assets/scss/App.scss";
import ImageViewContainer from "./ImageContainer/ImageViewContainer";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Container id="main-container">
        <ImageViewContainer />
      </Container>
    );
  }
}

declare let module: Record<string, unknown>;
export default hot(module)(App);
