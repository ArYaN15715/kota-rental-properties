import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: PropertyId;
    title: string;
    verified: boolean;
    propertyType: string;
    studentFriendly: boolean;
    description: string;
    amenities: Array<string>;
    furnished: boolean;
    imageUrl: string;
    price: bigint;
    nearbyCoaching: Array<string>;
    location: string;
}
export type InquiryId = bigint;
export interface InquiryInput {
    propertyType: string;
    name: string;
    message: string;
    phone: string;
}
export type PropertyId = bigint;
export interface backendInterface {
    getProperties(): Promise<Array<Property>>;
    submitInquiry(input: InquiryInput): Promise<InquiryId>;
}
