import React from "react";

class SearchBar extends React.Component {
  state = {
    findEvent: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.findEvent);
    //console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="search here..."
              value={this.state.findEvent}
              onChange={f => this.setState({ findEvent: f.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
