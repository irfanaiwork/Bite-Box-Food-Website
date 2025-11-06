// FIX: Import React to enable JSX syntax in this file.
import React from 'react';
import type { MenuItem, Deal, ChefPick, Testimonial, GalleryImage, Feature } from './types';

export const CONTACT_INFO = {
  name: "Bite Box",
  tagline: "Fresh. Fast. Flavorful.",
  location: "Shadman City Phase 1 Bahawalpur",
  whatsapp: "+923149773464",
  whatsappOrder: "+923140607452",
  hours: "12 PM – 12 AM (Mon–Sun)",
  email: "contact@bitebox.example.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  }
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Catering', href: '#catering' },
  { name: 'Contact', href: '#contact' },
];

// FIX: Replaced JSX with React.createElement to fix errors in .ts file.
const LeafIcon = () => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-yellow-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }));
const ClockIcon = () => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-yellow-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }));
const SparklesIcon = () => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-yellow-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 17l-4 4 4-4 2.293-2.293a1 1 0 011.414 0L17 14m-5-5l2-2m0 0l2 2m-2-2v6" }));
const HeartIcon = () => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-yellow-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }));

export const FEATURES: Feature[] = [
    // FIX: Replaced JSX with React.createElement to fix errors in .ts file.
    { icon: React.createElement(LeafIcon), title: "Fresh Ingredients", description: "We source the freshest local ingredients daily to ensure every meal is packed with quality and flavor." },
    { icon: React.createElement(ClockIcon), title: "Fast Service", description: "Your time is valuable. We pride ourselves on quick and efficient service without compromising on taste." },
    { icon: React.createElement(SparklesIcon), title: "Signature Taste", description: "Our secret recipes and expert chefs create a unique flavor profile you won't find anywhere else." },
    { icon: React.createElement(HeartIcon), title: "Loved Locally", description: "A favorite spot in Bahawalpur, we are proud to be a cherished part of the local community." },
];

export const FULL_MENU: MenuItem[] = [
  { name: "Zinger Burger", description: "Crispy chicken fillet, lettuce, and our special sauce.", price: 450, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop" },
  { name: "Beef Cheese Burger", description: "Juicy beef patty, melted cheddar, pickles, and onions.", price: 550, image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=400&auto=format&fit=crop" },
  { name: "Shawarma Wrap", description: "Tender chicken, fresh veggies, and garlic sauce in a pita.", price: 300, image: "https://images.unsplash.com/photo-1599451152338-832c638d3813?q=80&w=400&auto=format&fit=crop" },
  { name: "Loaded Fries", description: "Crispy fries topped with cheese, jalapenos, and special sauce.", price: 350, image: "https://images.unsplash.com/photo-1576777647209-e8735d79e494?q=80&w=400&auto=format&fit=crop" },
  { name: "Chicken Tikka Pizza", description: "Spicy chicken tikka, onions, peppers, and mozzarella cheese.", price: 999, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop" },
  { name: "Club Sandwich", description: "Classic triple-decker with chicken, egg, and fresh veggies.", price: 400, image: "https://images.unsplash.com/photo-1592415486689-125c924e908d?q=80&w=400&auto=format&fit=crop" },
  { name: "Spicy Broast", description: "Quarter chicken fried to perfection with our spicy coating.", price: 480, image: "https://images.unsplash.com/photo-1626082910795-a872a2b75a6c?q=80&w=400&auto=format&fit=crop" },
  { name: "Choco Lava Cake", description: "Warm chocolate cake with a gooey, molten center.", price: 320, image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=400&auto=format&fit=crop" },
  { name: "Mint Margarita", description: "A refreshing blend of mint, lime, and ice.", price: 200, image: "https://images.unsplash.com/photo-1542557983-c52ada63a45c?q=80&w=400&auto=format&fit=crop" },
  { name: "Caramel Frappe", description: "Iced coffee blended with caramel syrup and topped with cream.", price: 350, image: "https://images.unsplash.com/photo-1546202595-3e8e2b17f5ed?q=80&w=400&auto=format&fit=crop" },
];

export const MENU_PREVIEW = FULL_MENU.slice(0, 8);

export const DAILY_DEALS: Deal[] = [
  { name: "Combo 1", description: "Zinger Burger, Fries, and a Drink.", price: 650, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400&auto=format&fit=crop", discountTag: "Save 10%" },
  { name: "Combo 2", description: "2 Shawarma Wraps and 2 Drinks.", price: 700, image: "https://images.unsplash.com/photo-1625220194771-7ebdea0d3629?q=80&w=400&auto=format&fit=crop", discountTag: "Best for Two" },
  { name: "Family Deal", description: "Medium Pizza, 4 Pcs Broast, and 1.5L Drink.", price: 1999, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400&auto=format&fit=crop", discountTag: "Family Size" },
];

export const CHEFS_PICKS: ChefPick[] = [
  { name: "The Volcano Burger", description: "Our hottest creation with a spicy patty and fiery sauce.", price: 600, image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=400&auto=format&fit=crop", story: "Crafted for the brave, this burger is an explosion of flavor that challenges your taste buds. A true Bite Box legend.", rating: 5 },
  { name: "Creamy Tikka Wrap", description: "A milder, creamier version of our classic Shawarma.", price: 350, image: "https://images.unsplash.com/photo-1611599539864-b4a003164ba8?q=80&w=400&auto=format&fit=crop", story: "We wanted a Shawarma for everyone. The result is this smooth, rich, and utterly satisfying wrap loved by all ages.", rating: 4 },
  { name: "Ultimate Loaded Fries", description: "Our loaded fries with added grilled chicken chunks.", price: 450, image: "https://images.unsplash.com/photo-1621832612662-789a752a101b?q=80&w=400&auto=format&fit=crop", story: "Why stop at sauce and cheese? We took our famous fries to the next level by adding perfectly grilled chicken.", rating: 5 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=600&auto=format&fit=crop", alt: "Delicious burger close-up" },
  { id: 2, src: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=600&auto=format&fit=crop", alt: "A spread of fast food items" },
  { id: 3, src: "https://images.unsplash.com/photo-1598679253443-4b52b2538133?q=80&w=600&auto=format&fit=crop", alt: "Crispy golden fries" },
  { id: 4, src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop", alt: "Customer enjoying a meal" },
  { id: 5, src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=600&auto=format&fit=crop", alt: "A stack of pizzas" },
  { id: 6, src: "https://images.unsplash.com/photo-1621939523423-78b1d9ee93d8?q=80&w=600&auto=format&fit=crop", alt: "Chef preparing food" },
  { id: 7, src: "https://images.unsplash.com/photo-1566739276949-8f3195275659?q=80&w=600&auto=format&fit=crop", alt: "Shawarma wraps lined up" },
  { id: 8, src: "https://images.unsplash.com/photo-1601574464132-243868694d3f?q=80&w=600&auto=format&fit=crop", alt: "Refreshing colorful drinks" },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: "The Zinger Burger at Bite Box is the best in town! Perfectly crispy and full of flavor. I'm a regular now.", author: "Ahmad Khan", location: "Bahawalpur", avatar: "https://ui-avatars.com/api/?name=Ahmad+Khan&background=dc2626&color=fff&bold=true" },
    { quote: "Fast service and amazing food. Their loaded fries are a must-try. Highly recommend for a quick and tasty meal.", author: "Fatima Ali", location: "Shadman City", avatar: "https://ui-avatars.com/api/?name=Fatima+Ali&background=fbbd23&color=1a1a1a&bold=true" },
    { quote: "We ordered catering for a family event, and everyone loved it. The food was fresh, hot, and delicious. Great job, Bite Box!", author: "Usman Tariq", location: "Bahawalpur", avatar: "https://ui-avatars.com/api/?name=Usman+Tariq&background=4b5563&color=fff&bold=true" },
];
