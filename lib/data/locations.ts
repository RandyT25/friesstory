import type { Location } from "@/lib/types";

export const locations: Location[] = [
  {
    id: "bali-seminyak",
    name: "Fries Story Seminyak",
    address: "Jl. Kayu Aya No. 88, Seminyak",
    city: "Bali",
    country: "Indonesia",
    status: "open",
    hours: "Mon–Sun: 11:00 – 23:00",
    phone: "+62 361 888 0123",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    coordinates: { lat: -8.689, lng: 115.161 },
  },
];

export const comingSoonLocations = [
  { city: "Jakarta", country: "Indonesia", flag: "🇮🇩" },
  { city: "Surabaya", country: "Indonesia", flag: "🇮🇩" },
  { city: "Singapore", country: "Singapore", flag: "🇸🇬" },
  { city: "Bangkok", country: "Thailand", flag: "🇹🇭" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺" },
  { city: "Melbourne", country: "Australia", flag: "🇦🇺" },
];
