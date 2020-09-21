import React, { Component } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import axios from "axios";

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" }
];

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];


const data = [
  { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
  { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
  { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
  { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
  { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
  { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
  { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
  { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
  { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
  { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
  { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
];

class App extends Component {
  state = {
    csvReport: {
      data: data,
      headers: headers,
      filename: 'Report.csv'
    }
  }

  downloadReport = (event, done) => {
    // API call to get data
    const objReport = {
      filename: 'Clue_Mediator_Report_Async.csv',
      headers: headers,
      data: data
    };
    this.setState({ csvReport: objReport }, () => {
      done();
    });
  }

  render() {
    return (
      <div>
        {/* <CSVDownload data={csvData} target="_blank">test</CSVDownload>  */}



        <CSVLink
          data={data}
          headers={headers}
          asyncOnClick={true}
          filename={'report.csv'}

        // onClick={(event, done) => {
        //   axios.post("/spy/user").then(() => {
        //     done(); // REQUIRED to invoke the logic of component
        //   });
        // }}
        >
          Download me
      </CSVLink>
      </div>
    );
  }
}

export default App;
