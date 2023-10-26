import { useState, useEffect } from 'react'
import './styles.css'

function App() {
    // Store API data here
    const [gifs, setGifs] = useState([])

  // Query the API on component mount
  useEffect(() => {

    // Define an async function to JSONify the query response  
    async function getData() {
      const res = await fetch('https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50')
      const { data } = await res.json()
      setGifs(data)
    }

    // Call the async function
    getData()
  }, [])

  //  Create the HTML using JSX for the App component
  return (
    <div>
      <h1>GifHub</h1>
      <h4>A React Giphy Searcher</h4>
      <p>You have {gifs.length} gifs</p>
    </div>
  );
}

export default App;
