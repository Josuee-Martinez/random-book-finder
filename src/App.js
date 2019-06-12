import React, { useState } from 'react';
import './App.css';


function App() {
  const [ author, setAuthor ] = useState(undefined);
  const [ name, setName ] = useState(undefined);
  const [ year, setYear ] = useState(undefined);

  const [ search, setSearch ] = useState(undefined);

  const handleChange = (e) => {
    setSearch(e.target.value)
  } 

  function getData(e) {
    fetch(`https://openlibrary.org/search.json?author=${search}`)
    .then((response) => {
      return response.json()
    }).then((data) => {
      const book = data.docs[Math.floor(Math.random() * data.docs.length)];
      setAuthor(book.author_alternative_name[0])
      setName(book.title)
      setYear(book.first_publish_year)
    })
    e.preventDefault();
  }
  
  return (
    <div className="container">
      <h1 className="heading">Find a random book by a searched author</h1>
      <form onSubmit={getData}>
        <input className="input" onChange={handleChange} required placeholder="enter author"/>
        <br/>
        <button className="btn" type="submit">Find Book!</button>
      </form>
      <div className="box">
        <h1>{author}</h1>
        <h3>{name}</h3>
        <h3>{year}</h3>
      </div>
    </div>
  );
}

export default App;
