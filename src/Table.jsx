import React from "react";

class Table extends React.Component {
  state = {
      allPets: [],
  };

    componentDidMount() {
      fetch("/pets")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ allPets: json });
        });
    }

  render() {
    let animalsSearched =[];
    let pets =this.state.allPets;
    let city = this.props.city.toLowerCase();
    let type = this.props.type;
    let breed = this.props.breed;

    animalsSearched = pets.filter((el) => {
      return city === el.city.toLowerCase() || city === "";
    });

    animalsSearched = animalsSearched.filter((el) => {
      return type === el.animal || type === "type";
    });

    animalsSearched = animalsSearched.filter((el) => {
      return breed === el.breed || breed === "breed";
    });

    console.log(animalsSearched);

    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Breed</th>
            </tr>
          </thead>
          <tbody>
            {
              animalsSearched.map((el) => {
                return (
                  <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.animal}</td>
                  <td>{el.breed}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
