import React, { component, Fragment } from "react";
import formatPriceIdr from "../../utils/currency.utils";
import formatDate from "../../utils/dates.utils";

class TransactionsList extends React.Component {
  changeToUppercase(value) {
    let bankName = "";
    if (value.length === 3) {
      bankName = value.toUpperCase();
    } else {
      bankName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    return bankName;
  }

  timeStamp(value) {
    const dateAt = formatDate(value, "D MMMM YYYY");

    return dateAt;
  }

  transferStatus(value) {
    switch (value) {
      case "SUCCESS":
        return "Berhasil";
      case "PENDING":
        return "Menunggu";
      default:
        return "";
    }
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex">
          <span>
            {this.changeToUppercase(this.props.transactionsList.sender_bank)}
          </span>
          ->
          <span>
            {this.changeToUppercase(
              this.props.transactionsList.beneficiary_bank
            )}
          </span>
        </div>

        <div className="d-flex">
          <span>{this.props.transactionsList.beneficiary_name}</span>
          <span className="mr-2">
            {this.transferStatus(this.props.transactionsList.status)}
          </span>
          <span>{formatPriceIdr(this.props.transactionsList.amount)}</span>
          <span>
            {this.timeStamp(this.props.transactionsList.completed_at)}
          </span>
        </div>
      </Fragment>
    );
  }
}

export default TransactionsList;
