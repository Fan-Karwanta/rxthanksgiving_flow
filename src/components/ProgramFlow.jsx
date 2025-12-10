import grooveLogo from "../assets/groove-logo.png";

const programData = [
  {
    time: "5:00 PM – 6:00 PM",
    title: "Registration & Assembly",
    details: "Prelude Instrumental (80's–90's Retro Playlist)",
    icon: "🎵",
    type: "spinner"
  },
  {
    time: "6:00 – 6:15 PM",
    title: "Opening Voice-Over by the Host",
    details: "",
    icon: "🎤",
    type: "main"
  },
  {
    time: "6:15 – 6:20 PM",
    title: "Ecumenical Prayer",
    details: "Host Spiel",
    icon: "🙏",
    type: "main"
  },
  {
    time: "6:20 – 6:25 PM",
    title: "Showtime-Inspired Light Presentation",
    details: "by The Barn (Host Spiel)",
    icon: "💡",
    type: "main"
  },
  {
    time: "6:25 – 6:35 PM",
    title: "Welcome Address & Grand Entrance",
    details: "Grand Mentors and Core Leaders • Introduction of Creative & FB Ads Manager Coach Jeron Soriano • RX Anthem: Panibagong Umaga — Maximo Band",
    icon: "👋",
    type: "highlight"
  },
  {
    time: "6:35 – 6:40 PM",
    title: "Team Dance Competition Introduction",
    details: "Host Spiel",
    icon: "💃",
    type: "main"
  },
  {
    time: "6:40 – 6:45 PM",
    title: "Dance: Tacurong",
    details: "",
    icon: "1️⃣",
    type: "dance"
  },
  {
    time: "6:45 – 6:50 PM",
    title: "Dance: B.E. Dancers",
    details: "",
    icon: "2️⃣",
    type: "dance"
  },
  {
    time: "6:50 – 6:55 PM",
    title: "Dance: Sneaker Riders",
    details: "",
    icon: "3️⃣",
    type: "dance"
  },
  {
    time: "6:55 – 7:00 PM",
    title: "Dance: The Golden Steps Revolution",
    details: "",
    icon: "4️⃣",
    type: "dance"
  },
  {
    time: "7:00 – 7:05 PM",
    title: "Dance: The Vintage Vibes",
    details: "",
    icon: "5️⃣",
    type: "dance"
  },
  {
    time: "7:05 – 8:00 PM",
    title: "Dinner Service",
    details: "Presentation of Best Retro Queen & Best Retro (7:40 PM)",
    icon: "🍽️",
    type: "break"
  },
  {
    time: "8:00 – 8:30 PM",
    title: "Dr. Ronaldo Unidad – Medical Director",
    details: "R&D and Co-Founder Ryan • Kickstart Segment — Switch On! • R&D and Co-Founder Ryan Jubahib",
    icon: "⚡",
    type: "highlight"
  },
  {
    time: "8:30 – 9:30 PM",
    title: "Digos Good Vibes",
    details: "Two Live Sets (Host Spiel)",
    icon: "🎸",
    type: "performance"
  },
  {
    time: "9:30 – 9:45 PM",
    title: "Gift Giving & Contest Winners",
    details: "Announcement of Contest Winners (Host Spiel)",
    icon: "🎁",
    type: "main"
  },
  {
    time: "9:45 – 9:50 PM",
    title: "Closing Message",
    details: "Host & Thanksgiving Toast (Host Spiel)",
    icon: "🥂",
    type: "main"
  },
  {
    time: "9:50 – 9:55 PM",
    title: "Grand Mentors' Special Performance",
    details: "Maximo Band (Host Spiel)",
    icon: "🌟",
    type: "performance"
  },
  {
    time: "9:55 – 10:00 PM",
    title: "Execom Special Performance",
    details: "Maximo Band (Host Spiel)",
    icon: "✨",
    type: "performance"
  },
  {
    time: "10:00 PM – 12:00 AM",
    title: "Maximo Band — Retro Party Finale",
    details: "Two Live Sets (Host Spiel)",
    icon: "🎉",
    type: "finale"
  }
];

const getTypeStyles = (type) => {
  switch (type) {
    case "spinner":
      return "bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-purple-500";
    case "highlight":
      return "bg-gradient-to-r from-orange-600/30 to-yellow-600/30 border-orange-500";
    case "dance":
      return "bg-gradient-to-r from-pink-600/30 to-red-600/30 border-pink-500";
    case "break":
      return "bg-gradient-to-r from-teal-600/30 to-cyan-600/30 border-teal-500";
    case "performance":
      return "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border-indigo-500";
    case "finale":
      return "bg-gradient-to-r from-yellow-500/40 to-orange-500/40 border-yellow-400 animate-pulse-slow";
    default:
      return "bg-gradient-to-r from-gray-700/30 to-gray-600/30 border-gray-500";
  }
};

const ProgramFlow = () => {
  return (
    <div className="min-h-screen bg-retro-dark relative overflow-hidden">
      {/* Retro Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ff6b35 1px, transparent 1px), linear-gradient(to bottom, #ff6b35 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Retro Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <img 
              src={grooveLogo} 
              alt="Groove Back in Time - RX Thanksgiving Retro Party" 
              className="mx-auto max-w-full h-auto max-h-[300px] md:max-h-[400px] drop-shadow-2xl"
            />
          </div>
          
          {/* Event Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-lg retro-text-shadow">
              RX THANKSGIVING
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              RETRO PARTY
            </span>
          </h2>
          
          {/* Subtitle */}
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600/30 to-yellow-600/30 rounded-full border border-orange-500/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-orange-200 text-lg md:text-xl font-medium tracking-wide">
              ✨ PROGRAM FLOW ✨
            </p>
          </div>
        </header>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2 rounded-full"></div>

          {/* Program Items */}
          <div className="space-y-6">
            {programData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-4 md:gap-8 animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full transform -translate-x-1/2 border-4 border-retro-dark z-10 shadow-lg shadow-orange-500/50"></div>

                {/* Content Card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className={`p-4 md:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/20 ${getTypeStyles(item.type)}`}>
                    {/* Time Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full mb-3 ${index % 2 === 0 ? 'md:float-right md:ml-3' : 'md:float-left md:mr-3'}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-orange-300 font-mono text-sm font-bold">{item.time}</span>
                    </div>
                    
                    <div className="clear-both">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      
                      {/* Details */}
                      {item.details && (
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600/20 to-pink-600/20 rounded-2xl border border-orange-500/30 backdrop-blur-sm">
            <p className="text-orange-200 text-lg font-medium mb-2">
              🎶 Let's Groove Back in Time! 🎶
            </p>
            <p className="text-gray-400 text-sm mb-3">
              RX Thanksgiving Retro Party Program Flow
            </p>
            <p className="text-gray-500 text-xs">
              Developed by{" "}
              <a 
                href="https://www.facebook.com/fankarwanta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors underline"
              >
                Fan Karwanta
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProgramFlow;
