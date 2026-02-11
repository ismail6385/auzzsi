import { Metadata } from "next";
import ContactUsContent from "@/components/ContactUsContent";

export const metadata: Metadata = {
    title: "Contact Us | Auzzie Chauffeur | 24/7 Support Online",
    description: "Get in touch with Auzzsi Chauffeur Service. 24/7 customer support for airport transfers and corporate travel enquiries."
};

export default function ContactPage() {
    return <ContactUsContent />;
}
