import Gallery from '../Gallery'
// import SearchPage from "../SearchPage"

export default function HomePage(props) {
    return (
        <>
            <h1>GifHub
            <br></br>A React Giphy Searcher</h1>
            {/* <SearchPage
            /> */}
            <Gallery 
                gifs={props.gifs} 
                refreshQueue={props.getData}
                updateDetails={props.setDetailsData}
                url={`https://api.giphy.com/v1/gifs/trending/?api_key=xOtkJChTF94Y0SM4YPxhydzB9QSQevGM&limit=50&offset=${props.gifs.length}`}
            />
        </>
    )
}
