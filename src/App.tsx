import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IdentificationSection } from './components/IdentificationSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedTreatmentsSection } from './components/FeaturedTreatmentsSection';
import { IntimateAestheticsSection } from './components/IntimateAestheticsSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { SpaceSection } from './components/SpaceSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyCta } from './components/MobileStickyCta';
import { InteractiveAssessmentModal } from './components/InteractiveAssessmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { DirectionsModal } from './components/DirectionsModal';

export default function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  const openAssessment = () => setAssessmentModalOpen(true);
  const closeAssessment = () => setAssessmentModalOpen(false);

  const openTreatmentDetail = (id: string) => setSelectedTreatmentId(id);
  const closeTreatmentDetail = () => setSelectedTreatmentId(null);

  const openDirections = () => setDirectionsModalOpen(true);
  const closeDirections = () => setDirectionsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2825] flex flex-col selection:bg-[#6D242C]/15 selection:text-[#6D242C]">
      
      {/* 1. Header Navigation */}
      <Header onOpenAssessment={openAssessment} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onOpenSpaceModal={openDirections}
          onOpenAssessment={openAssessment}
        />

        {/* 3. Identification & Philosophy Section */}
        <IdentificationSection />

        {/* 4. Choice & Categories (Facial, Corporal, Estética Íntima) */}
        <CategoriesSection />

        {/* 5. Featured Treatments (01 Fios, 02 Preenchimento, 03 Íntima) */}
        <FeaturedTreatmentsSection onOpenTreatmentModal={openTreatmentDetail} />

        {/* 6. Dedicated Intimate Aesthetics Section */}
        <IntimateAestheticsSection />

        {/* 7. Authority & Specialists (Dr. Deli Brito & Luciana Freire) */}
        <AuthoritySection />

        {/* 8. Results & Interactive Before/After Slider */}
        <ResultsSection />

        {/* 9. Authentic Patient Testimonials */}
        <TestimonialsSection />

        {/* 10. How It Works (4-Step Care Journey) */}
        <HowItWorksSection />

        {/* 11. Facilities (10x, Combos, PIX) */}
        <FacilitiesSection />

        {/* 12. Our Space in São Bernardo do Campo & Location */}
        <SpaceSection onOpenDirections={openDirections} />

        {/* 13. Minimalist FAQ */}
        <FaqSection />

        {/* 14. High-Impact Final CTA */}
        <FinalCtaSection onOpenAssessment={openAssessment} />
      </main>

      {/* 15. Legal and Information Footer */}
      <Footer />

      {/* Floating Interactive Conversion Elements */}
      <FloatingWhatsApp />
      <MobileStickyCta onOpenAssessment={openAssessment} />

      {/* Interactive Modals */}
      <InteractiveAssessmentModal
        isOpen={assessmentModalOpen}
        onClose={closeAssessment}
      />

      <TreatmentDetailModal
        treatmentId={selectedTreatmentId}
        onClose={closeTreatmentDetail}
      />

      <DirectionsModal
        isOpen={directionsModalOpen}
        onClose={closeDirections}
      />

    </div>
  );
}
