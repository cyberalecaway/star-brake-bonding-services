import {
  CircleDot,
  Cog,
  Fan,
  Settings2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "Star Brake Bonding Services",
  websiteUrl: "https://star-brake-bonding-services.vercel.app",
  facebookUrl: "https://www.facebook.com/profile.php?id=100078549679944",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=10.258766%2C123.825070",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=10.258766%2C123.825070",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=10.258766,123.825070&z=16&output=embed",
};

export const phoneNumbers = [
  { label: "Smart", display: "0961 357 7324", tel: "+639613577324" },
  { label: "Globe", display: "0966 187 4287", tel: "+639661874287" },
  { label: "Landline", display: "032 343 0334", tel: "+63323430334" },
];

export const openingHours = [
  { day: "Monday" },
  { day: "Tuesday" },
  { day: "Wednesday" },
  { day: "Thursday" },
  { day: "Friday" },
  { day: "Saturday" },
  { day: "Sunday" },
];

export const serviceGroups: {
  name: string;
  description: string;
  icon: LucideIcon;
  services: string[];
}[] = [
  {
    name: "Brake & Clutch",
    description: "Lining services for brake and clutch components.",
    icon: CircleDot,
    services: [
      "Brake Lining Bonding",
      "Brake Lining Re-Lining",
      "Clutch Lining Re-Lining",
    ],
  },
  {
    name: "Underchassis",
    description: "Service and repair for underchassis components.",
    icon: Settings2,
    services: [
      "Underchassis Removal",
      "Underchassis Installation",
      "Underchassis Repair",
      "Rack and Pinion Repair",
      "Tie Rod End / Rod End Repair",
      "Ball Joint Repair",
    ],
  },
  {
    name: "Transmission",
    description: "Transmission removal service for vehicle repair work.",
    icon: Cog,
    services: ["Down Transmission"],
  },
  {
    name: "Automotive Repair",
    description: "Repair and troubleshooting across key vehicle systems.",
    icon: Wrench,
    services: [
      "Car Air-Conditioning Repair",
      "Engine Troubleshooting",
      "Engine Overhaul",
    ],
  },
  {
    name: "Specialized Orders",
    description: "Specialized automotive orders for your vehicle needs.",
    icon: Fan,
    services: ["Specialized Automotive Orders"],
  },
];

export const galleryImages = [
  {
    src: "/workshop%20service.png",
    alt: "Vehicle service in the workshop",
    caption: "Workshop service",
  },
  {
    src: "/automative%20repair.png",
    alt: "Automotive repair work",
    caption: "Automotive repair",
  },
  {
    src: "/carefulinspection.png",
    alt: "Close inspection of a vehicle undercarriage and brake assembly",
    caption: "Careful inspection",
  },
  {
    src: "/ready%20for%20the%20road.png",
    alt: "Vehicle ready for the road",
    caption: "Ready for the road",
  },
];