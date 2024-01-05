import React, { useState } from "react";
import "./leaveManagement.css";
import Header from "../../components/HeaderComponent";
import Menu from "../../components/MenuComponent";
import App from "../../App";
import DataTable from "react-data-table-component";

class LeaveManagement extends React.Component {
  render() {
    const columns = [
      {
        name: "No",
        selector: row => row.no,
        sortable: true,
      },
      {
        name: "Type Of Leav",
        selector: row => row.typeofleave,
        sortable: true,
      },
      {
        name: "From",
        selector: row => row.from,
        sortable: true,
      },
      {
        name: "To",
        selector: row => row.to,
        sortable: true,
      },
      {
        name: "Description",
        selector: row => row.description,
        sortable: true,
      },
      {
        name: "Posting Date",
        selector: row => row.postingdate,
        sortable: true,
      },
      {
        name: "Admin Remark",
        selector: row => row.remark,
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
        typeofleave: "Sick Leave",
        from: "05/01/2024",
        to: "07/01/2024",
        description: "Simple Leave",
        postingdate: 25,
        remark: 25,
        status: "Approved",
      },
      {
        no: 1,
        typeofleave: "Annul Leave",
        from: "05/01/2024",
        to: "07/01/2024",
        description: "Simple Leave",
        postingdate: 25,
        remark: 25,
        status: "Pending",
      },
      {
        no: 1,
        typeofleave: "Special Leav",
        from: "05/01/2024",
        to: "07/01/2024",
        description: "Simple Leave",
        postingdate: 25,
        remark: 25,
        status: "Pending",
      },
      {
        no: 1,
        typeofleave: "Sick Leave",
        from: "05/01/2024",
        to: "07/01/2024",
        description: "Simple Leave",
        postingdate: 25,
        remark: 25,
        status: "Not Approved",
      },
    
    ];

    // const [records, setRecords] = useState(data);

    function handleFilter(event) {
      const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
      })

      // setRecords(newData);
    }

    return (
      <div className="leave-history-page">
        <Header parentToChild={"Employee Leave Management System"} />
        <div className="leave-histroy-page-main">
          <Menu />
          <div className="leave-history-container">
            <h3>LEAVE HISTORY {App.LeaveManagement}</h3>
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

export default LeaveManagement;
