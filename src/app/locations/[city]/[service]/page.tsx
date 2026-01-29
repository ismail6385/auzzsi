import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";

const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function CityServicePage({ params }: { params: Promise<{ city: string, service: string }> }) {
    const resolvedParams = await params;
    const serviceName = formatTitle(resolvedParams.service);
    const cityRaw = resolvedParams.city;
    const cityName = cityRaw.charAt(0).toUpperCase() + cityRaw.slice(1);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: cityName, href: `/locations/${cityRaw}` },
        { label: serviceName },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={serviceName}
                subtitle={`Premium ${serviceName} in ${cityName}.`}
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
