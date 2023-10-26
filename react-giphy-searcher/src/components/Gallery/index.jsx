import { useState } from 'react'
import Card from '../Card'
import './styles.css'

export default function Gallery({ gifs }) {
    // Keep track of what gallery page the user is viewing
    const [currentPage, setCurrentPage] = useState(1)

    // The default value of gallery content. What we see before the app finsihes querying the API
    let galleryContent = <p>Your gifs are loading...</p>

    // Conditionally update the gallery content after the API returns data
    if (gifs.length > 0) {
        galleryContent = gifs
            .map((gif, i) => <Card key={i} gifData={gif} />)
    }

    //  Create the HTML using JSX for the App component
    return (
        <>
            <div className='gallery'>
                {galleryContent}
            </div>
        </>
    )
}
