import { CameraIcon, MailIcon, PhoneIcon, InstagramIcon, TwitterIcon } from "../Icons";

const PortfolioProfile = ({ data = {} }) => {
  // Default data structure
  const profile = {
    avatar: data.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    name: data.name || "Sarah Mitchell",
    profession: data.profession || "Professional Photographer",
    stats: data.stats || [
      { label: "Projects", value: "500+" },
      { label: "Clients", value: "200+" },
      { label: "Awards", value: "15" },
    ],
    portfolio: data.portfolio || [
      { id: 1, image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop", title: "Wedding Photography" },
      { id: 2, image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop", title: "Portrait Session" },
      { id: 3, image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop", title: "Commercial Shoot" },
      { id: 4, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=300&fit=crop", title: "Fashion Editorial" },
    ],
    social: data.social || {
      instagram: { handle: "@sarahmitchell", followers: "125K" },
      twitter: { handle: "@sarahmphoto", followers: "45K" },
    },
    email: data.email || "hello@sarahmitchell.com",
    phone: data.phone || "+1 (555) 234-5678",
  };

  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-gradient-to-b from-n-7 to-n-8 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Dark Theme */}
        <div className="relative h-48 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 flex flex-col justify-end">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          
          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-n-7 overflow-hidden bg-n-6 ring-4 ring-purple-500/30">
              <img 
                src={profile.avatar} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-8">
          {/* Name & Profession */}
          <div className="text-center mb-8">
            <h1 className="h3 mb-2">{profile.name}</h1>
            <p className="body-1 text-purple-400">{profile.profession}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {profile.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-n-8/50 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-500/20 hover:border-purple-500 transition-colors"
              >
                <div className="h5 text-purple-400 mb-1">{stat.value}</div>
                <div className="caption text-n-4">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="mb-8">
            <h2 className="h6 mb-4 text-n-2">Portfolio</h2>
            <div className="grid grid-cols-2 gap-3">
              {profile.portfolio.map((item) => (
                <div 
                  key={item.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="body-2 text-white font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Follower Counts */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Follow Me</h2>
            <div className="space-y-3">
              <a 
                href={`https://instagram.com/${profile.social.instagram.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 rounded-xl border border-purple-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="body-2 text-n-2 font-semibold">Instagram</p>
                    <p className="caption text-n-4">{profile.social.instagram.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="h6 text-purple-400">{profile.social.instagram.followers}</p>
                  <p className="caption text-n-4">followers</p>
                </div>
              </a>

              <a 
                href={`https://twitter.com/${profile.social.twitter.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl border border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <TwitterIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="body-2 text-n-2 font-semibold">Twitter</p>
                    <p className="caption text-n-4">{profile.social.twitter.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="h6 text-blue-400">{profile.social.twitter.followers}</p>
                  <p className="caption text-n-4">followers</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-n-8/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-purple-500/20">
            <h2 className="h6 mb-4 text-n-2">Contact</h2>
            <div className="space-y-4">
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-n-3 hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <MailIcon className="w-5 h-5 text-purple-400" />
                </div>
                <span className="body-2 flex-1 truncate">{profile.email}</span>
              </a>

              <a 
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-n-3 hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-purple-400" />
                </div>
                <span className="body-2">{profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Book a Session Button */}
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
            <CameraIcon className="w-5 h-5" />
            <span className="button">Book a Session</span>
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

export default PortfolioProfile;
