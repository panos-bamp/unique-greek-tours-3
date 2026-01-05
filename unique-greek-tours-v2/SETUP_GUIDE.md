# Setup Guide - Unique Greek Tours v2

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd unique-greek-tours-v2
npm install --legacy-peer-deps
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Visit: `http://localhost:3000`

✅ Your site is now running!

## 📁 What's Included

### ✅ Complete Pages
1. **Homepage** - Greeking.me-style varied layouts
2. **Tours Hub** - Browse by destination or category
3. **Nafplio Destination Page** - Template for all destinations
4. **Individual Tour Page** - Full booking page template
5. **About Us** - Company story and values
6. **Contact** - Contact form with info
7. **Plan Your Trip** - Custom trip form

### 📋 Reusable Components
- Navigation with dropdowns
- Professional footer
- Tour cards
- Destination cards
- All styled and responsive

### 🎨 Design System
- Greeking.me-inspired colors
- Professional typography
- Varied card layouts
- Responsive design

## 🔧 Customization

### Add Your Logo
1. Save your logo as `/public/images/logo.png`
2. Logo automatically appears in Navigation and Footer

### Create More Destinations
1. Copy `/app/tours/nafplio/` folder
2. Rename to new destination (e.g., `mycenae`)
3. Update content in `page.tsx`
4. Update images

### Create More Tours
1. Copy `/app/tours/nafplio/nafplio-walking-tour/` folder
2. Rename and update content
3. Add to tours data in `/lib/tours-data.ts`

### Update Colors
Edit `/tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: "#1a4d6d" },  // Change this
  accent: { DEFAULT: "#c9a86a" },   // Change this
}
```

## 📷 Adding Real Photos

### Where to Place Images
```
public/images/
├── destinations/
│   ├── nafplio-1.jpg
│   ├── mycenae-1.jpg
│   └── ...
├── tours/
│   ├── tour-1.jpg
│   └── ...
└── logo.png
```

### Update Image URLs
Replace Unsplash URLs in pages:
```tsx
// Before:
src="https://images.unsplash.com/photo-123..."

// After:
src="/images/destinations/nafplio-1.jpg"
```

## 🌐 Deployment

### Deploy to Vercel
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Deploy
- Go to vercel.com
- Import repository  
- Click "Deploy"
- Live in 2 minutes!
```

## 📋 Remaining Tasks

### Pages to Create (Follow Templates)
1. Blog listing page
2. Blog post template
3. Transfers page
4. Terms & Conditions
5. Privacy Policy
6. Additional destination pages
7. Additional tour pages

### Content to Add
- Your real tour descriptions
- Actual pricing
- Real photos
- Team member bios
- Accurate contact info

## 📊 What's Next

### Priority 1: Essential Content
- [ ] Add your logo
- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Update tour descriptions

### Priority 2: Expand Tours
- [ ] Create Mycenae destination page
- [ ] Create Epidaurus destination page
- [ ] Create Olympia destination page
- [ ] Add more individual tour pages

### Priority 3: Additional Pages
- [ ] Blog listing
- [ ] Blog post template
- [ ] Transfers page
- [ ] Legal pages

## 🆘 Need Help?

Check these files:
- `README.md` - Complete documentation
- `PROJECT_SCOPE.md` - What's included
- `IMPLEMENTATION_PLAN.md` - Full project plan

## 💡 Tips

- **Hard Refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Clear Cache**: Delete `.next` folder and restart
- **Port Conflict**: Run `npm run dev -- -p 3001`

---

**You now have a professional, production-ready foundation!**

The hard part is done. Just customize content and deploy! 🚀
