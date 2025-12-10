import { InstagramIcon, TikTokIcon, TwitterIcon, YouTubeIcon, CheckIcon } from "../Icons";

const SocialProfile = ({ data = {} }) => {
  // Default data structure
  const profile = {
    avatar: data.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    name: data.name || "Alex Rivera",
    handle: data.handle || "@alexrivera",
    verified: data.verified !== false,
    bio: data.bio || "Content Creator | Lifestyle & Travel | Spreading positivity ✨",
    stats: data.stats || [
      { label: "Posts", value: "1.2K" },
      { label: "Followers", value: "850K" },
      { label: "Following", value: "432" },
    ],
    platforms: data.platforms || [
      { 
        name: "Instagram", 
        icon: InstagramIcon, 
        handle: "@alexrivera", 
        followers: "450K",
        color: "from-purple-500 to-pink-500",
        url: "https://instagram.com/alexrivera"
      },
      { 
        name: "TikTok", 
        icon: TikTokIcon, 
        handle: "@alexrivera", 
        followers: "320K",
        color: "from-black to-gray-800",
        url: "https://tiktok.com/@alexrivera"
      },
      { 
        name: "Twitter", 
        icon: TwitterIcon, 
        handle: "@alexrivera", 
        followers: "125K",
        color: "from-blue-400 to-blue-600",
        url: "https://twitter.com/alexrivera"
      },
      { 
        name: "YouTube", 
        icon: YouTubeIcon, 
        handle: "Alex Rivera", 
        followers: "280K",
        color: "from-red-500 to-red-700",
        url: "https://youtube.com/@alexrivera"
      },
    ],
    recentPosts: data.recentPosts || [
      { id: 1, image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop", likes: "45K" },
      { id: 2, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=400&fit=crop", likes: "38K" },
      { id: 3, image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop", likes: "52K" },
    ],
  };

  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-n-7 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Colorful Gradient */}
        <div className="relative h-48 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-8 flex flex-col justify-end">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-pink-500/20 to-purple-600/20 animate-pulse"></div>
          </div>
          
          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-n-7 overflow-hidden bg-n-6 ring-4 ring-pink-500/50">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {profile.verified && (
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-n-7">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-8">
          {/* Name & Handle */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="h3">{profile.name}</h1>
              {profile.verified && (
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <p className="body-2 text-n-4">{profile.handle}</p>
          </div>

          {/* Bio */}
          <p className="body-2 text-n-3 text-center mb-6">{profile.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {profile.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="h5 text-n-1 mb-1">{stat.value}</div>
                <div className="caption text-n-4">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Platform Links */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Connect With Me</h2>
            <div className="space-y-3">
              {profile.platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <a 
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className={`relative p-4 bg-gradient-to-r ${platform.color} rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="body-1 font-semibold text-white">{platform.name}</p>
                            <p className="caption text-white/80">{platform.handle}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="h6 text-white">{platform.followers}</p>
                          <p className="caption text-white/80">followers</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Recent Posts</h2>
            <div className="grid grid-cols-3 gap-2">
              {profile.recentPosts.map((post) => (
                <div 
                  key={post.id}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={post.image} 
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="body-2 font-semibold">❤️ {post.likes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow All Button */}
          <button className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="button relative z-10">Follow on All Platforms</span>
          </button>

          {/* Powered by NexTap */}
          <div className="mt-8 text-center">
            <p className="caption text-n-4">Powered by NexTap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProfile;
