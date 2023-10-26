import { useState, useEffect } from 'react'
import Gallery from '../Gallery'
import Details from '../Details'
import './styles.css'

function App() {
    // Store API data here
    const [gifs, setGifs] = useState([])
    const [detailsData, setDetailsData] = useState({})

    // Define an async function to JSONify the query response  
    async function getData(url) {
      const res = await fetch(url)
      const { data } = await res.json()
      setGifs(gifs.concat(data))
    }
  
    // Query the API on component mount
    useEffect(() => {
      getData('https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50')
    }, [])

  //  Create the HTML using JSX for the App component
  return (
    <>
      <h1>GifHub</h1>
      <h4>A React Giphy Searcher</h4>
      <Gallery 
        gifs={gifs} 
        refreshQueue={getData}
        updateDetails={setDetailsData}
      />
    
      {/* We can either use a normal ternary or a double ampersand */}
      {detailsData.id && <Details {...detailsData} />}
    </>
  )
}

export default App;
