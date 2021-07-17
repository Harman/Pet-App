import React from "react";

class Search extends React.Component {
  state = {
    allPets: { cities: [], types: [], breeds: [] },
    city: "",
    type: "type",
    breed: "breed",
  };

  componentDidMount() {
    fetch("/pettypes")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ allPets: json });
      });
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search City..."
            onChange={(e) => this.setState({ city: e.target.value })}
          ></input>

          <select
            className="custom-select"
            onChange={(e) => this.setState({ type: e.target.value })}
          >
            <option>type</option>
            {this.state.allPets.types.map((el) => {
              return <option>{el}</option>;
            })}
          </select>
          <select
            className="custom-select"
            onChange={(e) => this.setState({ breed: e.target.value })}
          >
            <option>breed</option>
            {this.state.allPets.breeds.map((el) => {
              return <option>{el}</option>;
            })}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                this.props.sendSearchQuery(
                  this.state.city,
                  this.state.type,
                  this.state.breed
                );
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
