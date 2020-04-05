import React, { component, Fragment } from "react";
import fetch from "isomorphic-unfetch";
import TransactionsList from "../app/transaction/components/TransactionsList";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

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
      query: "",
    };
  }

  filteredTransactionList() {
    let filteredTransactionList = this.props.transactionList.filter((item) => {
      return (
        item.beneficiary_name
          .toLowerCase()
          .indexOf(this.state.query.toLowerCase()) !== -1
      );
    });
    return filteredTransactionList;
  }

  render() {
    const container = {
      maxWidth: "440px",
      minHeight: "100vh",
      margin: "0 auto",
      backgroundColor: "#D3D3D3",
      borderTop: "5px solid #FF4500",
      paddingTop: "8px",
    };
    const searchWrapper = {
      backgroundColor: "#fff",
      maxWidth: "420px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "8px",
      borderRadius: "4px",
      padding: "8px 4px",
    };
    return (
      <Fragment>
        <div style={container}>
          <div style={searchWrapper}>
            <SearchIcon />
            <TextField
              size="small"
              defaultValue="Small"
              placeholder="Cari nama"
              value={this.state.query}
              onChange={this.updateSearch.bind(this)}
            />
          </div>
          <div>
            {this.filteredTransactionList().map((item) => (
              <TransactionsList transactionsList={item}></TransactionsList>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
