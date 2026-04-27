// Common types for the application
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export interface Review {
  _id: string;
  name: string;
  designation: string;
  review: string;
  rating: number;
  image: string;
  platform: "parent" | "carRental";
  createdAt: string;
  updatedAt: string;
}

export interface AboutUs {
  _id: string;
  title: string;
  bodyText: string;
  icon?: string;
  image: string;
  platform: "parent" | "carRental";
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: {
    total: number;
    limit: number;
    page: number;
    totalPage: number;
  };
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  platform: "parent" | "carRental";
  createdAt: string;
  updatedAt: string;
}

export interface Car {
  _id: string;
  name: string;
  description: string;
  features: string[];
  brand: string;
  images: string[];
  video?: string;
  perHour: number;
  perDay: number;
  perMonth: number;
  seats: number;
  transmission: string;
  fuelType: string;
  engineSize: string;
  horsepower: string;
  acceleration: string;
  topSpeed: string;
  drivetrain: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  designation: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactInfoData {
  _id: string;
  platform: string;
  address: string;
  email: string;
  openHours: string;
  phoneNumber: string;
  websiteLink: string;
  createdAt: string;
  updatedAt: string;
}

