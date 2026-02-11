import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur News & Travel Blog | Auzzie Chauffeur | Stay Updated",
    description: "The latest news, travel guides, and luxury transport insights from the Auzzie Chauffeur team. Stay informed about our services nationwide.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
