import React, { useState } from "react";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
import App from "../../App";
import DataTable from "react-data-table-component";

class LeaveTypes extends React.Component {
  render() {
    const columns = [
      {
        name: "No",
        selector: row => row.no,
        sortable: true,
      },
      {
        name: "Leave Name",
        selector: row => row.leaveName,
        sortable: true,
      },
      {
        name: "Leave Type",
        selector: row => row.leaveType,
        sortable: true,
      },
      {
        name: "Leave Unit",
        selector: row => row.leaveUnit,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },
    ];

    const data = [
      {
        no: 1,
        leaveName: "Emergency Leave",
        leaveType: "Unpaid",
        leaveUnit: "Days",
        status: "Active",
      },
      {
        no: 2,
        leaveName: "Casual Leave",
        leaveType: "Unpaid",
        leaveUnit: "Hours",
        status: "Active",
      },
      {
        no: 3,
        leaveName: "Sick Leave",
        leaveType: "Unpaid",
        leaveUnit: "Days",
        status: "Deactive",
      },
      {
        no: 4,
        leaveName: "Family Leave",
        leaveType: "Unpaid",
        leaveUnit: "Days",
        status: "Deactive",
      },
      {
        no: 5,
        leaveName: "Work From Home Leave",
        leaveType: "paid",
        leaveUnit: "Days",
        status: "Active",
      },
      {
        no: 6,
        leaveName: "Maternity Leave",
        leaveType: "Unpaid",
        leaveUnit: "Hours",
        status: "Active",
      },
    ];

    function handleFilter(event) {
      const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      })

    }

    return (
      <div>
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-histroy-page-main">
          <Menu />
          <div className="leave-history-container">
            <h3>LEAVE TYPES {App.LeaveTypes}</h3>
            <div className="leave-history-content">
              <div className="text_end mt-3"><input type="text" placeholder="search" onChange={handleFilter}/></div>
              <DataTable columns={columns} data={data} pagination></DataTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveTypes;
