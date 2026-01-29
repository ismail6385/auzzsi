import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServiceGallery from "@/components/ServiceGallery";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Our Services"
                subtitle="From airport transfers to special events, we offer a comprehensive range of luxury transport solutions."
                showStats={false}
            />
            <ServiceFeatures />
            <ServiceGallery />
            <BookingCTA />
            <Footer />
        </main>
    );
}
