import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //init this component's state
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

export default SearchBar;