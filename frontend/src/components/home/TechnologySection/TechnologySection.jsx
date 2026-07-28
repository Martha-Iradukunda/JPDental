import {
  ScanLine,
  Microscope,
  Sparkles,
  ScanSearch,
  ShieldCheck,
  Smile,
} from "lucide-react";

import techImage from "../../../assets/technology/technology-1.jpeg";

const technologies = [
  {
    icon: <ScanLine size={30} />,
    title: "Digital X-Ray",
    description:
      "90% less radiation than conventional X-rays. Instant, high-resolution diagnostic imaging for precise treatment planning.",
  },
  {
    icon: <Microscope size={30} />,
    title: "Microscope Dentistry",
    description:
      "Surgical-grade magnification for root canals and complex procedures — unparalleled precision in every treatment.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Laser Dentistry",
    description:
      "Minimally invasive laser treatments for gum therapy, whitening, and cavity detection — faster healing, less discomfort.",
  },
  {
    icon: <ScanSearch size={30} />,
    title: "3D Scanning",
    description:
      "Intraoral 3D scanners replace messy impressions — accurate digital models for implants, aligners, and crowns.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Autoclave Sterilization",
    description:
      "Hospital-grade sterilization protocols using Class B autoclaves, ensuring complete safety for every patient visit.",
  },
  {
    icon: <Smile size={30} />,
    title: "Digital Smile Design",
    description:
      "Preview your new smile before treatment begins. Digital mockups and wax-ups to co-create your ideal result.",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#01D3BE]/20 rounded-full blur-3xl"></div>

            <img
              src={techImage}
              alt="Advanced Dental Technology"
              className="relative rounded-[32px] shadow-2xl w-full object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-3xl font-bold text-[#01D3BE]">100%</h3>
              <p className="text-gray-600">
                Digital & Modern Equipment
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <span className="inline-flex items-center rounded-full bg-[#01D3BE]/10 text-[#01D3BE] px-5 py-2 font-semibold">
              Advanced Technology
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Dentistry Powered by
              <br />
              <span className="text-[#01D3BE]">
                Cutting-Edge Technology
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We invest in the latest diagnostic and treatment equipment so you
              receive the most precise, comfortable care possible.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {technologies.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#01D3BE]/10 text-[#01D3BE] flex items-center justify-center group-hover:bg-[#01D3BE] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;