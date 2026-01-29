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

export default async function AirportRoutePage({ params }: { params: Promise<{ city: string, route: string }> }) {
    const resolvedParams = await params;
    const routeName = formatTitle(resolvedParams.route);
    const cityRaw = resolvedParams.city;
    const cityName = cityRaw.charAt(0).toUpperCase() + cityRaw.slice(1);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: cityName, href: `/locations/${cityRaw}` },
        { label: "Airport Transfers", href: `/locations/${cityRaw}/airport-transfers` },
        { label: routeName },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={routeName}
                subtitle={`Fixed price luxury transfers for ${routeName}.`}
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
