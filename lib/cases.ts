export type Case = {
  id: string;
  slug: string;
  title: string;
  category: string;
  services: string;
  image: string;
  description: string;
  year: string;
};

export const cases: Case[] = [
  {
    id: '014',
    slug: 'the-sixth-sense',
    title: 'One Sixth Sense',
    category: 'Real Estate',
    services: 'Identity, Naming',
   description: "Discover a new vocabulary for Mumbai's top cosmetic brand — a blend of elegance, culture, and opulence.",
    image: '/images/img-1.png',
    year: '2026',
  },
  {
    id: '013',
    slug: 'garuda',
    title: 'Garuda',
    category: 'Enterprises',
    services: 'Identity, Strategy',
       description: "Discover a new vocabulary for Mumbai's top cosmetic brand — a blend of elegance, culture, and opulence.",
    image: '/images/img-2.png',
     year: '2022',
  },
  {
    id: '012',
    slug: 'asian-cables',
    title: 'Asian Cables',
    category: 'Consumer & D2C',
    services: 'Identity, Packaging',
       description: "Discover a new vocabulary for Mumbai's top cosmetic brand — a blend of elegance, culture, and opulence.",
    image: '/images/img-3.png',
     year: '2023',
  },
  {
    id: '011',
    slug: 'the-pahadi-story',
    title: 'The Pahadi Story',
    category: 'Manufacturing',
    services: 'Strategy, Identity',
       description: "Discover a new vocabulary for Mumbai's top cosmetic brand — a blend of elegance, culture, and opulence.",
    image: '/images/img-4.png',
     year: '2025',
  },
];