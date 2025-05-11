
import React from "react";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import CourseContent from "@/components/CourseContent";
import ResultsShowcaseSection from "@/components/ResultsShowcaseSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <HeroSection />
      <ProblemsSection />
      <ComparisonSection />
      <ResultsShowcaseSection />
      <FeaturesSection />
      <CourseContent />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
