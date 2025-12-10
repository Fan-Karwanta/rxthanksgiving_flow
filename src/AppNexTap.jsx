// Example App.jsx showing how to use NexTap components
// You can replace your existing App.jsx with this or use it as a reference

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import NexTapLanding from "./components/NexTapLanding";
// Uncomment below to use ProfileShowcase or individual profiles
// import ProfileShowcase from "./components/ProfileShowcase";
// import { BusinessProfile, ServicesProfile, PortfolioProfile, SocialProfile, EventProfile } from "./components/profiles";

const AppNexTap = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Option 1: Show NexTap Landing Page */}
        <NexTapLanding />

        {/* Option 2: Show Profile Showcase (uncomment to use) */}
        {/* <ProfileShowcase /> */}

        {/* Option 3: Show Individual Profile with custom data (uncomment to use) */}
        {/* 
        <BusinessProfile 
          data={{
            name: "John Anderson",
            title: "Senior Product Manager",
            company: "Tech Innovations Inc.",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            location: "San Francisco, CA",
            about: "Experienced product manager passionate about building great products.",
            linkedin: "linkedin.com/in/johnanderson",
            website: "johnanderson.com",
            avatar: "https://via.placeholder.com/150",
            stats: [
              { label: "Projects", value: "150+" },
              { label: "Years Exp", value: "12" },
              { label: "Team Size", value: "25" },
            ]
          }}
        />
        */}

        {/* Note: Footer is already included in NexTapLanding component */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default AppNexTap;

// To use this file:
// 1. Rename your current App.jsx to App.backup.jsx
// 2. Rename this file from AppNexTap.jsx to App.jsx
// 3. Or import and use specific components in your existing App.jsx
