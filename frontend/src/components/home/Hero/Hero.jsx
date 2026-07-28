import { ArrowRight, CalendarDays, Star, Phone, MessageCircle, Clock } from "lucide-react";
import heroImage from "../../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      
      {/* Top Bar */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2.5 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left - Contact Info */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <a href="tel:+919731240612" className="flex items-center gap-1.5 text-xs md:text-sm text-gray-700 hover:text-[#01D3BE] transition">
              <Phone size={15} className="text-[#01D3BE]" />
              <span className="hidden xs:inline">+91 9731240612</span>
            </a>
            
            <a href="https://wa.me/919731240612" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs md:text-sm text-gray-700 hover:text-[#25D366] transition">
              <MessageCircle size={15} className="text-[#25D366]" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
            </a>
            
            <button className="flex items-center gap-1.5 text-xs md:text-sm bg-[#01D3BE] text-white px-3 md:px-4 py-1.5 rounded-full hover:bg-teal-600 transition whitespace-nowrap">
              <CalendarDays size={14} />
              <span>Book</span>
            </button>
          </div>

          {/* Right - Reviews & Hours */}
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            {/* <div className="flex items-center gap-1">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-xs md:text-sm">5.0</span>
              <span className="text-xs md:text-sm text-gray-600 hidden sm:inline">All 5-star reviews</span>
            </div> */}
            
            <div className="flex items-center gap-1.5 text-xs md:text-sm">
              <Clock size={15} className="text-green-500" />
              <span className="font-medium text-green-600 hidden xs:inline">OPEN TODAY</span>
              <span className="text-gray-600 whitespace-nowrap">10:00AM-2:00PM</span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span className="text-gray-600 hidden sm:inline">5:00PM-9:00PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-16 min-h-[85vh]">
          {/* LEFT - Your existing left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white shadow-md rounded-full px-5 py-2 mb-8">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">Trusted by 10,000+ Happy Patients</span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">
              Experience
              <span className="text-[#01D3BE]"> painless dentistry </span>
              and expert dental care.
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
              From your first consultation to your perfect smile,
              our experienced dentists provide comfortable,
              advanced and affordable dental treatments.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#01D3BE] hover:bg-teal-600 transition text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3">
                Book Appointment
                <CalendarDays size={20} />
              </button>
              <button className="border border-slate-300 hover:border-[#01D3BE] hover:text-[#01D3BE] transition px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-[#01D3BE]">15+</h3>
                <p className="text-slate-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#01D3BE]">10K+</h3>
                <p className="text-slate-500">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#01D3BE]">4.9★</h3>
                <p className="text-slate-500">Google Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Your existing image section */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#01D3BE] rounded-[50px] blur-3xl opacity-20"></div>
            <img
              src={heroImage}
              alt="JP Dental Clinic"
              className="relative w-full object-cover rounded-[40px] shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-5">
              <h4 className="font-bold">Free Consultation</h4>
              <p className="text-slate-500 text-sm">Book today and get a smile assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;