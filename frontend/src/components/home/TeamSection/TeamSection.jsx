import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import team1 from "../../../assets/doctors/team-1.jpg";
import team2 from "../../../assets/doctors/team-2.jpg";
import team3 from "../../../assets/doctors/team-3.jpg";
import team4 from "../../../assets/doctors/team-4.jpg";
import team5 from "../../../assets/doctors/team-5.jpg";
import team6 from "../../../assets/doctors/team-6.jpg";


const specialties = [
  "Cosmetic Dentistry",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics & Braces",
  "Pediatric Dentistry",
  "Digital Smile Design",
];

const TeamSection = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= Images ================= */}

          <div className="relative">

            <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#01D3BE]/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 right-0 w-60 h-60 bg-cyan-200/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-2 gap-5">

              <img
                src={team1}
                alt="JP Dental Team"
                className="rounded-[28px] h-[280px] w-full object-cover shadow-xl hover:scale-105 duration-300"
              />

              <img
                src={team2}
                alt="JP Dental Team"
                className="rounded-[28px] h-[220px] mt-12 w-full object-cover shadow-xl hover:scale-105 duration-300"
              />

              <img
                src={team3}
                alt="JP Dental Team"
                className="rounded-[28px] h-[220px] -mt-10 w-full object-cover shadow-xl hover:scale-105 duration-300"
              />

              <img
                src={team4}
                alt="JP Dental Team"
                className="rounded-[28px] h-[280px] w-full object-cover shadow-xl hover:scale-105 duration-300"
              />
               <img
                src={team5}
                alt="JP Dental Team"
                className="rounded-[28px] h-[280px] w-full object-cover shadow-xl hover:scale-105 duration-300"
              />
               <img
                src={team6}
                alt="JP Dental Team"
                className="rounded-[28px] h-[280px] w-full object-cover shadow-xl hover:scale-105 duration-300"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-2xl px-8 py-6">

              <h3 className="text-4xl font-bold text-[#01D3BE]">
                25+
              </h3>

              <p className="text-gray-500">
                Dental Professionals
              </p>

            </div>

          </div>

          {/* ================= Content ================= */}

          <div>

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#01D3BE]/10 text-[#01D3BE] font-semibold tracking-wide">
              OUR GALLERY
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
              Meet the Experts& Patients
              <br />
              Behind Your
              <span className="text-[#01D3BE]">
                {" "}Perfect Smile
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              At JP Dental Clinic, our experienced dentists, specialists,
              hygienists and support staff work together to provide
              personalized dental care using modern technology and a
              patient-first approach.
            </p>

            {/* Specialties */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {specialties.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[#01D3BE]"
                  />

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-slate-50 rounded-3xl text-center p-6 hover:shadow-lg transition">

                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  15+
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Years Experience
                </p>

              </div>

              <div className="bg-slate-50 rounded-3xl text-center p-6 hover:shadow-lg transition">

                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  10K+
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Happy Patients
                </p>

              </div>

              <div className="bg-slate-50 rounded-3xl text-center p-6 hover:shadow-lg transition">

                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  4.9★
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Google Rating
                </p>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/doctors"
                className="inline-flex items-center gap-3 bg-[#01D3BE] hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Meet Our Doctors
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-3 border-2 border-[#01D3BE] text-[#01D3BE] hover:bg-[#01D3BE] hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamSection;