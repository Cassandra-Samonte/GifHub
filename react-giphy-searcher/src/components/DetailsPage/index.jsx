export default function DetailsPage({ images, title, username, user }) {
    return (
    <div className="border border-white p-4">
        <img src={images.original.url} alt="Image" />
        <h1>{title}</h1>
        {/* {username && <h3>{username}</h3>}
        {user.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}
        {user.profile_url && <h3><a href={user.profile_url}>View Profile</a></h3>} */}
    </div>
    )
}