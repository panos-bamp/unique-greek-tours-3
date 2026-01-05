export interface Destination {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  tourCount: number;
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "nafplio",
    name: "Nafplio",
    description: "Greece's first capital and most romantic town",
    image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800",
    heroImage: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1920",
    intro: "Nafplio, the jewel of the Peloponnese, enchants visitors with its Venetian architecture, romantic harbor, and impressive fortresses. As Greece's first capital, this charming seaside town offers a perfect blend of history, culture, and Mediterranean beauty.",
    highlights: [
      "Explore the Venetian old town",
      "Climb Palamidi fortress (999 steps)",
      "Visit Bourtzi island fortress",
      "Stroll the scenic harbor promenade",
      "Discover hidden cafes and tavernas",
    ],
    tourCount: 8,
  },
  {
    id: "2",
    slug: "mycenae",
    name: "Mycenae",
    description: "Ancient kingdom of Agamemnon",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    heroImage: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920",
    intro: "Step into legend at Mycenae, the powerful Bronze Age citadel that dominated ancient Greece. Walk through the famous Lion Gate and explore royal tombs where mythical kings once ruled.",
    highlights: [
      "Lion Gate entrance",
      "Treasury of Atreus",
      "Royal palace ruins",
      "Archaeological museum",
      "Panoramic valley views",
    ],
    tourCount: 12,
  },
  {
    id: "3",
    slug: "epidaurus",
    name: "Epidaurus",
    description: "Ancient theater with perfect acoustics",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800",
    heroImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920",
    intro: "Experience the wonder of Epidaurus, home to the best-preserved ancient theater in Greece. This UNESCO World Heritage Site showcases incredible 4th-century BC engineering and acoustics.",
    highlights: [
      "Ancient theater (14,000 capacity)",
      "Test the perfect acoustics",
      "Sanctuary of Asclepius",
      "Ancient healing center",
      "Museum of artifacts",
    ],
    tourCount: 10,
  },
  {
    id: "4",
    slug: "olympia",
    name: "Ancient Olympia",
    description: "Birthplace of the Olympic Games",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=800",
    heroImage: "https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=1920",
    intro: "Visit the sacred site where the Olympic Games began in 776 BC. Walk through the ancient stadium and imagine athletes competing for glory over 2,800 years ago.",
    highlights: [
      "Original Olympic stadium",
      "Temple of Zeus ruins",
      "Philippeion monument",
      "Archaeological museum",
      "Olympic flame ceremony site",
    ],
    tourCount: 9,
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};
