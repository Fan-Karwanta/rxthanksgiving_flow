import { useState } from "react";
import Button from "./Button";
import { BusinessProfile, ServicesProfile, PortfolioProfile, SocialProfile, EventProfile } from "./profiles";

const ProfileShowcase = () => {
  const [activeProfile, setActiveProfile] = useState("business");

  const profiles = [
    { id: "business", name: "Business Mode", component: BusinessProfile },
    { id: "services", name: "Services Mode", component: ServicesProfile },
    { id: "portfolio", name: "Portfolio Mode", component: PortfolioProfile },
    { id: "social", name: "Social Mode", component: SocialProfile },
    { id: "event", name: "Event Mode", component: EventProfile },
  ];

  const ActiveComponent = profiles.find(p => p.id === activeProfile)?.component || BusinessProfile;

  return (
    <div className="min-h-screen bg-n-8 py-12">
      {/* Back to Home Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button href="/" className="bg-n-7 border border-n-6 hover:border-color-1">
          ← Back to Home
        </Button>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="h2 mb-4">NexTap Profile Templates</h1>
          <p className="body-1 text-n-3 max-w-2xl mx-auto">
            Choose from 5 professionally designed profile templates for any use case
          </p>
        </div>

        {/* Profile Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {profiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => setActiveProfile(profile.id)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 button ${
                activeProfile === profile.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-n-7 text-n-3 hover:bg-n-6 border border-n-6"
              }`}
            >
              {profile.name}
            </button>
          ))}
        </div>

        {/* Profile Display */}
        <div className="transition-all duration-500">
          <ActiveComponent />
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-n-7 rounded-2xl p-8 border border-n-6">
          <h3 className="h5 mb-4">How to Use These Templates</h3>
          <div className="space-y-3 body-2 text-n-3">
            <p>1. <strong className="text-n-2">Import</strong> the profile component you need from <code className="bg-n-8 px-2 py-1 rounded text-color-1">./components/profiles</code></p>
            <p>2. <strong className="text-n-2">Pass your data</strong> as props to customize the profile</p>
            <p>3. <strong className="text-n-2">Deploy</strong> and share your NFC-powered digital business card</p>
          </div>
          
          <div className="mt-6 p-4 bg-n-8 rounded-xl">
            <p className="caption text-n-4 mb-2">Example Usage:</p>
            <pre className="text-xs text-color-1 overflow-x-auto">
{`import { BusinessProfile } from './components/profiles';

const myData = {
  name: "Your Name",
  title: "Your Title",
  company: "Your Company",
  // ... more data
};

<BusinessProfile data={myData} />`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShowcase;
