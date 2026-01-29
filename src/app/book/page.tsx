import { Metadata } from 'next';
import BookingPageContent from '@/components/BookingPageContent';

export const metadata: Metadata = {
    title: "Book a Chauffeur Online",
    description: "Book your premium airport transfer or private driver instantly. Secure online booking for Sydney, Melbourne, Brisbane, and nationwide.",
};

export default function BookingPage() {
    return <BookingPageContent />;
}
