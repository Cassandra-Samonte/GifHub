import { Link } from 'react-router-dom';

export default function Card({ gifData, updateDetails }) {
    return (
        <Link
            to="/details"
            onClick={() => {
                updateDetails(gifData);
            }}
            className="w-1/4 p-2" 
        >
            <figure className="cursor-pointer bg-gray-700 bg-opacity-70 text-gray-300 hover:text-white hover:bg-gray-800 hover:transform hover:scale-105 shadow-lg transition ease duration-50">
                <img className="w-full h-56 object-cover" src={gifData.images.original.url} alt={gifData.title} /> 
                {/* <figcaption className="p-2">
                    <h2 className="font-bold text-center">{gifData.title}</h2>
                    <h3 className="capitalize text-center">{gifData.username}</h3>
                </figcaption> */}
            </figure>
        </Link>
    );
}