const stats = [
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "10K+",
    title: "Happy Patients",
  },
  {
    number: "4.9★",
    title: "Google Rating",
  },
  {
    number: "25+",
    title: "Dental Experts",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300"
            >
              <h2 className="text-5xl font-bold text-[#01D3BE]">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;