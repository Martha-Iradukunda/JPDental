// frontend/src/components/home/JourneySection.jsx
import {
  CalendarDays,
  Handshake,
  Search,
  SmilePlus,
  ShieldCheck,
  Smile,
} from "lucide-react";

const journeySteps = [
  {
    step: "STEP 01",
    title: "Book",
    description: "Call, WhatsApp, or book online in seconds.",
    icon: <CalendarDays size={34} />,
  },
  {
    step: "STEP 02",
    title: "Consult",
    description: "Friendly one-on-one consultation with your doctor.",
    icon: <Handshake size={34} />,
  },
  {
    step: "STEP 03",
    title: "Diagnose",
    description: "Digital X-rays and a comprehensive oral examination.",
    icon: <Search size={34} />,
  },
  {
    step: "STEP 04",
    title: "Treat",
    description: "Comfortable, painless treatment using modern technology.",
    icon: <SmilePlus size={34} />,
  },
  {
    step: "STEP 05",
    title: "Follow-up",
    description: "Post-treatment care, reviews and oral hygiene guidance.",
    icon: <ShieldCheck size={34} />,
  },
  {
    step: "STEP 06",
    title: "Smile",
    description: "Walk out confident with a healthy, radiant smile.",
    icon: <Smile size={34} />,
  },
];

const JourneySection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#01D3BE]/10 text-[#01D3BE] font-semibold text-sm tracking-wide">
            YOUR JOURNEY
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Your Journey
            <span className="text-[#01D3BE] block md:inline">
              {" "}From First Visit to Perfect Smile
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
            Every patient follows a smooth, transparent treatment process
            designed to deliver exceptional care and lasting results.
          </p>
        </div>

        {/* Timeline - Mobile First */}
        <div className="relative mt-12 md:mt-20">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#01D3BE]/20 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {journeySteps.map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-start relative ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#01D3BE] border-2 md:border-4 border-white shadow-lg z-10 -translate-x-1/2"></div>

                {/* Content */}
                <div className={`pl-14 md:pl-0 w-full ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}>
                  <div className="bg-white rounded-2xl md:rounded-[32px] p-6 md:p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                    <div className={`flex items-center gap-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#01D3BE]/10 text-[#01D3BE] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-bold tracking-widest text-[#01D3BE]">
                          {item.step}
                        </p>
                        <h3 className="text-xl md:text-3xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className={`mt-3 md:mt-4 text-sm md:text-base text-gray-600 leading-6 md:leading-7 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for grid alignment on desktop */}
                <div className="hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-[#01D3BE] hover:bg-teal-600 transition text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold inline-flex items-center gap-2 md:gap-3 text-sm md:text-base">
            Start Your Journey Today
            <CalendarDays size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;