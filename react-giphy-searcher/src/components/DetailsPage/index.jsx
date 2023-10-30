export default function DetailsPage({ images, title, username, user }) {
    return (
        <div className="border border-white p-4 pt-16">
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 flex flex-col items-center">
                    <img src={images.original.url} alt="Image" />
        
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl font-bold mb-2 text-center">{title}</h1>
                        {username && <h3 className="text-lg mb-2 text-center">{username}</h3>}
                        {user?.avatar_url && (
                        <img
                            src={user.avatar_url}
                            alt="User Avatar"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        )}
                        {user?.profile_url && (
                        <p className="mt-2 text-center">
                            <a href={user.profile_url} className="text-blue-500 hover:underline">
                            View Profile
                            </a>
                        </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  }
