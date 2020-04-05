import React, { component } from "react";
import formatPriceIdr from "../../utils/currency.utils";
import formatDate from "../../utils/dates.utils";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
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
    const cardWrapper = {
      borderLeft: "5px solid #6cc070",
      borderRadius: "8px",
      maxWidth: "400px",
      padding: "16px 12px",
      marginBottom: "8px",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#fff",
    };
    const bankName = {
      display: "flex",
      alignItems: "center",
    };
    const transactionInfo = {
      display: "flex",
      alignItems: "center",
    };
    const userInfo = {
      display: "flex",
      marginBottom: "4px",
      justifyContent: "space-between",
      alignItems: "center",
    };
    const status = {
      backgroundColor: "#228B22",
      color: "#fff",
      padding: "6px 8px",
      borderRadius: "8px",
    };
    return (
      <div style={cardWrapper}>
        <div style={bankName}>
          <span style={{ fontWeight: "bold" }}>
            {this.changeToUppercase(this.props.transactionsList.sender_bank)}
          </span>
          <ArrowForwardRoundedIcon style={{ margin: "0 4px", width: "16px" }} />
          <span style={{ fontWeight: "bold" }}>
            {this.changeToUppercase(
              this.props.transactionsList.beneficiary_bank
            )}
          </span>
        </div>

        <div style={userInfo}>
          <span>{this.props.transactionsList.beneficiary_name}</span>
          <span style={status}>
            {this.transferStatus(this.props.transactionsList.status)}
          </span>
        </div>
        <div style={transactionInfo}>
          <span>{formatPriceIdr(this.props.transactionsList.amount)}</span>
          <FiberManualRecordRoundedIcon
            style={{ margin: "0 4px", width: "10px" }}
          />
          <span>
            {this.timeStamp(this.props.transactionsList.completed_at)}
          </span>
        </div>
      </div>
    );
  }
}

export default TransactionsList;
