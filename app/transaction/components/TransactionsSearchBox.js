import React, { Component } from "react";

class filterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  searchTransactionByName = e => {
    this.setState({
      query: e.target.value
    });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter">Cari nama</label>
        <input
          type="text"
          id="filter"
          value={this.state.query}
          onChange={this.searchTransactionByName}
        />
      </div>
    );
  }
}

export default filterForm;
