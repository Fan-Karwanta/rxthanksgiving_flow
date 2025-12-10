# NexTap Components - Quick Reference Card

## 📋 Files Created (13 Total)

### Components (9 files)
- ✅ `src/components/NexTapLanding.jsx` - Landing page
- ✅ `src/components/ProfileShowcase.jsx` - Demo page
- ✅ `src/components/Icons.jsx` - Icon library
- ✅ `src/components/profiles/BusinessProfile.jsx` - Business mode
- ✅ `src/components/profiles/ServicesProfile.jsx` - Services mode
- ✅ `src/components/profiles/PortfolioProfile.jsx` - Portfolio mode
- ✅ `src/components/profiles/SocialProfile.jsx` - Social mode
- ✅ `src/components/profiles/EventProfile.jsx` - Event mode
- ✅ `src/components/profiles/index.js` - Profile exports

### Documentation (3 files)
- ✅ `NEXTAP_SUMMARY.md` - Overview & quick start
- ✅ `INTEGRATION_GUIDE.md` - Integration instructions
- ✅ `NEXTAP_COMPONENTS_README.md` - Technical docs

### Example (1 file)
- ✅ `src/AppNexTap.jsx` - Example implementation

## 🚀 3-Step Quick Start

### Step 1: Choose Your Approach
```javascript
// Option A: Replace your App.jsx
import NexTapLanding from "./components/NexTapLanding";
export default () => <NexTapLanding />;

// Option B: Add to existing App.jsx
import { BusinessProfile } from "./components/profiles";
// Use <BusinessProfile data={myData} />

// Option C: View all profiles
import ProfileShowcase from "./components/ProfileShowcase";
export default () => <ProfileShowcase />;
```

### Step 2: Run Dev Server
```bash
npm run dev
```

### Step 3: View in Browser
Navigate to `http://localhost:5173`

## 📦 Import Cheat Sheet

```javascript
// Landing Page
import NexTapLanding from "./components/NexTapLanding";

// All Profiles (Named Exports)
import { 
  BusinessProfile, 
  ServicesProfile, 
  PortfolioProfile, 
  SocialProfile, 
  EventProfile 
} from "./components/profiles";

// Individual Profile (Default Export)
import BusinessProfile from "./components/profiles/BusinessProfile";

// Icons (Named Exports)
import { 
  MailIcon, 
  PhoneIcon, 
  LinkedInIcon,
  InstagramIcon,
  // ... 20+ more icons
} from "./components/Icons";

// Showcase
import ProfileShowcase from "./components/ProfileShowcase";
```

## 🎯 Profile Props Quick Reference

### BusinessProfile
```javascript
<BusinessProfile data={{
  name: "John Doe",
  title: "Product Manager",
  company: "Tech Inc",
  email: "john@example.com",
  phone: "+1 234 567 8900",
  location: "San Francisco, CA",
  about: "Your bio...",
  linkedin: "linkedin.com/in/johndoe",
  website: "johndoe.com",
  avatar: "/path/to/image.jpg",
  stats: [
    { label: "Projects", value: "50+" },
    { label: "Years Exp", value: "5" },
    { label: "Team Size", value: "10" }
  ]
}} />
```

### ServicesProfile
```javascript
<ServicesProfile data={{
  businessName: "Beauty Spa",
  tagline: "Relax & Rejuvenate",
  rating: 4.8,
  reviews: 245,
  specialOffer: "20% OFF First Visit",
  services: [
    { name: "Massage", price: "$120", duration: "60 min" }
  ],
  hours: [
    { day: "Mon-Fri", time: "9AM-8PM" }
  ],
  location: "123 Main St",
  phone: "+1 234 567 8900",
  email: "info@spa.com"
}} />
```

### PortfolioProfile
```javascript
<PortfolioProfile data={{
  name: "Sarah Mitchell",
  profession: "Photographer",
  portfolio: [
    { id: 1, image: "/img1.jpg", title: "Wedding" }
  ],
  social: {
    instagram: { handle: "@sarah", followers: "125K" },
    twitter: { handle: "@sarah", followers: "45K" }
  },
  email: "hello@sarah.com",
  phone: "+1 234 567 8900"
}} />
```

### SocialProfile
```javascript
<SocialProfile data={{
  name: "Alex Rivera",
  handle: "@alexrivera",
  verified: true,
  bio: "Content Creator | Lifestyle",
  stats: [
    { label: "Posts", value: "1.2K" },
    { label: "Followers", value: "850K" }
  ],
  platforms: [
    { 
      name: "Instagram",
      handle: "@alex",
      followers: "450K",
      url: "https://instagram.com/alex"
    }
  ],
  recentPosts: [
    { id: 1, image: "/post1.jpg", likes: "45K" }
  ]
}} />
```

### EventProfile
```javascript
<EventProfile data={{
  eventName: "TechSummit 2024",
  date: "June 15-17, 2024",
  tagline: "Shaping the Future",
  pricing: [
    { type: "Early Bird", price: "$299", badge: "Save 40%" }
  ],
  schedule: [
    { time: "09:00 AM", title: "Registration", type: "General" }
  ],
  venue: "Convention Center",
  location: "123 Main St, SF",
  organizer: "TechEvents Inc",
  email: "info@event.com"
}} />
```

## 🎨 Common Customizations

### Change Colors
```javascript
// Find gradient classes like:
className="bg-gradient-to-br from-blue-500 to-blue-700"

// Replace with your colors:
className="bg-gradient-to-br from-purple-500 to-pink-600"
```

### Adjust Spacing
```javascript
// Change padding:
className="p-6" → className="p-8"

// Change margins:
className="mb-6" → className="mb-8"
```

### Modify Card Width
```javascript
// In profile components:
className="max-w-[480px]" → className="max-w-[600px]"
```

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Icons not showing | Import from `./components/Icons` |
| Styles not working | Check TailwindCSS config has all colors |
| Images not loading | Use absolute paths or import images |
| Button not found | Ensure Button component is exported |

## 📱 Testing Checklist

- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)
- [ ] Test all profile modes
- [ ] Test all interactive elements
- [ ] Test with real data
- [ ] Test image loading
- [ ] Test links and buttons

## 🎯 Next Actions

1. **Immediate** (5 min)
   - [ ] Read NEXTAP_SUMMARY.md
   - [ ] Choose integration approach
   - [ ] Run `npm run dev`

2. **Short Term** (1 hour)
   - [ ] Test all components
   - [ ] Add your data
   - [ ] Customize colors
   - [ ] Test on mobile

3. **Long Term** (1 day)
   - [ ] Connect to backend
   - [ ] Add authentication
   - [ ] Deploy to production

## 📚 Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| `NEXTAP_SUMMARY.md` | Overview | Read first |
| `INTEGRATION_GUIDE.md` | How to integrate | Read second |
| `NEXTAP_COMPONENTS_README.md` | Technical details | Reference |
| `NEXTAP_FILES.txt` | File tree | Quick lookup |
| `QUICK_REFERENCE.md` | This file | Keep handy |

## 💡 Pro Tips

1. Start with `ProfileShowcase` to see all templates
2. Use default data first, then customize
3. Test mobile-first (these are mobile-optimized)
4. Keep "Powered by NexTap" branding
5. Read inline comments in component files

## 🎉 You're Ready!

All components are production-ready. Just import and use!

**Questions?** Check the documentation files above.

---

**Built for NexTap** | *Your Digital Identity, One Tap Away*
