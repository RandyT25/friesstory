import { HeroSection } from "@/components/home/HeroSection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { SignatureProductsSection } from "@/components/home/SignatureProductsSection";
import { WhyBelgianSection } from "@/components/home/WhyBelgianSection";
import { SauceProgramSection } from "@/components/home/SauceProgramSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { FranchiseCTASection } from "@/components/home/FranchiseCTASection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <SignatureProductsSection />
      <WhyBelgianSection />
      <SauceProgramSection />
      <ReviewsSection />
      <GallerySection />
      <FranchiseCTASection />
      <NewsletterSection />
    </>
  );
}
