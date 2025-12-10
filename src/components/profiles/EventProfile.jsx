import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon, TicketIcon, MailIcon } from "../Icons";

const EventProfile = ({ data = {} }) => {
  // Default data structure
  const profile = {
    eventLogo: data.eventLogo || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=150&h=150&fit=crop",
    eventName: data.eventName || "TechSummit 2024",
    date: data.date || "June 15-17, 2024",
    tagline: data.tagline || "Shaping the Future of Technology",
    stats: data.stats || [
      { label: "Attendees", value: "5000+", icon: UsersIcon },
      { label: "Speakers", value: "50+", icon: UsersIcon },
      { label: "Days", value: "3", icon: CalendarIcon },
    ],
    pricing: data.pricing || [
      { type: "Early Bird", price: "$299", badge: "Save 40%", available: true },
      { type: "Regular", price: "$499", badge: "Standard", available: true },
    ],
    schedule: data.schedule || [
      { time: "09:00 AM", title: "Registration & Welcome Coffee", type: "General" },
      { time: "10:00 AM", title: "Keynote: AI Revolution", type: "Main Stage" },
      { time: "12:00 PM", title: "Networking Lunch", type: "General" },
      { time: "02:00 PM", title: "Workshop: Cloud Architecture", type: "Workshop" },
    ],
    venue: data.venue || "San Francisco Convention Center",
    location: data.location || "747 Howard St, San Francisco, CA 94103",
    organizer: data.organizer || "TechEvents Inc.",
    email: data.email || "info@techsummit2024.com",
  };

  return (
    <div className="min-h-screen bg-n-8 flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-n-7 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Gradient */}
        <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 flex flex-col justify-end">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          
          {/* Event Logo */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-2xl border-4 border-n-7 overflow-hidden bg-white shadow-xl">
              <img 
                src={profile.eventLogo} 
                alt={profile.eventName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 px-6 pb-8">
          {/* Event Name & Date */}
          <div className="text-center mb-6">
            <h1 className="h3 mb-2">{profile.eventName}</h1>
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
              <CalendarIcon className="w-5 h-5" />
              <p className="body-1 font-semibold">{profile.date}</p>
            </div>
            <p className="body-2 text-n-3 italic">{profile.tagline}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {profile.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-n-8 rounded-xl p-4 text-center border border-n-6 hover:border-cyan-500 transition-colors"
                >
                  <IconComponent className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                  <div className="h5 text-cyan-400 mb-1">{stat.value}</div>
                  <div className="caption text-n-4">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Ticket Pricing</h2>
            <div className="grid grid-cols-2 gap-3">
              {profile.pricing.map((ticket, index) => (
                <div 
                  key={index}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    ticket.available 
                      ? 'border-cyan-500 bg-cyan-500/5 hover:bg-cyan-500/10' 
                      : 'border-n-6 bg-n-8 opacity-50'
                  }`}
                >
                  {ticket.badge && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                      <span className="caption text-white font-bold">{ticket.badge}</span>
                    </div>
                  )}
                  <p className="body-2 text-n-3 mb-2">{ticket.type}</p>
                  <p className="h4 text-cyan-400">{ticket.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Preview */}
          <div className="mb-6">
            <h2 className="h6 mb-4 text-n-2">Schedule Preview</h2>
            <div className="bg-n-8 rounded-2xl p-4 border border-n-6">
              <div className="space-y-4">
                {profile.schedule.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-20">
                      <div className="flex items-center gap-1 text-cyan-400">
                        <ClockIcon className="w-4 h-4" />
                        <span className="caption font-semibold">{item.time}</span>
                      </div>
                    </div>
                    <div className="flex-1 border-l-2 border-cyan-500/30 pl-4">
                      <p className="body-2 text-n-2 font-semibold mb-1">{item.title}</p>
                      <span className="caption text-n-4 bg-n-7 px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-n-6 text-center">
                <a href="#" className="body-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Full Schedule →
                </a>
              </div>
            </div>
          </div>

          {/* Venue & Organizer */}
          <div className="bg-n-8 rounded-2xl p-6 mb-6 border border-n-6">
            <h2 className="h6 mb-4 text-n-2">Venue & Contact</h2>
            <div className="space-y-4">
              <div>
                <p className="caption text-n-4 mb-1">Venue</p>
                <p className="body-2 text-n-2 font-semibold mb-2">{profile.venue}</p>
                <div className="flex items-start gap-2 text-n-3">
                  <MapPinIcon className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="body-2">{profile.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-n-6">
                <p className="caption text-n-4 mb-1">Organized by</p>
                <p className="body-2 text-n-2 font-semibold mb-2">{profile.organizer}</p>
                <a 
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-n-3 hover:text-cyan-400 transition-colors"
                >
                  <MailIcon className="w-4 h-4 text-cyan-500" />
                  <span className="body-2">{profile.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <TicketIcon className="w-5 h-5 relative z-10" />
            <span className="button relative z-10">Register Now</span>
          </button>

          {/* Add to Calendar */}
          <button className="w-full mt-3 py-3 bg-n-8 hover:bg-n-6 border border-n-6 hover:border-cyan-500 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            <CalendarIcon className="w-5 h-5 text-cyan-500" />
            <span className="button text-n-3">Add to Calendar</span>
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

export default EventProfile;
