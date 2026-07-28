import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Clock3,
  SmilePlus,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={34} />,
    title: "World-Class Sterilization",
    description:
      "Strict infection control with Class B autoclaves and international sterilization protocols for complete patient safety.",
  },
  {
    icon: <HeartHandshake size={34} />,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is tailored to your goals, comfort, lifestyle and long-term oral health.",
  },
  {
    icon: <Stethoscope size={34} />,
    title: "Experienced Specialists",
    description:
      "Our highly trained dentists combine years of expertise with the latest clinical techniques.",
  },
  {
    icon: <SmilePlus size={34} />,
    title: "Pain-Free Dentistry",
    description:
      "Modern anesthesia techniques and gentle treatment methods ensure a relaxed experience.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "Flexible Scheduling",
    description:
      "Morning, evening and emergency appointments designed around your busy lifestyle.",
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Transparent Treatment",
    description:
      "Clear diagnosis, digital treatment planning and honest pricing before any procedure begins.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex bg-[#01D3BE]/10 text-[#01D3BE] px-5 py-2 rounded-full font-semibold">

            WHY CHOOSE JP DENTAL

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Why Thousands of Patients
            <span className="text-[#01D3BE]"> Trust Us</span>

          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Combining advanced technology, compassionate care and experienced
            specialists, we deliver exceptional dental experiences focused on
            comfort, precision and long-term oral health.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group bg-slate-50 rounded-[30px] p-8 hover:bg-[#01D3BE] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#01D3BE]/10 text-[#01D3BE] flex items-center justify-center group-hover:bg-white group-hover:text-[#01D3BE] transition">

                {feature.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold">

                {feature.title}

              </h3>

              <p className="mt-4 leading-8 text-gray-600 group-hover:text-cyan-100">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-gradient-to-r from-[#01D3BE] to-cyan-500 rounded-[40px] p-12 text-white">

          <div className="grid lg:grid-cols-3 gap-10 text-center">

            <div>

              <h3 className="text-5xl font-bold">

                15+

              </h3>

              <p className="mt-2">

                Years of Excellence

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold">

                10,000+

              </h3>

              <p className="mt-2">

                Happy Patients

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold">

                4.9★

              </h3>

              <p className="mt-2">

                Google Rating

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;