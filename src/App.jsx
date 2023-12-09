import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalCard from './components/Card'
import './components/Card.css'

function App() {
  const [animals, setAnimals] = useState([])

  const search = async (q) => {
    const response = await fetch('http://localhost:8080?' + new URLSearchParams({ q }));
    const data = await response.json();
    setAnimals(data);
    if(q === '') setAnimals([]);
  };

  return (
      <main>
        <h1>
          Welcome to my Farm
        </h1>
        
        <input type="text" placeholder="Search a animal" onChange={(e) => search(e.target.value)}/>
        <ul>
          {
            animals.map((animal) => (
              <AnimalCard animal={animal} />
            ))
          }
          {animals.length === 0 && <div class="card-container"><li>No animals found</li></div>}
        </ul>      
      </main>
  )
}


export default App
