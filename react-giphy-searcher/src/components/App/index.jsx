import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
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
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h2 className="text-white font-bold text-2xl">GifHub</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={
                <HomePage
                    gifs={gifs}
                    getData={getData}
                    setDetailsData={setDetailsData}
                />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/details" element={<DetailsPage {...detailsData} />} />
        </Routes>
    </>
)
}


export default App;
