import React from 'react'
import './App.css'
import './components/Movie.js'
import Movie from './components/Movie.js'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>LOTR: A Trilogy</h1>
      </header>
      <main>
        <Movie 
        title = { 'The Fellowship of the Ring' }
        hours = { '2' }
        minutes = { '58' }
        poster = { 'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' }
        trailer = { 'https://www.imdb.com/video/vi684573465/?ref_=tt_vi_i_1' }
        description = {'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'}
        />

        <Movie 
        title = { 'The Two Towers' }
        hours = { '2' }
        minutes = { '59' }
        poster = { 'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg' }
        trailer = { 'https://www.imdb.com/video/vi701350681/?ref_=tt_vi_i_1' }
        description = {`While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.`} 
        />

        <Movie 
        title = { 'The Return of The King' }
        hours = { '3' }
        minutes = { '21' }
        poster = { 'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' }
        trailer = { 'https://www.imdb.com/video/vi718127897/?ref_=tt_vi_i_1' }
        description = {`Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`} 
        />
        
      </main>
    </div>
  )
}

export default App
