import React from "react";

class Table extends React.Component {
  state = {
      allPets: []
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
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Tyoe</th>
              <th scope="col">Breed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
