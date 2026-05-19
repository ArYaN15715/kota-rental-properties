import type { FilterState } from "@/types";
import { create } from "zustand";

interface FilterStore extends FilterState {
  setLocation: (location: string) => void;
  setBudget: (budget: string) => void;
  setPropertyType: (propertyType: string) => void;
  setStudentFriendly: (studentFriendly: boolean) => void;
  setFurnished: (furnished: string) => void;
  setNearbyCoaching: (nearbyCoaching: string) => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  location: "",
  budget: "",
  propertyType: "",
  studentFriendly: false,
  furnished: "",
  nearbyCoaching: "",
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...initialState,
  setLocation: (location) => set({ location }),
  setBudget: (budget) => set({ budget }),
  setPropertyType: (propertyType) => set({ propertyType }),
  setStudentFriendly: (studentFriendly) => set({ studentFriendly }),
  setFurnished: (furnished) => set({ furnished }),
  setNearbyCoaching: (nearbyCoaching) => set({ nearbyCoaching }),
  resetFilters: () => set(initialState),
}));
