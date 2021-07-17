import React from "react";

class Search extends React.Component {
  state = { allPetTypes: [], searchInput: "", type: "All" };

  componentDidMount() {
    fetch("/pettypes")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ allPetTypes: json });
      });
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => this.setState({ input: e.target.value })}
          ></input>

          <select
            className="custom-select"
            onChange={(e) => this.setState({ type: e.target.value })}
          >
            <option value="1">All</option>
            {this.state.allPetTypes.map((el) => {
              return <option>{el}</option>;
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                console.log(this.state.input);
                console.log(this.state.type);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
