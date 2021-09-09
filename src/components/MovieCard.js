// Step 6 - Create MovieCard with ICE
// Step 8 - Use passed props in MovieCard to render film data
import React from "react";

const MovieCard = props => {
  // const film = props.film
  console.log(props);
  const { film } = props;
  /* Props --> "Properties of our component"

  There are a couple ways of accessing prop values. All are valid and you'll find different
  examples of these online & in future jobs.
  1. Props as a param (MovieCard = props => {}). Any reference of inner value would be with props.key 
  2. create const with key/value pair in props: const film = props.film
  3. use object destructuring to create const of key/value pair: const { film } = props
  NOTE ^^^ the name of the const needs to be the same name of key in props object
  4. use object destructuring in parameters: MovieCard = ({ film }) => {}
  */

  return (
    <div className="film-list">
      {/* Use dot notation to get key/value from film since it's an object*/}
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <div className="bottom">
        <p>{film.director}</p>
        <p>{film.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
