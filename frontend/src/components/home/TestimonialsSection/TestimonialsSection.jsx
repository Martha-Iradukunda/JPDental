import {
  Star,
  Play,
  Quote,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import patient1 from "../../../assets/testimonials/patient-1.jpg";
import patient2 from "../../../assets/testimonials/patient-2.jpg";
import patient3 from "../../../assets/testimonials/patient-3.jpg";

const testimonials = [
  {
    image: patient1,
    name: "Ananya R.",
    treatment: "Dental Implants",
    review:
      "Absolutely outstanding experience. The doctors explained every step and made the entire implant procedure completely painless. The clinic is modern, spotless, and the team is incredibly caring.",
    rating: 5,
  },
  {
    image: patient2,
    name: "Rohit K.",
    treatment: "Smile Makeover",
    review:
      "I finally have the smile I've always wanted. The attention to detail, advanced technology and professionalism exceeded all my expectations.",
    rating: 5,
  },
  {
    image: patient3,
    name: "Priya S.",
    treatment: "Root Canal",
    review:
      "I was nervous before visiting JP Dental, but the entire team made me feel relaxed. Completely pain-free treatment and wonderful follow-up care.",
    rating: 5,
  },
];

const videos = [
  {
    image: patient1,
    title: "Smile Makeover Journey",
    duration: "2:15",
  },
  {
    image: patient2,
    title: "Dental Implant Experience",
    duration: "1:48",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-5 py-2 rounded-full bg-[#01D3BE]/10 text-[#01D3BE] font-semibold">
            PATIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Loved By
            <span className="text-[#01D3BE]"> Thousands of Smiles</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Nothing makes us happier than seeing our patients smile with
            confidence. Here's what they say about their experience at
            JP Dental Clinic.
          </p>

        </div>

        {/* Google Rating */}

        <div className="mt-16 bg-white rounded-[36px] shadow-lg p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-4xl font-bold text-slate-900">
                Google Reviews
              </h3>

              <div className="flex items-center gap-2 mt-4">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className="fill-yellow-400 text-yellow-400"
                    size={28}
                  />
                ))}

              </div>

              <h2 className="text-6xl font-black mt-4 text-[#01D3BE]">
                4.9
              </h2>

              <p className="mt-2 text-gray-600">
                Based on 850+ Verified Reviews
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  10K+
                </h3>
                <p className="text-gray-600 mt-2">
                  Happy Patients
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  15+
                </h3>
                <p className="text-gray-600 mt-2">
                  Years
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  98%
                </h3>
                <p className="text-gray-600 mt-2">
                  Satisfaction
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-[#01D3BE]">
                  24/7
                </h3>
                <p className="text-gray-600 mt-2">
                  Support
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Reviews */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item)=>(
            <div
              key={item.name}
              className="bg-white rounded-[32px] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <Quote
                className="text-[#01D3BE]"
                size={42}
              />

              <div className="flex gap-1 mt-6">

                {[...Array(item.rating)].map((_,i)=>(
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h4 className="font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-[#01D3BE]">
                    {item.treatment}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Video Testimonials */}

        <div className="mt-24">

          <div className="flex items-center justify-between">

            <h2 className="text-4xl font-bold">
              Video Testimonials
            </h2>

            <button className="flex items-center gap-2 text-[#01D3BE] font-semibold">
              View All
              <ChevronRight size={18}/>
            </button>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {videos.map((video)=>(
              <div
                key={video.title}
                className="relative rounded-[36px] overflow-hidden group shadow-xl"
              >

                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/35"></div>

                <button className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-white text-[#01D3BE] flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                    <Play
                      className="fill-[#01D3BE]"
                      size={34}
                    />

                  </div>

                </button>

                <div className="absolute bottom-6 left-6 text-white">

                  <h3 className="text-2xl font-bold">
                    {video.title}
                  </h3>

                  <p className="mt-2 opacity-90">
                    Duration • {video.duration}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 bg-gradient-to-r from-[#01D3BE] to-cyan-500 rounded-[40px] p-12 text-white flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>

            <h2 className="text-4xl font-bold">
              Ready to Transform Your Smile?
            </h2>

            <p className="mt-4 text-cyan-100 text-lg">
              Join thousands of satisfied patients who trust JP Dental Clinic
              for exceptional dental care.
            </p>

          </div>

          <button className="bg-white text-[#01D3BE] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition">

            <MessageCircle size={20}/>

            Book Consultation

          </button>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;