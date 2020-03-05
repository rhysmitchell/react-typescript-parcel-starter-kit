import React, { FunctionComponent } from "react";
import { hot } from "react-hot-loader";

const App: FunctionComponent = (): JSX.Element => <h1>Hello world!</h1>;

declare const module: any;
export default hot(module)(App);
