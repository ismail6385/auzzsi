import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceGallery from "@/components/ServiceGallery";
import NationalCoverage from "@/components/NationalCoverage";
import DriverProfile from "@/components/DriverProfile";
import ImageTiles from "@/components/ImageTiles";
import TrustedBy from "@/components/TrustedBy";
import BookingCTA from "@/components/BookingCTA";
import Testimonials from "@/components/Testimonials";
import AppDownload from "@/components/AppDownload";
import FAQ from "@/components/FAQ";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        title="Australia's Chauffeur Service"
        subtitle="Moving you in comfort and style wherever you need to go."
      />
      <ServiceFeatures />
      <ServiceGallery />
      <NationalCoverage />
      <ImageTiles />
      <TrustedBy />
      <Testimonials />
      <BookingCTA />
      <AppDownload />
      <FAQ />
      <ContactHelp />
      <Footer />
    </main>
  );
}
