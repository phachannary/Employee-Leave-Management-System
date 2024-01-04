import React from "react";
import "./leaveDetail.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
class LeaveDetail extends React.Component {
  render() {
    return (
      <div className="leave-detail-page">
        <Header/>
        <div className="leave-detail-container">
          <Menu/>
          <div className="leave-detail-content">
            Dashboard
          </div>
        </div>
      </div>
    )
  }
}


export default LeaveDetail;
