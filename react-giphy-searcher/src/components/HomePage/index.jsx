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
                url={`https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50&offset=${props.gifs.length}`}
            />
        </>
    )
}
