import {
  Sparkles,
  Smile,
  ScanLine,
  ShieldCheck,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: <Smile size={42} />,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with veneers, teeth whitening and smile makeovers.",
  },
  {
    icon: <ScanLine size={42} />,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement using advanced implant technology.",
  },
  {
    icon: <Sparkles size={42} />,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter confident smile.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Root Canal",
    description:
      "Painless root canal procedures with modern equipment and expert care.",
  },
  {
    icon: <Stethoscope size={42} />,
    title: "Orthodontics",
    description:
      "Braces and invisible aligners to achieve perfectly aligned teeth.",
  },
  {
    icon: <Smile size={42} />,
    title: "General Dentistry",
    description:
      "Routine checkups, fillings, cleaning and preventive dental care.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] px-5 py-2 rounded-full font-semibold">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Complete Dental Care
            <span className="text-[#01D3BE]"> Under One Roof</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From preventive care to advanced cosmetic and restorative
            dentistry, we provide comprehensive dental solutions for every
            member of your family.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-[30px] border border-gray-100 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#01D3BE]/10 flex items-center justify-center text-[#01D3BE] group-hover:bg-[#01D3BE] group-hover:text-white transition">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-[#01D3BE] group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-[#01D3BE] to-cyan-500 text-white p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold">
              Need a personalized dental treatment?
            </h2>

            <p className="mt-4 text-cyan-100 text-lg">
              Schedule your consultation today and let our specialists help
              restore your perfect smile.
            </p>
          </div>

          <button className="bg-white text-[#01D3BE] font-bold px-8 py-4 rounded-full hover:scale-105 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;