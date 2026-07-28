import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import AboutSection from "../../components/home/AboutSection";
import ServicesSection from "../../components/home/ServicesSection";
import TechnologySection from "../../components/home/TechnologySection";
import JourneySection from "../../components/home/JourneySection";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import TeamSection from "../../components/home/TeamSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import BeforeAfterSection from "../../components/home/BeforeAfterSection";



const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <JourneySection />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialsSection />
      <BeforeAfterSection />

    </>
  );
};

export default Home;


// const Home = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">

//       <h1 className="text-5xl font-bold">

//         JP Dental Clinic

//       </h1>

//     </div>
//   );
// };

// export default Home;

