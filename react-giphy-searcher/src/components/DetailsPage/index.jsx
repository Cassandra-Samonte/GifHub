import './styles.css';

export default function DetailsPage({ images, title, username, user }) {
  return (
    <div id="details" className="fullscreen-bg">
      <img src={images.original.url} alt="Image" className="bg-gif"/>

      {/* Overlay content */}
      <div className="overlay">
        <h4 className="title">{title}</h4>
        {username && <h3 className="username">{username}</h3>}
        {user?.avatar_url && (
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
        )}
        {user?.profile_url && (
          <p className="profile-link">
            <a href={user.profile_url} className="link">
              View Profile
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
