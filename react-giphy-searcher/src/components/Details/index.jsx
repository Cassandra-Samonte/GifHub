export default function Details({ title, username }) {
    return (
        <div className="border border-white p-4">
            <h1>{title}</h1>
            <h3>{username}</h3>
        </div>
    )
}