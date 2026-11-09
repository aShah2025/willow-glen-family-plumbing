export const site = {
  name: "Willow Glen Family Plumbing",
  phone: "(408) 555-0142",
  phoneHref: "tel:+14085550142",
  email: "hello@willowglenplumbing.example",
  license: "CA Lic. #000000",
};

export const services = [
  {
    slug: "emergency-leak",
    name: "Emergency Leak Repair",
    icon: "drop",
    blurb:
      "Burst pipe or ceiling drip? A plumber is on the way day or night to stop the water and fix the source.",
  },
  {
    slug: "water-heater",
    name: "Water Heater Installation",
    icon: "flame",
    blurb:
      "Tank and tankless replacements, sized to your home and installed to code, often the day you call.",
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    icon: "drain",
    blurb:
      "Slow sinks to full sewer backups. We clear the clog, camera-check the line, and show you what we found.",
  },
  {
    slug: "pipe-replacement",
    name: "Pipe Replacement",
    icon: "pipe",
    blurb:
      "Repipes for aging galvanized and polybutylene lines, with careful patching in older South Bay homes.",
  },
] as const;

export const serviceAreas = [
  "Willow Glen",
  "Downtown San Jose",
  "Rose Garden",
  "Japantown",
  "Cambrian",
  "Almaden Valley",
  "Blossom Valley",
  "Evergreen",
  "Berryessa",
  "West San Jose",
];

export type FieldErrors = Record<string, string>;

export function phoneError(value: string): string | undefined {
  const digits = value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  return digits.length === 10 ? undefined : "Enter a 10-digit phone number.";
}

export function emailError(value: string): string | undefined {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? undefined
    : "Enter a valid email address.";
}
