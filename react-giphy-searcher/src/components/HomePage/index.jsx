import Gallery from '../Gallery'

export default function HomePage(props) {
    return (
        <>
            <h1>GifHub</h1>
            <h4>A React Giphy Searcher</h4>
            <Gallery 
                gifs={props.gifs} 
                refreshQueue={props.getData}
                updateDetails={props.setDetailsData}
            />
        </>
    )
}
