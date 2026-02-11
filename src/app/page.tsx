import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceGallery from "@/components/ServiceGallery";
import NationalCoverage from "@/components/NationalCoverage";
import DriverProfile from "@/components/DriverProfile";
import ImageTiles from "@/components/ImageTiles";
import TrustedBy from "@/components/TrustedBy";
import BookingCTA from "@/components/BookingCTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQSchema from "@/components/FAQSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chauffeur Service Australia | Auzzie Chauffeur | Book Luxury Ride Online",
  description: "Reliable chauffeur service in Australia. Flight mapping, fixed rates, and 4.9★ rated drivers. Book your luxury airport transfer online today.",
};

export default function Home() {
  const homeFaqs = [
    {
      question: "What Is The Seating Capacity Of Your Chauffeured Cars?",
      answer: "Our fleet ranges from luxury sedans seating up to 3 passengers, to SUVs for 4, People Movers for 7, and minibuses/coaches for larger groups."
    },
    {
      question: "How Can I Pay For A Chauffeured Car From Auzzie?",
      answer: "We accept all major credit cards including Visa, MasterCard, and American Express. Corporate accounts are also available."
    },
    {
      question: "Does Auzzie Charge Cancellation Fees?",
      answer: "Cancellations made more than 24 hours in advance generally incur no fee. Please refer to our Terms & Conditions for full details."
    },
    {
      question: "How Far In Advance Can I Book With Auzzie?",
      answer: "You can book as far in advance as you like. We recommend at least 24 hours in advance to ensure vehicle availability."
    }
  ];

  return (
    <main>
      <Navbar />
      <FAQSchema pairs={homeFaqs} />
      <Hero
        title="Auzzie Chauffeur Service"
        subtitle="Moving you in comfort and style wherever you need to go."
      />
      <ServiceFeatures />
      <ServiceGallery />
      <NationalCoverage />
      <ImageTiles />
      <TrustedBy />
      <Testimonials />
      <BookingCTA />
      <FAQ />
      <ContactHelp />
      <Footer />
    </main>
  );
}
