export default function Card({ gifData }) {
    return (
        <figure>
            <img src={gifData.images.original.url} />
            <figcaption>
                <h4>{gifData.title}</h4>
                {/* Use ternary here in the event username does not exist */}
                {/* <h4>{gifData.username}</h4> */}
            </figcaption>
        </figure>
    )
}
