import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DriverProfile from "@/components/DriverProfile";
import NationalCoverage from "@/components/NationalCoverage";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Auzzie Chauffeur | Learn Our History",
    description: "Learn about Auzzie Chauffeur, Australia's premier chauffeur service. Our mission, values, and commitment to excellence in ground transport.",
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="About Auzzsi"
                subtitle="Australia's premier chauffeur service, dedicated to excellence, comfort, and reliability."
                showStats={true}
            />
            <DriverProfile />
            <NationalCoverage />
            <TrustedBy />
            <Footer />
        </main>
    );
}
