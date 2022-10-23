import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (deletes) => {
    const newMovies = this.state.movies.filter((m) => m._id !== deletes._id);
    this.setState({ movies: newMovies });
  };

  // handleAdd = () => {
  //   const newMovie = {
  //     _id: "5b21ca3eeb7f6fbccd471815",
  //     title: "Blessing ",
  //     genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Cartoon" },
  //     numberInStock: 16,
  //     dailyRentalRate: 5,
  //     publishDate: "2018-01-03T19:04:28.809Z",
  //   };
  //   let newArr = this.state.movies;
  //   newArr.push(newMovie);
  //   this.setState({ movies: newArr });
  // };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return (
        <p className="badge fs-2 text-dark p-2 my-5 mx-auto w-100">
          There are no movies in the data base
        </p>
      );

    return (
      <React.Fragment>
        <p className="badge fs-2 text-dark p-2 mb-5 mx-auto w-100">
          Showing {count} movies in the database
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => this.handleAdd()}
          className="btn btn-primary btn-sm"
        >
          add our movie
        </button>
      </React.Fragment>
    );
  }
}

export default Movies;
