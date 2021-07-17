import React from "react";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = { searchCity: "", searchType: "type", searchBreed: "breed" };

  getInfoFromSearch = (city, type, breed) => {
    this.setState({ searchCity: city, searchType: type, searchBreed: breed });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-10 p-4">
            <Search sendSearchQuery={this.getInfoFromSearch}/>
          </div>
        </div>
        <div className="row">
          <div className="col-10 p-4">
            <Table city={this.state.searchCity} type={this.state.searchType} breed={this.state.searchBreed}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
