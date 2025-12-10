# 🎯 NexTap Navigation Guide

## ✅ Setup Complete!

Your app now has routing set up with easy navigation between your original design and the new NexTap components.

## 🚀 How to Access NexTap Components

### Option 1: From Your Homepage
1. Run `npm run dev`
2. Open `http://localhost:5173`
3. Scroll down on the homepage
4. You'll see two buttons under "🎉 New: Check out NexTap Components":
   - **"NexTap Landing"** - View the full landing page
   - **"View All Profiles"** - See all 5 profile templates

### Option 2: Direct URLs
Once your dev server is running, navigate directly to:

- **Homepage (Original Design)**: `http://localhost:5173/`
- **NexTap Landing Page**: `http://localhost:5173/nextap`
- **Profile Showcase**: `http://localhost:5173/profiles`
- **Business Profile**: `http://localhost:5173/profile/business`
- **Services Profile**: `http://localhost:5173/profile/services`
- **Portfolio Profile**: `http://localhost:5173/profile/portfolio`
- **Social Profile**: `http://localhost:5173/profile/social`
- **Event Profile**: `http://localhost:5173/profile/event`

## 🔄 Navigation Features

### Back to Home Button
- On NexTap Landing and Profile Showcase pages, you'll see a **"← Back to Home"** button in the top-right corner
- Click it to return to your original homepage

### Navigation Buttons on Homepage
- Located in the Hero section, below the "Get started" button
- Clearly marked with "🎉 New: Check out NexTap Components"
- Two gradient buttons for easy access

## 📱 What You'll See

### On Homepage (/)
- Your original Brainwave design (unchanged)
- New navigation buttons added in Hero section
- All your existing sections: Hero, Benefits, Collaboration, Services, Pricing, Roadmap, Footer

### On NexTap Landing (/nextap)
- Full NexTap landing page with:
  - Hero section with NFC animation
  - Features section
  - How It Works
  - Profile modes preview
  - Complete footer
- "Back to Home" button in top-right

### On Profile Showcase (/profiles)
- Interactive profile switcher
- Live preview of all 5 profile templates
- Switch between profiles with buttons
- Usage instructions and code examples
- "Back to Home" button in top-right

### On Individual Profiles
- Full-screen profile view
- Mobile-optimized (480px max width)
- Sample data pre-filled
- Professional design with gradients

## 🎨 Your Original Design

**✅ PRESERVED!** Your original Brainwave design is completely intact and remains the homepage.

The NexTap components are on separate routes, so:
- Your existing design is untouched
- All your original components work as before
- You can switch between designs easily
- Both designs coexist perfectly

## 🔧 Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📍 Current Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Original Homepage | Your Brainwave design |
| `/nextap` | NexTapLanding | NexTap landing page |
| `/profiles` | ProfileShowcase | All 5 profiles demo |
| `/profile/business` | BusinessProfile | Business mode |
| `/profile/services` | ServicesProfile | Services mode |
| `/profile/portfolio` | PortfolioProfile | Portfolio mode |
| `/profile/social` | SocialProfile | Social mode |
| `/profile/event` | EventProfile | Event mode |

## 🎯 Testing Steps

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Visit homepage:**
   - Go to `http://localhost:5173/`
   - Scroll down to see navigation buttons

3. **Click "NexTap Landing":**
   - See the full landing page
   - Click "Back to Home" to return

4. **Click "View All Profiles":**
   - See the profile showcase
   - Switch between different profiles
   - Click "Back to Home" to return

5. **Try direct URLs:**
   - Type `/nextap` in the browser
   - Type `/profiles` in the browser
   - Type `/profile/business` in the browser

## 💡 Pro Tips

1. **Bookmark the URLs** you use most often
2. **Use the Back button** in your browser to navigate
3. **Use the "Back to Home" button** on NexTap pages
4. **Open in new tabs** to compare designs side-by-side
5. **Test on mobile** - resize your browser or use DevTools

## 🎨 Customization

### To Change Button Colors
Edit `/src/components/Hero.jsx` around line 50:
```javascript
<Button href="/nextap" className="bg-gradient-to-r from-blue-500 to-purple-600">
  NexTap Landing
</Button>
```

### To Change Button Text
Edit the same file and change the button text:
```javascript
<Button href="/nextap" className="...">
  Your Custom Text Here
</Button>
```

### To Add More Routes
Edit `/src/App.jsx` and add new routes:
```javascript
<Route path="/your-route" element={<YourComponent />} />
```

## 🚨 Troubleshooting

### Issue: Can't see navigation buttons
**Solution:** Scroll down on the homepage - they're below the "Get started" button

### Issue: 404 error on routes
**Solution:** Make sure dev server is running with `npm run dev`

### Issue: Buttons not working
**Solution:** Check browser console for errors, ensure all components are imported

### Issue: Styles look broken
**Solution:** Clear browser cache and refresh, or restart dev server

## 📞 Quick Reference

**Homepage:** `http://localhost:5173/`  
**NexTap Landing:** `http://localhost:5173/nextap`  
**All Profiles:** `http://localhost:5173/profiles`

**Navigation Buttons:** Located in Hero section on homepage  
**Back Button:** Top-right corner on NexTap pages

---

**Everything is set up and ready to use!** 🎉

Just run `npm run dev` and start exploring!
