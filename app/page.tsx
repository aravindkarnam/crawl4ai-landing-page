import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { DemoSection } from "@/components/layout/sections/demo";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Crawl4AI - Open source, high performant crawler for AI-ready data extraction",
  description: "GitHub's #1 trending crawler that delivers structured AI-ready data. Runs anywhere, Scales everywhere - All features free and open source",
  openGraph: {
    type: "website",
    url: "https://crawl4ai.com",
    title: "Crawl4AI - Open source, high performant crawler for AI-ready data extraction",
    description: "GitHub's #1 trending crawler that delivers structured AI-ready data. Runs anywhere, Scales everywhere - All features free and open source",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Crawl4AI - Open source, high performant crawler for AI-ready data extraction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Crawl4AI - Open source, high performant crawler for AI-ready data extraction",
    description: "GitHub's #1 trending crawler that delivers structured AI-ready data. Runs anywhere, Scales everywhere - All features free and open source",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <DemoSection/>
      <FeaturesSection />
      <BenefitsSection />
      {/* <ServicesSection /> */}
      <TestimonialSection />
      <CommunitySection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}
