import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import PersonalTraining from "@/components/home/PersonalTraining";
import CoachingStaff from "@/components/home/CoachingStaff";
import Facilities from "@/components/home/Facilities";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Branches from "@/components/home/Branches";
import EnquirySection from "@/components/home/EnquirySection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <AboutSection />

      <TrainingPrograms />

      <PersonalTraining />

      <CoachingStaff />

      <Facilities />

      <Gallery />

      <Testimonials />

      <Branches />

      <EnquirySection />

      <Footer />
    </main>
  );
}