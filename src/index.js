import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./assets/App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#root"));
