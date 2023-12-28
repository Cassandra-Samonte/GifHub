import { useState } from "react"
import Gallery from "../Gallery"

export default function SearchPage(props) {
    // Store search term and API data here
    const [query, setQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])

    // Define an async function to query the API & JSONify the response
    async function getData(url, buttonName) {
        const res = await fetch(url)
        const { data } = await res.json() // destructure the JSON response
        // Determine if a new search is being made, if so, clear the previous data
        if (buttonName === 'Next Page') {
            setQueryResults([...queryResults, ...data])
        } else {
            setQueryResults(data)
        }
    }

    function handleQuerySubmit(event) {
        // prevent the page reloading
        event.preventDefault()
        // send a request to the API with the query string 
        getData(`https://api.giphy.com/v1/gifs/search/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50&q=${query}`, event.target.innerText)
    }

    return (
        <div className="search-page p-10">
            <form onSubmit={handleQuerySubmit} className="mt-4 text-center">
                <label htmlFor="search" className="block font-medium mb-1">
                    <h2 className="text-3xl font-bold">Search for Gifs</h2>
                </label>
                <br />
                <input
                    className="p-2 w-[60vw] rounded border border-gray-300 focus:outline-none focus:border-gray-500"
                    name="search"
                    placeholder="search for gifs..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button
                    type="submit"
                    className="mx-1 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 bg-gray-700 rounded transition-all duration-200"
                >
                    Search
                </button>
            </form>

            {/* Display the search query */}
            <div className="text-center mt-4">
                <p className="text-lg font-medium">Search Results for: {query}</p>
            </div>

            <Gallery
                gifs={queryResults}
                refreshQueue={getData}
                url={`https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50&offset=${queryResults.length}`}
                updateDetails={props.setDetailsData}
            />
        </div>
    )
}
