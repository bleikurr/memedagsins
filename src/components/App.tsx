import { Button, Card, Container } from "@material-ui/core";
import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Container id="main-container">
        <Card
          style={{
            width: "fit-content",
            padding: "20px",
            alignSelf: "center",
          }}
        >
          <img src="https://img-9gag-fun.9cache.com/photo/a1KzBe2_460s.jpg" />
        </Card>
      </Container>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
