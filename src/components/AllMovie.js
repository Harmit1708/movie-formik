import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const url = "https://61efd16c732d93001778e5fa.mockapi.io/Movies/";

function AllMovie() {
  let [movie, setMovie] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let response = await axios.get(url);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table className="Allstu" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Movie Name</th>
            <th>Producer Name</th>
            <th>IMDB Ratings</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {movie.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.moviename}</td>
                <td>{e.producername}</td>
                <td>{e.imdbrating}</td>
                <td>{e.review}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default AllMovie;
