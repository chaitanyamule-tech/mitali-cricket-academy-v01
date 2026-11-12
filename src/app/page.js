
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BusinessSwitcher from "@/components/home/BusinessSwitcher";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import EnquirySection from "@/components/home/EnquirySection";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      {/* Common Navbar */}
      <Navbar />

      {/* Common Hero */}
      <Hero />

      {/* Branch selector + branch-specific content */}
      <BusinessSwitcher />

      {/* Common Sections */}
      <Gallery />

      <Testimonials />

      <EnquirySection />

      {/* Common Footer */}
      <Footer />
    </main>
  );
}
