import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our chauffeur services, booking process, and more."
                showStats={false}
            />
            <FAQ />
            <ContactHelp />
            <Footer />
        </main>
    );
}
