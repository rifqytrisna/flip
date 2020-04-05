import React, { component, Fragment } from "react";
import fetch from "isomorphic-unfetch";
import SearchBox from "../app/transaction/components/TransactionsSearchBox";
import TransactionsList from "../app/transaction/components/TransactionsList";

class Home extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch("https://nextar.flip.id/frontend-test");
    const data = await res.json();
    const dataToArray = Object.values(data);
    console.log("Home -> getInitialProps -> dataToArray", dataToArray);
    return { transactionList: dataToArray };
  }

  updateSearch(event) {
    this.setState({ query: event.target.value.substr(0, 20) });
  }

  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  filteredTransactionList() {
    let filteredTransactionList = this.props.transactionList.filter(item => {
      return (
        item.beneficiary_name
          .toLowerCase()
          .indexOf(this.state.query.toLowerCase()) !== -1
      );
    });
    return filteredTransactionList;
  }

  render() {
    return (
      <Fragment>
        {/* <SearchBox onChange={this.updateSearch.bind(this)}></SearchBox> */}
        <div>
          <label htmlFor="filter">Cari nama</label>
          <input
            type="text"
            id="filter"
            value={this.state.query}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        <div>
          {this.filteredTransactionList().map(item => (
            <TransactionsList transactionsList={item}></TransactionsList>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Home;
