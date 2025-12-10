import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import Button from "../Button";
import { 
  ZapIcon, 
  QrCodeIcon, 
  CheckIcon, 
  BriefcaseIcon, 
  ShoppingBagIcon, 
  CameraIcon, 
  UsersIcon, 
  CalendarIcon,
  DownloadIcon,
  GlobeIcon,
  PhoneIcon
} from "../Icons";

const HowToUsePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeMode, setActiveMode] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      details: [
        "Visit nextap.com and click 'Get Started Free'",
        "Enter your email and create a password",
        "Verify your email address",
        "Complete your basic profile information",
      ],
      icon: <UsersIcon className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Choose Your Profile Mode",
      description: "Select from 5 professional templates designed for different use cases.",
      details: [
        "Business Mode - For corporate professionals",
        "Services Mode - For freelancers & service providers",
        "Portfolio Mode - For creatives & artists",
        "Social Mode - For content creators & influencers",
        "Event Mode - For event organizers & hosts",
      ],
      icon: <LayersIcon className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Customize Your Profile",
      description: "Add your information, links, and personalize the design.",
      details: [
        "Upload your profile photo and cover image",
        "Add your contact information",
        "Include social media links",
        "Customize colors and branding (Pro)",
        "Add call-to-action buttons",
      ],
      icon: <CameraIcon className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
    {
      number: "04",
      title: "Program Your NFC Card",
      description: "Write your profile URL to any NFC card, tag, or sticker.",
      details: [
        "Open the NexTap app on your phone",
        "Go to 'Write NFC' in settings",
        "Hold your NFC card to your phone",
        "Wait for confirmation beep",
        "Your card is now programmed!",
      ],
      icon: <ZapIcon className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "05",
      title: "Share with a Tap",
      description: "Simply tap your card on any smartphone to share your profile instantly.",
      details: [
        "Hold your NFC card near the recipient's phone",
        "Their browser opens your profile automatically",
        "No app download required for them",
        "Works with iPhone and Android",
        "Alternative: Share via QR code",
      ],
      icon: <PhoneIcon className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const profileModes = [
    {
      name: "Business Mode",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
      bestFor: "Corporate professionals, executives, sales teams",
      features: ["Company branding", "Job title & department", "Office location", "LinkedIn integration", "Meeting scheduler"],
    },
    {
      name: "Services Mode",
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      color: "from-pink-500 to-purple-600",
      bestFor: "Freelancers, consultants, service providers",
      features: ["Service catalog", "Pricing display", "Booking system", "Client testimonials", "Portfolio samples"],
    },
    {
      name: "Portfolio Mode",
      icon: <CameraIcon className="w-6 h-6" />,
      color: "from-purple-600 to-indigo-700",
      bestFor: "Photographers, designers, artists, creatives",
      features: ["Image gallery", "Project showcase", "Video embeds", "Download links", "Commission info"],
    },
    {
      name: "Social Mode",
      icon: <UsersIcon className="w-6 h-6" />,
      color: "from-orange-500 to-pink-600",
      bestFor: "Content creators, influencers, streamers",
      features: ["All social links", "Latest content feed", "Subscriber counts", "Collaboration info", "Merch links"],
    },
    {
      name: "Event Mode",
      icon: <CalendarIcon className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      bestFor: "Event organizers, conference hosts, promoters",
      features: ["Event details", "RSVP system", "Venue map", "Schedule/agenda", "Ticket links"],
    },
  ];

  const tips = [
    {
      title: "Keep it Updated",
      description: "Your NFC card links to your live profile. Update your info anytime and changes appear instantly.",
      icon: <RefreshIcon className="w-6 h-6" />,
    },
    {
      title: "Use QR as Backup",
      description: "Generate a QR code for situations where NFC isn't available. Print it on business cards or displays.",
      icon: <QrCodeIcon className="w-6 h-6" />,
    },
    {
      title: "Track Your Analytics",
      description: "Monitor who views your profile, when, and from where. Optimize your networking strategy.",
      icon: <ChartIcon className="w-6 h-6" />,
    },
    {
      title: "Multiple Profiles",
      description: "Create different profiles for different contexts - one for work, one for personal networking.",
      icon: <LayersIcon className="w-6 h-6" />,
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
        id="how-to-use-hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-16">
            <h1 className="h1 mb-6">
              How to Use{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NexTap
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
              Get started in minutes. Follow our simple guide to create your digital identity and start networking smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/signup" white>
                Create Your Profile
              </Button>
              <Button href="#video-tutorial">
                Watch Video Tutorial
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Step by Step Guide */}
      <Section className="py-20 bg-n-8" id="steps">
        <div className="container">
          <h2 className="h2 text-center mb-4">Step-by-Step Guide</h2>
          <p className="body-1 text-n-3 text-center mb-16 max-w-2xl mx-auto">
            From sign-up to your first tap, here's everything you need to know
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Progress Bar */}
            <div className="hidden md:flex items-center justify-between mb-12 px-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      index <= activeStep
                        ? "bg-gradient-to-r from-color-1 to-color-5 text-white"
                        : "bg-n-6 text-n-4"
                    }`}
                  >
                    {index < activeStep ? (
                      <CheckIcon className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </button>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 lg:w-24 h-1 mx-2 rounded transition-colors duration-300 ${
                        index < activeStep ? "bg-gradient-to-r from-color-1 to-color-5" : "bg-n-6"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Step Info */}
              <div className="order-2 md:order-1">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} mb-6`}>
                  {steps[activeStep].icon}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-n-6">{steps[activeStep].number}</span>
                  <h3 className="h3">{steps[activeStep].title}</h3>
                </div>
                <p className="body-1 text-n-3 mb-6">{steps[activeStep].description}</p>
                
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="body-2 text-n-2">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="px-6 py-3 bg-n-6 rounded-xl text-n-2 hover:bg-n-5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-6 py-3 bg-gradient-to-r from-color-1 to-color-5 rounded-xl text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                </div>
              </div>

              {/* Step Visual */}
              <div className="order-1 md:order-2">
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} aspect-square max-w-md mx-auto`}>
                  <div className="absolute inset-4 bg-n-8/90 rounded-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                        {steps[activeStep].icon}
                      </div>
                      <p className="h5 text-white">{steps[activeStep].title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Profile Modes Section */}
      <Section className="py-20" id="profile-modes">
        <div className="container">
          <h2 className="h2 text-center mb-4">Choose Your Profile Mode</h2>
          <p className="body-1 text-n-3 text-center mb-16 max-w-2xl mx-auto">
            Five specialized templates designed for different professional needs
          </p>

          {/* Mode Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {profileModes.map((mode, index) => (
              <button
                key={index}
                onClick={() => setActiveMode(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeMode === index
                    ? `bg-gradient-to-r ${mode.color} text-white`
                    : "bg-n-7 text-n-3 hover:bg-n-6"
                }`}
              >
                {mode.icon}
                <span className="font-medium">{mode.name}</span>
              </button>
            ))}
          </div>

          {/* Mode Details */}
          <div className="max-w-4xl mx-auto">
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${profileModes[activeMode].color}`}>
              <div className="bg-n-8/95 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${profileModes[activeMode].color}`}>
                        {profileModes[activeMode].icon}
                      </div>
                      <h3 className="h4">{profileModes[activeMode].name}</h3>
                    </div>
                    <p className="body-1 text-n-3 mb-6">
                      <span className="text-n-1 font-medium">Best for:</span> {profileModes[activeMode].bestFor}
                    </p>
                    <Button href={`/profile/${profileModes[activeMode].name.split(" ")[0].toLowerCase()}`}>
                      View Demo
                    </Button>
                  </div>
                  <div>
                    <h4 className="h6 mb-4 text-n-2">Key Features</h4>
                    <ul className="space-y-3">
                      {profileModes[activeMode].features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckIcon className="w-5 h-5 text-green-400" />
                          <span className="body-2 text-n-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Video Tutorial Section */}
      <Section className="py-20 bg-n-8" id="video-tutorial">
        <div className="container">
          <h2 className="h2 text-center mb-4">Video Tutorial</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            Watch our quick tutorial to see NexTap in action
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-n-7 border border-n-6">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <button className="w-20 h-20 rounded-full bg-gradient-to-r from-color-1 to-color-5 flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <p className="body-2 text-n-3">Click to play tutorial</p>
                </div>
              </div>
              {/* Video thumbnail gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-n-8/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Section>

      {/* Pro Tips Section */}
      <Section className="py-20" id="tips">
        <div className="container">
          <h2 className="h2 text-center mb-4">Pro Tips</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            Get the most out of your NexTap experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-6 bg-n-7 rounded-2xl border border-n-6 hover:border-color-1 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-color-1/20 to-color-5/20 flex items-center justify-center mb-4 text-color-1">
                  {tip.icon}
                </div>
                <h4 className="h6 mb-2">{tip.title}</h4>
                <p className="body-2 text-n-3">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NFC Compatibility Section */}
      <Section className="py-20 bg-n-8" id="compatibility">
        <div className="container">
          <h2 className="h2 text-center mb-4">Device Compatibility</h2>
          <p className="body-1 text-n-3 text-center mb-12 max-w-2xl mx-auto">
            NexTap works with virtually all modern smartphones
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* iPhone */}
            <div className="p-8 bg-n-7 rounded-2xl border border-n-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="h5">iPhone</h4>
                  <p className="body-2 text-n-3">iOS 14 and later</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">iPhone 7 and newer</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">No app required to read</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">Tap on top of phone</span>
                </li>
              </ul>
            </div>

            {/* Android */}
            <div className="p-8 bg-n-7 rounded-2xl border border-n-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.44-.59-3.03-.94-4.72-.94s-3.28.35-4.72.94L5.15 5.67c-.18-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L5.9 9.48C2.94 11.07 1 14.05 1 17.5h22c0-3.45-1.94-6.43-4.9-8.02M7 15.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"/>
                  </svg>
                </div>
                <div>
                  <h4 className="h5">Android</h4>
                  <p className="body-2 text-n-3">Android 5.0 and later</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">Most Android phones with NFC</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">No app required to read</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-green-400" />
                  <span className="body-2 text-n-2">Tap on back of phone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">Ready to Get Started?</h2>
            <p className="body-1 text-n-3 mb-8">
              Create your first NexTap profile in under 5 minutes. It's free to start!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/signup" white>
                Create Free Account
              </Button>
              <Button href="/pricing">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Back to Home */}
      <div className="py-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-n-3 hover:text-n-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

// Additional icons needed
const LayersIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7l8-4 8 4-8 4-8-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l8 4 8-4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17l8 4 8-4" />
  </svg>
);

const RefreshIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ChartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export default HowToUsePage;
