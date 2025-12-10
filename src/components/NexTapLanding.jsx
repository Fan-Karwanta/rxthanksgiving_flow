import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";
import { ZapIcon, LayersIcon, RefreshIcon, BriefcaseIcon, ShoppingBagIcon, CameraIcon, UsersIcon, CalendarIcon, QrCodeIcon } from "./Icons";

const NexTapLanding = () => {
  const [activeMode, setActiveMode] = useState(0);

  const profileModes = [
    {
      icon: <BriefcaseIcon className="w-10 h-10" />,
      name: "Business Mode",
      useCase: "Professional networking",
      color: "from-blue-500 to-blue-700",
      route: "/profile/business",
      description: "Perfect for corporate professionals, executives, and sales teams",
    },
    {
      icon: <ShoppingBagIcon className="w-10 h-10" />,
      name: "Services Mode",
      useCase: "Service providers",
      color: "from-pink-500 to-purple-600",
      route: "/profile/services",
      description: "Ideal for freelancers, consultants, and service-based businesses",
    },
    {
      icon: <CameraIcon className="w-10 h-10" />,
      name: "Portfolio Mode",
      useCase: "Creatives & artists",
      color: "from-purple-600 to-indigo-700",
      route: "/profile/portfolio",
      description: "Showcase your work beautifully for photographers, designers, and artists",
    },
    {
      icon: <UsersIcon className="w-10 h-10" />,
      name: "Social Mode",
      useCase: "Content creators",
      color: "from-orange-500 to-pink-600",
      route: "/profile/social",
      description: "Connect all your social platforms for influencers and creators",
    },
    {
      icon: <CalendarIcon className="w-10 h-10" />,
      name: "Event Mode",
      useCase: "Event organizers",
      color: "from-cyan-500 to-blue-600",
      route: "/profile/event",
      description: "Share event details, schedules, and RSVP links instantly",
    },
  ];

  const features = [
    {
      icon: <ZapIcon className="w-12 h-12 text-color-1" />,
      title: "Instant Sharing",
      description: "Tap to share your profile instantly with anyone, anywhere. No apps required.",
    },
    {
      icon: <LayersIcon className="w-12 h-12 text-color-5" />,
      title: "Multiple Modes",
      description: "5 profile types for any situation - business, social, portfolio, and more.",
    },
    {
      icon: <RefreshIcon className="w-12 h-12 text-color-4" />,
      title: "Real-time Updates",
      description: "Edit anytime, changes go live instantly. Your profile is always up to date.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Choose from 5 professional templates and customize with your information.",
    },
    {
      number: "02",
      title: "Write to NFC or QR",
      description: "Program your NFC tag or generate a QR code in seconds.",
    },
    {
      number: "03",
      title: "Share with a Tap",
      description: "Simply tap or scan to share your digital identity instantly.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            {/* Headline */}
            <h1 className="h1 mb-6">
              Your Digital Identity,{" "}
              <span className="inline-block relative">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  One Tap Away
                </span>
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              NFC-powered business cards that work everywhere. Share your profile instantly with a simple tap.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/signup" white className="w-full sm:w-auto">
                Get Started Free
              </Button>
              <Button href="/profiles" className="w-full sm:w-auto">
                See Demo
              </Button>
            </div>
          </div>

          {/* Hero Animation/Image */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-3xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="relative bg-n-8 rounded-[1rem] p-8 md:p-12">
                {/* NFC Tap Animation */}
                <div className="relative aspect-square max-w-[300px] mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Phone mockup */}
                    <div className="relative w-48 h-80 bg-gradient-to-br from-n-7 to-n-8 rounded-[2rem] border-4 border-n-6 shadow-2xl">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-n-8 rounded-b-2xl"></div>
                      <div className="p-4 pt-8 h-full flex flex-col items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                          <QrCodeIcon className="w-20 h-20 text-color-1" />
                        </div>
                      </div>
                    </div>
                    
                    {/* NFC Card */}
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-color-1 to-color-5 rounded-xl shadow-xl transform rotate-12 flex items-center justify-center animate-pulse">
                      <span className="text-white font-bold text-sm">NFC</span>
                    </div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-2 border-color-1/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                <p className="text-center mt-8 text-n-3 body-2">
                  Tap your NFC card to instantly share your profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-20" id="features">
        <div className="container">
          <h2 className="h2 text-center mb-16">Why Choose NexTap?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 bg-n-7 rounded-2xl border border-n-6 hover:border-color-1 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="h5 mb-4">{feature.title}</h3>
                <p className="body-2 text-n-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="py-20 bg-n-8" id="how-it-works">
        <div className="container">
          <h2 className="h2 text-center mb-16">How It Works</h2>
          
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>

                {/* Step Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="h4 mb-3">{step.title}</h3>
                  <p className="body-1 text-n-3">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-purple-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Profile Modes Preview */}
      <Section className="py-20" id="modes">
        <div className="container">
          <h2 className="h2 text-center mb-4">Choose Your Mode</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            Five powerful profile types designed for every use case
          </p>

          {/* Grid Layout - 3 on top, 2 on bottom centered */}
          <div className="max-w-6xl mx-auto">
            {/* First Row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {profileModes.slice(0, 3).map((mode, index) => (
                <div
                  key={index}
                  className="group"
                  onMouseEnter={() => setActiveMode(index)}
                >
                  <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${mode.color} transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl cursor-pointer`}>
                    <div className="flex flex-col items-center text-center text-white h-full">
                      <div className="mb-5 p-5 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {mode.icon}
                      </div>
                      <h3 className="h4 mb-2">{mode.name}</h3>
                      <p className="body-2 opacity-90 mb-2">Best for {mode.useCase}</p>
                      <p className="text-sm opacity-75 mb-6 flex-grow">{mode.description}</p>
                      
                      <Link 
                        to={mode.route}
                        className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold text-center"
                      >
                        View Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row - 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {profileModes.slice(3, 5).map((mode, index) => (
                <div
                  key={index + 3}
                  className="group"
                  onMouseEnter={() => setActiveMode(index + 3)}
                >
                  <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${mode.color} transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl cursor-pointer`}>
                    <div className="flex flex-col items-center text-center text-white h-full">
                      <div className="mb-5 p-5 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {mode.icon}
                      </div>
                      <h3 className="h4 mb-2">{mode.name}</h3>
                      <p className="body-2 opacity-90 mb-2">Best for {mode.useCase}</p>
                      <p className="text-sm opacity-75 mb-6 flex-grow">{mode.description}</p>
                      
                      <Link 
                        to={mode.route}
                        className="w-full px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 font-semibold text-center"
                      >
                        View Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mode Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {profileModes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeMode ? "bg-color-1 w-8" : "bg-n-6"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Go Digital?</h2>
            <p className="body-1 text-n-3 mb-8">
              Join thousands of professionals who've made the switch to NexTap
            </p>
            <Button href="/signup" white>
              Get Started Free
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-n-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="h5 mb-4">NexTap</h3>
              <p className="body-2 text-n-3 max-w-sm">
                Your digital identity, one tap away. NFC-powered business cards for the modern professional.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="h6 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="body-2 text-n-3 hover:text-color-1 transition-colors">Home</Link></li>
                <li><Link to="/pricing" className="body-2 text-n-3 hover:text-color-1 transition-colors">Pricing</Link></li>
                <li><Link to="/profiles" className="body-2 text-n-3 hover:text-color-1 transition-colors">Profile Modes</Link></li>
                <li><Link to="/how-to-use" className="body-2 text-n-3 hover:text-color-1 transition-colors">How to Use</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="h6 mb-4">Account</h4>
              <ul className="space-y-2">
                <li><Link to="/signup" className="body-2 text-n-3 hover:text-color-1 transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="body-2 text-n-3 hover:text-color-1 transition-colors">Login</Link></li>
                <li><a href="#" className="body-2 text-n-3 hover:text-color-1 transition-colors">Support</a></li>
                <li><a href="#" className="body-2 text-n-3 hover:text-color-1 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-n-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-2 text-n-4">© 2024 NexTap. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-n-4 hover:text-color-1 transition-colors">Privacy</a>
              <a href="#" className="text-n-4 hover:text-color-1 transition-colors">Terms</a>
              <a href="#" className="text-n-4 hover:text-color-1 transition-colors">Cookies</a>
            </div>
          </div>

          {/* Powered by NexTap */}
          <div className="mt-8 text-center">
            <p className="caption text-n-4">Powered by NexTap</p>
          </div>
        </div>
      </footer>

      </div>
  );
};

export default NexTapLanding;
