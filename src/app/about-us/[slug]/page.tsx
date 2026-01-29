import Navbar from "@/components/Navbar";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";

const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function AboutSubPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const pageTitle = formatTitle(resolvedParams.slug);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: pageTitle },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={pageTitle}
                subtitle=""
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
