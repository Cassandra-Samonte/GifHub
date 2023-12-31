import { Link } from 'react-router-dom';

export default function Card({ gifData, updateDetails }) {
    return (
        <Link
            to="/details"
            onClick={() => {
                updateDetails(gifData);
            }}
            // className="w-1/4 p-2" 
        >
            <figure className="cursor-pointer hover:text-white hover:transform hover:scale-105 shadow-lg transition ease duration-50">
            <img className="w-56 h-40 ml-1 mt-1 object-cover" src={gifData.images.original.url} alt={gifData.title} />
            </figure>
        </Link>
    );
}