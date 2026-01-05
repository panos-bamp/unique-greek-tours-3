# Unique Greek Tours v2 - Implementation Plan

## Project Scope

This is a major redesign to closely match Greeking.me's style with 12+ new pages and templates.

## Key Changes Requested

### 1. Homepage Redesign ✓
- More variety in card layouts (varied image positions, overlapping elements)
- Asymmetric grid layouts
- Image-text combinations like Greeking.me
- Floating cards and overlapping sections

### 2. Tours Page Redesign ✓
- Choice between "Browse by Destination" and "Browse by Category"
- Beautiful cards for each destination (Nafplio, Mycenae, Epidaurus, Olympia, Delphi, etc.)
- Beautiful cards for each category (Archaeological, Cultural, Food & Wine, Nature, Family)

### 3. Destination Tour Template ✓
Based on: https://greeking.me/tours/athens
- Hero image with destination name
- Descriptive intro text
- Categorized tour sections (Sightseeing, Culinary, Family, Day Trips)
- Tour cards in each section
- Related itineraries section
- Blog posts section

### 4. Category Tour Template ✓
Similar to destination template but organized by category
- E.g., /tours/category/archaeological
- Shows all archaeological tours regardless of location

### 5. Individual Tour Page Template ✓
Based on: https://greeking.me/tours/athens/mythology-tour
- Image gallery/slider
- Tour title and overview
- Duration, group type, pricing
- Detailed description
- What's included/excluded
- Reviews section
- Booking CTA

### 6. Transfers Page ✓
Based on: https://trips2026.greeking.me/
- Airport transfers
- Inter-city transfers  
- Private car services
- Pricing calculator/form

### 7. Blog Page ✓
Based on: https://greeking.me/blog
- Featured posts
- Category filters
- Grid of blog posts with images
- Pagination

### 8. Blog Post Template ✓
Based on: https://greeking.me/blog/crete/crete-beaches
- Hero image
- Article content with proper typography
- Table of contents
- Related posts
- Share buttons

### 9. Plan My Trip / Tailor-Made Tours ✓
Based on: https://travel.greeking.me/
- Multi-step form
- Destination selection
- Travel dates
- Interests/preferences
- Group size
- Budget range
- Contact information

### 10. About Page ✓
Based on: https://greeking.me/about
- Team intro
- Our story
- Values
- Why choose us
- Certifications

### 11. Terms & Conditions ✓
Based on: https://greeking.me/terms-conditions
- Legal content sections
- Booking terms
- Cancellation policy
- Privacy terms

### 12. Privacy Policy ✓
Based on: https://greeking.me/privacy-policy
- Data collection
- Cookie policy
- User rights
- GDPR compliance

## File Structure

```
unique-greek-tours-v2/
├── app/
│   ├── page.tsx                           # Homepage (redesigned)
│   ├── layout.tsx                         # Root layout
│   ├── globals.css                        # Global styles
│   ├── tours/
│   │   ├── page.tsx                       # Tours hub (by destination/category)
│   │   ├── [destination]/
│   │   │   ├── page.tsx                   # Destination template
│   │   │   └── [tour-slug]/
│   │   │       └── page.tsx               # Individual tour
│   │   └── category/
│   │       └── [category-slug]/
│   │           └── page.tsx               # Category template
│   ├── transfers/
│   │   └── page.tsx                       # Transfers page
│   ├── blog/
│   │   ├── page.tsx                       # Blog listing
│   │   └── [category]/
│   │       └── [slug]/
│   │           └── page.tsx               # Blog post template
│   ├── plan-trip/
│   │   └── page.tsx                       # Tailor-made form
│   ├── about/
│   │   └── page.tsx                       # About page
│   ├── terms/
│   │   └── page.tsx                       # Terms
│   ├── privacy/
│   │   └── page.tsx                       # Privacy
│   └── contact/
│       └── page.tsx                       # Contact
├── components/
│   ├── Navigation.tsx                     # Updated nav
│   ├── Footer.tsx                         # Updated footer
│   ├── TourCard.tsx                       # Reusable tour card
│   ├── DestinationCard.tsx                # Destination cards
│   ├── CategoryCard.tsx                   # Category cards
│   └── BlogCard.tsx                       # Blog post cards
├── lib/
│   ├── tours-data.ts                      # Tour database
│   ├── destinations-data.ts               # Destinations
│   ├── categories-data.ts                 # Categories
│   └── blog-data.ts                       # Blog posts
├── public/
│   └── images/
│       ├── logo.png                       # Your logo (transparent)
│       ├── destinations/                  # Destination photos
│       ├── tours/                         # Tour photos
│       └── blog/                          # Blog photos
└── [config files]
```

## Design Principles (Matching Greeking.me)

### Typography
- **Headings**: Playfair Display / Cormorant Garamond (serif)
- **Body**: Open Sans / Montserrat (sans-serif)
- **Hierarchy**: Clear distinction between levels

### Colors
- **Primary**: Deep blue (#2B5876)
- **Accent**: Warm gold/beige (#d4a373)
- **Background**: Soft cream/sand tones
- **Text**: Dark gray for readability

### Layout Patterns
1. **Asymmetric Grids**: Vary card sizes and positions
2. **Overlapping Elements**: Images overlapping text sections
3. **Generous Whitespace**: Room to breathe
4. **Image-First**: Large, high-quality photography
5. **Floating Cards**: Cards with shadows appearing to float

### Component Patterns
1. **Tour Cards**: Image + overlay with duration/type badge
2. **Section Headers**: Large serif typography with accent underlines
3. **CTAs**: Clear, prominent buttons with hover effects
4. **Breadcrumbs**: Show navigation path
5. **Category Tabs**: Filter content by category

## Photo Requirements

### Destinations (High Priority)
- **Nafplio**: Old town, Palamidi fortress, harbor
- **Mycenae**: Lion Gate, ruins panorama
- **Epidaurus**: Ancient theater, landscape
- **Olympia**: Temple ruins, stadium
- **Delphi**: Temple of Apollo, mountain views
- **Monemvasia**: Castle town, Byzantine architecture
- **Corinth**: Canal, ancient city

### Categories
- **Archaeological**: Ancient ruins, columns
- **Cultural**: Traditional villages, local life
- **Food & Wine**: Greek food, tavernas, vineyards
- **Nature**: Gorges, coastline, mountains
- **Family**: Families enjoying activities

### General
- **Hero images**: Wide, dramatic landscapes
- **Activity photos**: People on tours (authentic, not stock)
- **Details**: Close-ups of food, architecture, nature

## Implementation Priority

### Phase 1: Core Structure (Days 1-2)
1. ✓ Project setup and configuration
2. ✓ Navigation and Footer updates
3. ✓ Homepage redesign with varied layouts
4. ✓ Tours hub page

### Phase 2: Template Pages (Days 3-4)
5. ✓ Destination tour template
6. ✓ Category tour template
7. ✓ Individual tour page template
8. ✓ Data structures for tours

### Phase 3: Additional Pages (Days 5-6)
9. ✓ Transfers page
10. ✓ Blog listing page
11. ✓ Blog post template
12. ✓ Plan My Trip form

### Phase 4: Legal & Polish (Day 7)
13. ✓ About page (redesigned)
14. ✓ Terms & Conditions
15. ✓ Privacy Policy
16. ✓ Final styling and responsive checks

## Technical Notes

### Dynamic Routing
- `/tours/[destination]` - Nafplio, Mycenae, Epidaurus, etc.
- `/tours/[destination]/[tour-slug]` - Individual tours
- `/tours/category/[category]` - Archaeological, Cultural, etc.
- `/blog/[category]/[slug]` - Blog posts

### Data Management
- Store tour data in `/lib/tours-data.ts`
- Use TypeScript interfaces for type safety
- Create utility functions for filtering/sorting

### SEO Optimization
- Dynamic metadata for each page
- Structured data (JSON-LD) for tours
- Optimized images with Next.js Image
- XML sitemap generation

### Performance
- Static generation where possible
- Image optimization
- Code splitting
- Lazy loading

## Logo Integration
- Add your transparent PNG logo
- Use in navigation (replace text logo)
- Use in footer
- Maintain aspect ratio
- Provide different sizes for different viewports

## Photo Sources
1. **Unsplash** - High-quality free photos
2. **Pexels** - Additional free stock
3. **Custom photos** - Replace with real tour photos later

Search terms for each destination:
- "Nafplio Greece"
- "Mycenae ancient ruins"
- "Epidaurus theater"
- "Ancient Olympia"
- "Delphi Temple Apollo"
- etc.

## Next Steps

This plan provides a roadmap for the complete redesign. Due to the scope, I recommend:

1. **Immediate**: Core files (config, navigation, homepage)
2. **Phase 1**: Tour system (hub, templates, data)
3. **Phase 2**: Supporting pages (blog, transfers, plan trip)
4. **Phase 3**: Legal pages and final polish

Each phase builds on the previous, creating a fully functional, beautiful website matching Greeking.me's aesthetic.

---

**Estimated Total Development Time**: 5-7 days for complete implementation
**Files to Create**: 40+ files (pages, components, data files)
**Lines of Code**: ~8,000-10,000 lines

This is a substantial project that will result in a professional, production-ready website!
