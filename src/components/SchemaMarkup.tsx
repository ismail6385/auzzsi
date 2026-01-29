import Script from 'next/script';

export default function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Auzzsi Chauffeur Service",
        "url": "https://www.auzzsi.com.au",
        "logo": "https://www.auzzsi.com.au/logo.png",
        "description": "Australia's leading national chauffeur service providing premium airport transfers and corporate travel options.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Alexandra Parade",
            "addressLocality": "Fitzroy",
            "addressRegion": "VIC",
            "postalCode": "3065",
            "addressCountry": "AU"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "1300 615 165",
                "contactType": "customer service",
                "areaServed": "AU",
                "availableLanguage": "English"
            },
            {
                "@type": "ContactPoint",
                "telephone": "+61 2 9317 9000",
                "contactType": "customer service",
                "areaServed": "World",
                "availableLanguage": "English"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/auzzsichauffeur",
            "https://www.instagram.com/auzzsichauffeur",
            "https://www.linkedin.com/company/auzzsichauffeur"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Auzzsi Chauffeur Service",
        "image": "https://www.auzzsi.com.au/tile-driver.png",
        "telephone": "1300 615 165",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Alexandra Parade",
            "addressLocality": "Fitzroy",
            "addressRegion": "VIC",
            "postalCode": "3065",
            "addressCountry": "AU"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        }
    };

    return (
        <>
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </>
    );
}
