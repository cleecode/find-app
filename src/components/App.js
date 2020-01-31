import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "../assets/App.css";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async findEvent => {
    const response = await unsplash.get("/search/photos", {
      params: { query: findEvent }
    });
    this.setState({ images: response.data.results });

    //   .then(response => {
    //     console.log(response.data.results);
    //   });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1 className="titles">Image Finder</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
