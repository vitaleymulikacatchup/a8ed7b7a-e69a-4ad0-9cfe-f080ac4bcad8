"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, Crown, Bed, Sparkles, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined Hotel"
          description="Indulge in unparalleled elegance at Grand Luxe Hotel, where every detail is crafted for your ultimate comfort and sophistication."
          tag="5-Star Excellence"
          tagIcon={Crown}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Discover our collection of exquisitely designed rooms and suites, each offering the perfect blend of comfort and elegance."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Suite",
              price: "$450/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe suite with king bed"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$1,200/night",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite living area"
            },
            {
              id: "oceanview",
              name: "Ocean View Room",
              price: "$320/night",
              imageSrc: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel room with stunning ocean view"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Experience exceptional facilities and services designed to exceed your every expectation during your stay."
          tag="Luxury Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind at our award-winning spa featuring premium treatments and state-of-the-art facilities.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tranquil spa treatment room"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor culinary masterpieces crafted by world-renowned chefs using the finest locally sourced ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant restaurant dining area"
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax in our stunning infinity pool overlooking breathtaking views, perfect for unwinding in luxury.",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful infinity pool with city view"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who have experienced the exceptional service and luxury that defines Grand Luxe Hotel."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sophia Martinez",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sophia Martinez"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Travel Blogger",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Richardson"
            },
            {
              id: "3",
              name: "Isabella Chen",
              role: "Celebrity Chef",
              company: "Michelin Star Restaurant",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34435267/pexels-photo-34435267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Chen"
            },
            {
              id: "4",
              name: "Michael & Sarah Davis",
              role: "Honeymoon Couple",
              company: "Anniversary Celebration",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael and Sarah Davis"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Luxurious Escape"
          description="Contact our dedicated concierge team to book your stay and create unforgettable memories at Grand Luxe Hotel."
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our Terms of Service and Privacy Policy. We guarantee the best rates."
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel concierge desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Luxe Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#dining" },
                { label: "Spa & Wellness", href: "#spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "#about" },
                { label: "Guest Reviews", href: "reviews" },
                { label: "Special Offers", href: "#offers" },
                { label: "Events", href: "#events" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "Concierge", href: "#concierge" },
                { label: "Location", href: "#location" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}