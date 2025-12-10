import { StarIcon, MapPinIcon, ClockIcon, PhoneIcon, MailIcon, TagIcon } from "../Icons";

const ServicesProfile = ({ data = {} }) => {
  // Default data structure
  const profile = {
    businessName: data.businessName || "Luxe Beauty Spa",
    tagline: data.tagline || "Where Beauty Meets Relaxation",
    avatar: data.avatar || "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=150&h=150&fit=crop",
    rating: data.rating || 4.8,
    reviews: data.reviews || 245,
    specialOffer: data.specialOffer || "20% OFF First Visit - Use Code: FIRST20",
    services: data.services || [
      { name: "Deep Tissue Massage", price: "$120", duration: "60 min" },
      { name: "Facial Treatment", price: "$95", duration: "45 min" },
      { name: "Manicure & Pedicure", price: "$75", duration: "90 min" },
      { name: "Hair Styling", price: "$85", duration: "60 min" },
      { name: "Body Scrub", price: "$110", duration: "75 min" },
    ],
    hours: data.hours || [
      { day: "Mon - Fri", time: "9:00 AM - 8:00 PM" },
      { day: "Saturday", time: "10:00 AM - 6:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    location: data.location || "123 Wellness Ave, Beverly Hills, CA",
    phone: data.phone || "+1 (555) 987-6543",
    email: data.email || "info@luxebeautyspa.com",
  };

  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-n-7 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Gradient */}
        <div className="relative h-48 bg-gradient-to-br from-pink-500 to-purple-600 p-8 flex flex-col justify-end">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          
          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-n-7 overflow-hidden bg-n-6">
              <img 
                src={profile.avatar} 
                alt={profile.businessName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-8">
          {/* Business Name & Tagline */}
          <div className="text-center mb-6">
            <h1 className="h3 mb-2">{profile.businessName}</h1>
            <p className="body-2 text-n-3 italic">{profile.tagline}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  className="w-5 h-5 text-yellow-500" 
                  filled={i < Math.floor(profile.rating)}
                />
              ))}
            </div>
            <span className="body-1 font-semibold">{profile.rating}</span>
            <span className="body-2 text-n-4">({profile.reviews} reviews)</span>
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/50 rounded-xl p-4 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative flex items-start gap-3">
              <TagIcon className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="h6 text-pink-400 mb-1">Special Offer!</h3>
                <p className="body-2 text-n-2">{profile.specialOffer}</p>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Our Services</h2>
            <div className="space-y-3">
              {profile.services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-n-8 rounded-xl p-4 border border-n-6 hover:border-pink-500 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="body-1 font-semibold text-n-2">{service.name}</h3>
                    <span className="h6 text-pink-500">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-n-4">
                    <ClockIcon className="w-4 h-4" />
                    <span className="caption">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-n-8 rounded-2xl p-6 mb-6 border border-n-6">
            <h2 className="h6 mb-4 text-n-2">Business Hours</h2>
            <div className="space-y-3">
              {profile.hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="body-2 text-n-3">{schedule.day}</span>
                  <span className="body-2 text-n-2 font-semibold">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-n-8 rounded-2xl p-6 mb-6 border border-n-6">
            <h2 className="h6 mb-4 text-n-2">Contact & Location</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-n-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-pink-500" />
                </div>
                <span className="body-2 flex-1">{profile.location}</span>
              </div>

              <a 
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-n-3 hover:text-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-pink-500" />
                </div>
                <span className="body-2">{profile.phone}</span>
              </a>

              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-n-3 hover:text-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <MailIcon className="w-5 h-5 text-pink-500" />
                </div>
                <span className="body-2 flex-1 truncate">{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Book Appointment Button */}
          <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
            <span className="button">Book Appointment</span>
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

export default ServicesProfile;
