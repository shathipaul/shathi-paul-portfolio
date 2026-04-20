import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import NavigationSection from "@/components/NavigationSection";
import { services, pricingTiers, faqs } from "@/data/services";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Services | ${profile.firstName} ${profile.lastName}`,
  description:
    "Web development services — landing pages, business sites, e-commerce, blogs, and more. Transparent pricing, clean code.",
};

export default function ServicesRoute() {
  return (
    <>
      <ServicesPage services={services} pricingTiers={pricingTiers} faqs={faqs} />
      <NavigationSection />
    </>
  );
}
