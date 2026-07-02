export type MenuCategory =
  | "classic"
  | "signature-loaded"
  | "sharing-boxes"
  | "sides"
  | "drinks"
  | "desserts"
  | "sauces";

export type MenuTag = "bestseller" | "spicy" | "vegetarian" | "new" | "signature";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  details?: string;
  price: { idr: number; sgd?: number };
  category: MenuCategory;
  tags: MenuTag[];
  image?: string;
  featured?: boolean;
  heatLevel?: 0 | 1 | 2 | 3;
}

export interface Sauce {
  id: string;
  name: string;
  description: string;
  heatLevel: 0 | 1 | 2 | 3;
  flavor: string;
  isSignature?: boolean;
  origin?: string;
  image?: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  status: "open" | "coming-soon" | "in-development";
  openDate?: string;
  hours?: string;
  phone?: string;
  image?: string;
  coordinates?: { lat: number; lng: number };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  avatar?: string;
}

export interface FranchiseStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface FranchiseFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  investmentBudget: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
