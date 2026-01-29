import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";

const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const policyTitle = formatTitle(resolvedParams.slug);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Policies", href: "/about-us/our-policies" },
        { label: policyTitle },
    ];

    return (
        <main>
            <InnerHero
                title={policyTitle}
                subtitle="Policy & Compliance"
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
