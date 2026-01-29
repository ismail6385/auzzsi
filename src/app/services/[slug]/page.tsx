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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const serviceName = formatTitle(resolvedParams.slug);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: serviceName },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={serviceName}
                subtitle={`Professional ${serviceName} tailored to your needs.`}
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
