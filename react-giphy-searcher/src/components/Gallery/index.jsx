import { useState } from 'react'
import Card from '../Card'
import './styles.css'

export default function Gallery({ gifs, refreshQueue, updateDetails }) {
    // Keep track of what gallery page the user is viewing
    const [currentPage, setCurrentPage] = useState(1)

        // Event handler for the next Page Button
        function getNextPage() {
            refreshQueue(`https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50&skip=${gifs.length}`)
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
            .slice(currentPage * 20, nextPage * 20) // get the 20 images of the array we want to see
            .map((gif, i) => <Card key={i} gifData={gif} updateDetails={updateDetails} />) // map over the 20 images and render them in Card components
    } else if (gifs.length > 0 && currentPage === 1) {
        galleryContent = gifs
            .slice(0, 20) // get the first 20 artworks when on the first page
            .map((gif, i) => <Card key={i} gifData={gif} updateDetails={updateDetails} />)
    }

    //  Create the HTML using JSX for the App component
    return (
        <>
          <div className='gallery'>
            {galleryContent}
          </div>
    
          <div className='page-controls'>
            <button onClick={getPrevPage}>Previous Page</button>
            <button onClick={getNextPage}>Next Page</button>
          </div>
        </>
    )
}
