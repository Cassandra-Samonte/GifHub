export default function Card({ gifData, updateDetails }) {
    return (
        <figure onClick={() => updateDetails(gifData) }>
            <img src={gifData.images.original.url} />
            <figcaption>
                <h2>{gifData.title}</h2>
                <h3>{gifData.username}</h3>
            </figcaption>
        </figure>
    )
}