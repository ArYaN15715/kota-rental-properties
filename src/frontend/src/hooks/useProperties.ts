import { type Property as BackendProperty, createActor } from "@/backend";
import type { InquiryInput, Property } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery } from "@tanstack/react-query";

// Static fallback data for immediate rich display
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: BigInt(1),
    title: "3 BHK Apartment – Talwandi",
    price: "₹18,000/mo",
    location: "Talwandi, Kota",
    propertyType: "Apartment",
    furnished: true,
    studentFriendly: true,
    nearbyCoaching: "Allen, Resonance",
    amenities: ["WiFi", "AC", "Parking", "Security"],
    verified: true,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
  {
    id: BigInt(2),
    title: "2 BHK Flat – Vigyan Nagar",
    price: "₹12,000/mo",
    location: "Vigyan Nagar, Kota",
    propertyType: "Flat",
    furnished: true,
    studentFriendly: true,
    nearbyCoaching: "Resonance, Vibrant Academy",
    amenities: ["WiFi", "Power Backup", "Lift"],
    verified: true,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
  {
    id: BigInt(3),
    title: "1 BHK Studio – Rajeev Gandhi Nagar",
    price: "₹7,500/mo",
    location: "Rajeev Gandhi Nagar, Kota",
    propertyType: "Studio",
    furnished: false,
    studentFriendly: true,
    nearbyCoaching: "Bansal Classes",
    amenities: ["WiFi", "Security", "Water 24/7"],
    verified: true,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
  {
    id: BigInt(4),
    title: "Semi-Furnished Room – Nayapura",
    price: "₹5,000/mo",
    location: "Nayapura, Kota",
    propertyType: "PG Room",
    furnished: false,
    studentFriendly: true,
    nearbyCoaching: "FIITJEE, Career Point",
    amenities: ["Mess", "Security", "Study Room"],
    verified: false,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
  {
    id: BigInt(5),
    title: "3 BHK Family Flat – Mahaveer Nagar",
    price: "₹22,000/mo",
    location: "Mahaveer Nagar, Kota",
    propertyType: "Apartment",
    furnished: true,
    studentFriendly: false,
    nearbyCoaching: "Nearby coaching hub",
    amenities: ["Parking", "Security", "Gym", "AC"],
    verified: true,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
  {
    id: BigInt(6),
    title: "2 BHK Flat – IPIA Industrial Area",
    price: "₹9,500/mo",
    location: "IPIA, Kota",
    propertyType: "Flat",
    furnished: false,
    studentFriendly: false,
    nearbyCoaching: "Near industrial zone",
    amenities: ["Parking", "Water 24/7", "Security"],
    verified: true,
    imageUrl: "/assets/generated/hero-property.dim_1200x800.jpg",
  },
];

export function useProperties() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      if (!actor) return SAMPLE_PROPERTIES;
      try {
        const result = await actor.getProperties();
        if (result.length === 0) return SAMPLE_PROPERTIES;
        return result.map(
          (p: BackendProperty): Property => ({
            id: p.id,
            title: p.title,
            price: `₹${Number(p.price).toLocaleString("en-IN")}/mo`,
            location: p.location,
            propertyType: p.propertyType,
            furnished: p.furnished,
            studentFriendly: p.studentFriendly,
            nearbyCoaching: p.nearbyCoaching.join(", "),
            amenities: p.amenities,
            verified: p.verified,
            imageUrl:
              p.imageUrl || "/assets/generated/hero-property.dim_1200x800.jpg",
          }),
        );
      } catch {
        return SAMPLE_PROPERTIES;
      }
    },
    enabled: !isFetching,
    placeholderData: SAMPLE_PROPERTIES,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor(createActor);
  return useMutation({
    mutationFn: async (input: InquiryInput) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitInquiry(input);
    },
  });
}
