import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import BookingCTA from "@/components/BookingCTA";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";

// Helper to capitalize words
const formatName = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default async function CityAirportTransfersPage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const cityRaw = resolvedParams.city;

    if (!cityRaw) return null; // Handle potential undefined case safely

    const cityName = formatName(cityRaw);
    const pageTitle = `${cityName} Airport Transfers`;

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: cityName, href: `/locations/${cityRaw}` },
        { label: pageTitle },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={pageTitle}
                subtitle={`Professional, experienced and courteous chauffeurs and well-appointed vehicles to get you to and from ${cityName} Airport in comfort.`}
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
