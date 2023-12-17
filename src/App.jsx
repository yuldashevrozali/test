import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/cars")
      .then(res => res.json())
      .then(json => setData(json))
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]) 
  return (
    <>
      <h1>fuck</h1>
    </>
  )
}

export default App
