import { CheckCircle2, Award, ShieldCheck, Clock3 } from "lucide-react";
import doctorImage1 from "../../../assets/doctors/doctor-1.jpg";
import doctorImage2 from "../../../assets/doctors/doctor-2.jpg";

const features = [
  "Advanced Digital Dentistry",
  "Experienced Dental Specialists",
  "Modern Painless Procedures",
  "Personalized Treatment Plans",
];

const cards = [
  {
    icon: <Award size={28} />,
    title: "15+ Years",
    text: "Delivering trusted dental care with excellence.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified Clinic",
    text: "Following international sterilization protocols.",
  },
  {
    icon: <Clock3 size={28} />,
    title: "Flexible Hours",
    text: "Convenient appointments for busy schedules.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT - Doctors Section */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#01D3BE]/20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-cyan-200/30 blur-3xl"></div>

            {/* Section Label */}
            <div className="mb-8">
              <span className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] font-semibold px-5 py-2 rounded-full text-sm">
                MEET THE DOCTORS
              </span>
            </div>

            {/* Two Doctors Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Doctor 1 */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctorImage1}
                    alt="Dr. Jigna V Raja"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  {/* Badge */}
                  {/* <div className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    ENDODONTIST & IMPLANTOLOGIST
                  </div> */}
                  
                  <h3 className="text-xl font-bold text-slate-900">Dr. Jigna V Raja</h3>
                  <p className="text-sm text-[#01D3BE] font-semibold mt-1 mb-4">LEAD DENTIST</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>BDS, MDS- Govt. Dental College, Bangalore</p>
                    <p>17+ years clinical experience</p>
                    <p>University Rank Holder</p>
                    <p>Best Research Award- Hiroshima 2011</p>
                    <p>15th World Tobacco Conf., Singapore</p>
                  </div>

                  <button className="mt-6 w-full bg-[#01D3BE] hover:bg-teal-600 transition text-white px-6 py-3 rounded-full font-semibold text-sm">
                    Book Consultation
                  </button>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctorImage2}
                    alt="Dr. Jigna V Raja"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  {/* Badge */}
                  {/* <div className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    LEAD DENTIST
                  </div> */}
                  
                  <h3 className="text-xl font-bold text-slate-900">Dr. Padmavati Malladad</h3>
                  <p className="text-sm text-[#01D3BE] font-semibold mt-1 mb-4">Endodontist & Implantologist</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>BDS- Bapuji Dental College, Davangere</p>
                    <p>13+ years clinical experience</p>
                    <p>Specialist in Endodontics</p>
                    <p>Expert in Dental Implantology</p>
                    <p>Known for gentle, pain-free approach</p>
                  </div>

                  <button className="mt-6 w-full bg-[#01D3BE] hover:bg-teal-600 transition text-white px-6 py-3 rounded-full font-semibold text-sm">
                    Book Consultation
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT - Content */}
          <div>

            <span className="inline-block bg-[#01D3BE]/10 text-[#01D3BE] font-semibold px-5 py-2 rounded-full mb-6 text-sm">
              ABOUT JP DENTAL
            </span>

            <h2 className="text-5xl font-bold leading-tight text-slate-900">
              Two specialist doctors.
              <br />
              <span className="text-[#01D3BE]"> One shared </span>
              commitment to exceptional, compassionate care.
            </h2>

            <p className="mt-6 text-lg text-gray-600 italic">
              "Behind Your Smile"
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-8">
              At JP Dental Clinic, we combine advanced dental technology,
              compassionate care and experienced specialists to provide
              comprehensive dental treatments for patients of every age.
              Our commitment is simple: Comfortable treatment, transparent
              communication and long-lasting results.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#01D3BE]" size={24} />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 duration-300"
                >
                  <div className="text-[#01D3BE]">{card.icon}</div>
                  <h4 className="mt-4 text-xl font-bold">{card.title}</h4>
                  <p className="mt-3 text-gray-500">{card.text}</p>
                </div>
              ))}
            </div>

            <button className="mt-12 bg-[#01D3BE] hover:bg-teal-600 transition text-white px-10 py-4 rounded-full font-semibold">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;