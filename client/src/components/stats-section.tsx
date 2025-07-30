import { useTranslation } from "react-i18next";

export function StatsSection() {
  const { t } = useTranslation();
  
  const stats = [
    { number: "150+", label: t('stats.restaurants') },
    { number: "500+", label: t('stats.deliveries') },
    { number: "15+", label: t('stats.experience') },
    { number: "100%", label: t('stats.coverage') }
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
