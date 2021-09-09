// Step 2 - Set up MovieList components with ICE
// Step 3 - Get Films from Ghibli
// Step 4 - Use state to capture response from API GET request.
// Step 5 - Add dependency array to only call useEffect ONCE
// Step 7 - Use MovieCard in MovieList
// Step 9 - Fix key error with each MovieCard

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  /*
  Convention: API requests should be captured in useEffect effect funtion and response
  should be stored in state. This state variable will be set to a default value - often
  times that's [] or "" or false, depending on the data being returned from the API. 
  
  Since JSX is rendered BEFORE the effect fn is called, the default state value will 
  render in the UI before the call to the API. If the call to the API takes awhile,
  then we have a default view already shown and painted to the browser as our data
  takes its time returning to our .then(). Once we update state with the values from
  the API, (A STATE CHANGE) our component rerenders with that value, updating the JSX.
  */
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        // reference setState fn
        console.log(response);
        setFilms(response.data);
      })
      .catch(error => console.log("Error!", error));
  }, []);
  /*
  Dependency Arrays in useEffect:
  [] --> Means that we will only call the effect fn ONCE, directly after the initial render
  [stateVariable, propVariable] --> Include any number of state variables or prop variables in the dependency array. 
                    The effect fn will call after initial render and when one of these variable changes in value.
  empty --> run the effect fn after every rerender of the JSX. 
  */

  return (
    <div className="film">
      {films.map(film => (
        <MovieCard key={film.id} film={film} propTwo={true} propThree={setFilms} />
      ))}
    </div>
  );
};

export default MovieList;
