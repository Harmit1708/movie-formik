import "./App.css";
import Sidebar from "./components/Sidebar";
import AllMovies from "./components/AllMovie";
import AddMovies from "./components/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const MovieContext = React.createContext();

function App() {

  let [movie, setMovie] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <MovieContext.Provider value={{ movie, setMovie }}>
              <Routes>
                <Route path="/all-movielist" element={<AllMovies />} />
                <Route path="/add-moviedetails" element={<AddMovies />} />
                <Route path="/" element={<AllMovies />} />
              </Routes>
            </MovieContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
