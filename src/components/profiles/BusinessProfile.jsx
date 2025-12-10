import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GlobeIcon, DownloadIcon } from "../Icons";

const BusinessProfile = ({ data = {} }) => {
  // Default data structure
  const profile = {
    avatar: data.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: data.name || "John Anderson",
    title: data.title || "Senior Product Manager",
    company: data.company || "Tech Innovations Inc.",
    stats: data.stats || [
      { label: "Projects", value: "150+" },
      { label: "Years Exp", value: "12" },
      { label: "Team Size", value: "25" },
    ],
    email: data.email || "john.anderson@techinnovations.com",
    phone: data.phone || "+1 (555) 123-4567",
    location: data.location || "San Francisco, CA",
    about: data.about || "Experienced product manager with a proven track record of delivering innovative solutions. Passionate about building products that make a difference and leading high-performing teams.",
    linkedin: data.linkedin || "linkedin.com/in/johnanderson",
    website: data.website || "johnanderson.com",
  };

  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-n-7 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Gradient */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex flex-col justify-end">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          
          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-n-7 overflow-hidden bg-n-6">
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
          {/* Name & Title */}
          <div className="text-center mb-8">
            <h1 className="h3 mb-2">{profile.name}</h1>
            <p className="body-1 text-color-1 mb-1">{profile.title}</p>
            <p className="body-2 text-n-3">{profile.company}</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {profile.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-n-8 rounded-xl p-4 text-center border border-n-6 hover:border-blue-500 transition-colors"
              >
                <div className="h5 text-blue-500 mb-1">{stat.value}</div>
                <div className="caption text-n-4">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-n-8 rounded-2xl p-6 mb-6 border border-n-6">
            <h2 className="h6 mb-4 text-n-2">Contact Information</h2>
            <div className="space-y-4">
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-n-3 hover:text-blue-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <MailIcon className="w-5 h-5 text-blue-500" />
                </div>
                <span className="body-2 flex-1 truncate">{profile.email}</span>
              </a>

              <a 
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-n-3 hover:text-blue-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-blue-500" />
                </div>
                <span className="body-2">{profile.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-n-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-blue-500" />
                </div>
                <span className="body-2">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h2 className="h6 mb-3 text-n-2">About</h2>
            <p className="body-2 text-n-3 leading-relaxed">{profile.about}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mb-6">
            <a 
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#0077B5] hover:bg-[#006399] rounded-xl transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="button text-white">LinkedIn</span>
            </a>

            <a 
              href={`https://${profile.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-n-6 hover:bg-n-5 rounded-xl transition-colors"
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="button">Website</span>
            </a>
          </div>

          {/* Save Contact Button */}
          <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
            <DownloadIcon className="w-5 h-5" />
            <span className="button">Save Contact</span>
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

export default BusinessProfile;
