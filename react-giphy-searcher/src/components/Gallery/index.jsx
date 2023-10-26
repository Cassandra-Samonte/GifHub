import { useState } from 'react'
import Card from '../Card'
import './styles.css'

export default function Gallery({ gifs }) {
    // return (
    //     <div className="gallery">
    //         {gifs.length > 0 ? <img src={gifs[1].images.original.url} /> : <p>Your gif is loading...</p>}
    //     </div>
    // )

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
