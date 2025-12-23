export interface Tour {
  id: string;
  slug: string;
  title: string;
  destination: string;
  category: string;
  duration: string;
  groupType: string;
  price: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "nafplio-walking-tour",
    title: "Nafplio Walking & Food Tour",
    destination: "nafplio",
    category: "cultural",
    duration: "4 hours",
    groupType: "Private",
    price: "From €75/person",
    image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200",
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200",
    ],
    description: "Discover one of Greece's most romantic cities through its cobblestone streets, Venetian architecture, and authentic local cuisine. This intimate walking tour combines history, culture, and gastronomy in the charming old town of Nafplio.",
    highlights: [
      "Explore the historic Venetian old town",
      "Visit Syntagma Square and the first Greek parliament",
      "Climb to Palamidi fortress for panoramic views",
      "Taste traditional specialties at local tavernas",
      "Learn about Nafplio's role as Greece's first capital",
    ],
    included: [
      "Professional licensed guide",
      "Food tastings at 4-5 locations",
      "Bottled water",
      "All taxes and fees",
    ],
    excluded: [
      "Hotel pickup/drop-off",
      "Palamidi fortress entrance (€8)",
      "Additional food and drinks",
      "Gratuities (optional)",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "mycenae-epidaurus-tour",
    title: "Mycenae & Epidaurus UNESCO Sites Tour",
    destination: "mycenae",
    category: "archaeological",
    duration: "8 hours",
    groupType: "Private",
    price: "From €120/person",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200",
    ],
    description: "Journey through 3,000 years of history visiting two of Greece's most important archaeological sites. Discover the legendary kingdom of Agamemnon and experience the perfect acoustics of the ancient theater.",
    highlights: [
      "Explore Mycenae's Lion Gate and royal tombs",
      "Visit the Treasury of Atreus",
      "Experience Epidaurus ancient theater",
      "Learn from expert archaeological guide",
      "Traditional Greek lunch included",
    ],
    included: [
      "Private transportation in luxury vehicle",
      "Licensed archaeological guide",
      "All entrance fees",
      "Traditional lunch",
      "Bottled water",
    ],
    excluded: [
      "Hotel pickup in Athens (can be arranged)",
      "Personal expenses",
      "Gratuities",
    ],
    featured: true,
  },
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find(tour => tour.slug === slug);
};

export const getToursByDestination = (destination: string): Tour[] => {
  return tours.filter(tour => tour.destination === destination);
};

export const getToursByCategory = (category: string): Tour[] => {
  return tours.filter(tour => tour.category === category);
};

export const getFeaturedTours = (): Tour[] => {
  return tours.filter(tour => tour.featured);
};
