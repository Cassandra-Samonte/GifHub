import { Link } from 'react-router-dom'

export default function Card({ gifData, updateDetails }) {
    return (
        <Link
            to={"/details"}
            onClick={() => { updateDetails(gifData) }}
        >
            <figure className="text-center m-2 border-2 border-black rounded-lg cursor-pointer bg-gray-700 bg-opacity-70 text-gray-300 hover:text-white hover:bg-gray-800 hover:transform hover:scale-105 shadow-lg transition ease duration-50">
                <img className="w-full object-cover rounded" src={gifData.images.original.url} />
                <figcaption>
                    <h2 className="font-bold">{gifData.title}</h2>
                    <h3 className="capitalize">{gifData.username}</h3>
                </figcaption>
            </figure>
        </Link>
    )
}