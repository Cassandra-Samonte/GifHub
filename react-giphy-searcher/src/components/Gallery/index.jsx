import { useState } from 'react'
import Card from '../Card'
import './styles.css'

export default function Gallery({ gifs, refreshQueue, url, updateDetails }) {
    // Keep track of what gallery page the user is viewing
    const [currentPage, setCurrentPage] = useState(1)

    // Event handler for the next Page Button
    function getNextPage(event) {
        refreshQueue(url, event.target.innerText)
        setCurrentPage(currentPage + 1)
    }

    // Event handler for the Previous Page button
    function getPrevPage() {
        setCurrentPage(currentPage - 1)
    }

    // The default value of gallery content. What we see before the app finsihes querying the API
    let galleryContent = <p>Your gifs are loading...</p>

    // Conditionally update the gallery content depending on the current page
    if (gifs.length > 0 && currentPage > 1) {
        const nextPage = currentPage + 1
        galleryContent = gifs
            .slice(gifs.length - 50, gifs.length + 50) // get the 50 images of the array we want to see
            .map((gif, i) => <Card key={i} gifData={gif} updateDetails={updateDetails} />) // map over the 50 images and render them in Card components
    } else if (gifs.length > 0 && currentPage === 1) {
        galleryContent = gifs
            .slice(0, 50) // get the first 50 artworks when on the first page
            .map((gif, i) => <Card key={i} gifData={gif} updateDetails={updateDetails} />)
    }

    // Save button class names to a variable
    const btnClasses = 'text-gray-300 hover:text-white hover:bg-gray-800 font-bold p-3 bg-gray-700 rounded cursor-pointer'

    //  Create the HTML using JSX for the App component
    return (
        <>
            <div className="flex flex-wrap justify-around p-10">
                {galleryContent}
            </div>

            <div className='py-16 px-20 flex justify-between'>
                <button className={btnClasses} onClick={getPrevPage}>Previous Page</button>
                <button className={btnClasses} onClick={getNextPage}>Next Page</button>
            </div>
        </>
    )
}
