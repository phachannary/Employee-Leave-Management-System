import React from "react";
import "./dashboard.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-page">
        <Header/>
        <div className="dashboard-container">
          <Menu/>
          <div className="dashboard-content">
            Dashboard
          </div>
        </div>
      </div>
    )
  }
}


export default Dashboard;
