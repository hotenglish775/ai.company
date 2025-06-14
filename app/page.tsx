import { HeroSection } from '@/components/home/HeroSection';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { ClientLogos } from '@/components/home/ClientLogos';
import { Testimonials } from '@/components/home/Testimonials';
import { CTABanner } from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <ServicesPreview />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </>
  );
}