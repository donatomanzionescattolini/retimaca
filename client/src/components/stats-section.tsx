export function StatsSection() {
  const stats = [
    { number: "150+", label: "Miami Restaurants Served" },
    { number: "500+", label: "Monthly Deliveries" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Miami-Dade Coverage" }
  ];

  return (
    <section className="stats-section section-padding text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="stat-number mb-2">{stat.number}</div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
