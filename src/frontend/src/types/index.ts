export interface Property {
  id: bigint;
  title: string;
  price: string;
  location: string;
  propertyType: string;
  furnished: boolean;
  studentFriendly: boolean;
  nearbyCoaching: string;
  amenities: string[];
  verified: boolean;
  imageUrl: string;
}

export interface InquiryInput {
  name: string;
  phone: string;
  propertyType: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface AreaCard {
  id: number;
  name: string;
  count: string;
  mapImage: string;
}

export type FilterState = {
  location: string;
  budget: string;
  propertyType: string;
  studentFriendly: boolean;
  furnished: string;
  nearbyCoaching: string;
};
