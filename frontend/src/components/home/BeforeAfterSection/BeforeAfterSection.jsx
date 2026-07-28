// frontend/src/components/home/BeforeAfterSection.jsx
import { ArrowRight, Sparkles, ArrowRightLeft } from "lucide-react";
import { Link } from "react-router-dom";

import case1 from "../../../assets/gallery/case-1.jpg";
import case2 from "../../../assets/gallery/case-2.jpg";
import case3 from "../../../assets/gallery/case-3.jpg";
import case4 from "../../../assets/gallery/case-4.jpg";
import case5 from "../../../assets/gallery/case-5.jpg";
import case6 from "../../../assets/gallery/case-6.jpg";
import case7 from "../../../assets/gallery/case-7.jpg";
import case8 from "../../../assets/gallery/case-8.jpg";
import case9 from "../../../assets/gallery/case-9.jpg";

// Each case has its own before and after image
// case-1 BEFORE | case-2 AFTER
// case-3 BEFORE | case-4 AFTER
// etc.
const cases = [
  {
    id: "case-1",
    before: case1,
    after: case2,
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
  },
  {
    id: "case-2",
    before: case3,
    after: case4,
    title: "Dental Implant",
    category: "Implant Dentistry",
  },
  {
    id: "case-3",
    before: case5,
    after: case6,
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
  },
  {
    id: "case-4",
    before: case7,
    after: case8,
    title: "Orthodontic Treatment",
    category: "Braces & Aligners",
  },
  {
    id: "case-5",
    before: case9,
    after: case1,
    title: "Porcelain Veneers",
    category: "Smile Design",
  },
  {
    id: "case-6",
    before: case2,
    after: case3,
    title: "Full Mouth Rehabilitation",
    category: "Advanced Dentistry",
  },
  {
    id: "case-7",
    before: case4,
    after: case5,
    title: "Root Canal Treatment",
    category: "Endodontics",
  },
  {
    id: "case-8",
    before: case6,
    after: case7,
    title: "Dental Crown & Bridge",
    category: "Restorative Dentistry",
  },
  {
    id: "case-9",
    before: case8,
    after: case9,
    title: "Gum Treatment",
    category: "Periodontics",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-[#01D3BE]/10 text-[#01D3BE] px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
            <Sparkles size={16} />
            BEFORE & AFTER
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Beautiful Smiles
            <span className="text-[#01D3BE] block md:inline">
              {" "}Real Results
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
            Explore actual smile transformations completed by our dental
            specialists. Every case reflects personalized treatment,
            precision and exceptional care.
          </p>
        </div>

        {/* Gallery Grid - 3 columns for 9 cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16">
          {cases.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              
              {/* Before Image */}
              <div className="relative">
                <img
                  src={item.before}
                  alt={`${item.title} - Before`}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEFORE
                </span>
                <span className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.id}
                </span>
              </div>
              
              {/* Arrow Divider */}
              <div className="relative flex items-center justify-center -mt-3 -mb-3 z-10">
                <div className="bg-[#01D3BE] rounded-full p-1.5 shadow-lg">
                  <ArrowRightLeft size={16} className="text-white" />
                </div>
              </div>
              
              {/* After Image */}
              <div className="relative">
                <img
                  src={item.after}
                  alt={`${item.title} - After`}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#01D3BE] text-white text-xs font-bold px-3 py-1 rounded-full">
                  AFTER
                </span>
              </div>

              {/* Content */}
              <div className="p-4 border-t border-gray-100">
                <span className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {item.id.toUpperCase().replace('-', ' ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Cases Link */}
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-[#01D3BE] font-semibold hover:gap-3 transition-all text-sm md:text-base"
          >
            View All Cases
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#01D3BE] to-cyan-500 rounded-[30px] md:rounded-[40px] p-6 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-4xl font-bold">
              Imagine Your Smile Transformation
            </h2>
            <p className="mt-2 md:mt-3 text-cyan-100 text-sm md:text-lg">
              Schedule a consultation and discover what's possible with
              modern dentistry at JP Dental Clinic.
            </p>
          </div>
          <Link
            to="/appointment"
            className="bg-white text-[#01D3BE] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold inline-flex items-center gap-2 md:gap-3 hover:scale-105 transition flex-shrink-0 text-sm md:text-base"
          >
            Book Consultation
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;