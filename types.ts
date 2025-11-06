// FIX: Import React to use its types.
import React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Deal extends MenuItem {
  discountTag: string;
}

export interface ChefPick extends MenuItem {
  story: string;
  rating: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  avatar: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Feature {
    // FIX: Changed from JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
    icon: React.ReactNode;
    title: string;
    description: string;
}