import React from 'react';

const Movie = (props) => {
    console.log(props)
  return (
    <div className='moviewrapper'>
      <h1 className='movietitle'>Lord of the Rings: <br/> { props.title } </h1>
      <p className='runtime'>Runtime: {props.hours} h { props.minutes } min </p>
      <img src={ props.poster }/>
      <a className='trailer' href= { props.trailer }>IMDB Trailer</a>
      <p className='summary'>Summary: { props.description } </p>
    </div>
  )
};

export default Movie;