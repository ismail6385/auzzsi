import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.auzziechauffeur.com.au';

    // Base routes
    const routes = [
        '',
        '/book',
        '/contact-us',
        '/about-us',
        '/the-fleet',
        '/services',
        '/privacy-policy',
        '/terms-conditions',
        '/news',
        '/feedback',
        '/reviews',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    // Fetch dynamic news posts (if any)
    const { data: posts } = await supabase
        .from('posts')
        .select('slug, updated_at, created_at');

    const newsRoutes = (posts || []).map((post) => ({
        url: `${baseUrl}/news/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Locations and their sub-services
    const locations = [
        'sydney',
        'melbourne',
        'brisbane',
        'adelaide',
        'perth',
        'gold-coast',
        'hobart',
        'cairns-port-douglas',
    ];

    const locationServices = [
        '', // Main hub page
        '/airport-transfers',
        '/corporate-transfers',
        '/wedding-cars',
        '/hourly-chauffeur',
        '/cruise-ship-transfers',
        '/conferences-special-events',
        '/international-student-transfers',
        '/luxury-tours',
    ];

    const locationRoutes: MetadataRoute.Sitemap = [];

    locations.forEach(loc => {
        locationServices.forEach(service => {
            locationRoutes.push({
                url: `${baseUrl}/${loc}${service}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: service === '' ? 0.9 : 0.8, // Hubs higher priority than sub-pages
            });
        });
    });

    // General Service Main Pages
    const serviceRoutes = [
        '/services/airport-transfers',
        '/services/corporate-transfers',
        '/services/wedding-cars',
        '/services/hourly-chauffeur',
        '/services/cruise-ship-transfers',
        '/services/conferences-special-events',
        '/services/international-student-transfers',
        '/services/luxury-tours',
        '/services/all-day-hire',
        '/services/airline-cruise-crewing',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Policy Pages
    const policyRoutes = [
        '/about-us/our-policies',
        '/about-us/our-policies/cancellation-policy',
        '/about-us/our-policies/child-safety-policy',
        '/about-us/our-policies/confidentiality-policy',
        '/about-us/our-policies/data-retention-privacy-policy',
        '/about-us/our-policies/environmental-policy',
        '/about-us/our-policies/fatigue-management-policy',
        '/about-us/our-policies/social-responsibility-policy',
        '/about-us/our-policies/standards-conduct-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }));

    return [...routes, ...newsRoutes, ...locationRoutes, ...serviceRoutes, ...policyRoutes];
}
