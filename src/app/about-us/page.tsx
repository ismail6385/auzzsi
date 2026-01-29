import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DriverProfile from "@/components/DriverProfile";
import NationalCoverage from "@/components/NationalCoverage";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

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
