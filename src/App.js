import React from "react";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-10 p-4">
        <Search/>
          </div>
        </div>
        <div className="row">
          <div className="col-10 p-4">
        <Table/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
