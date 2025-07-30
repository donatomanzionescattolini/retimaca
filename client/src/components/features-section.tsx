import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FeaturesSection() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('features.family.title'),
      description: t('features.family.description'),
      color: "hsl(var(--primary-brown))"
    },
    {
      icon: Building,
      title: t('features.commercial.title'),
      description: t('features.commercial.description'),
      color: "hsl(var(--accent-green))"
    },
    {
      icon: Award,
      title: t('features.quality.title'),
      description: t('features.quality.description'),
      color: "hsl(var(--secondary-chocolate))"
    }
  ];

  return (
    <section className="section-padding section-bg-beige">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card h-full text-center p-6">
              <CardContent className="pt-6">
                <feature.icon 
                  className="h-12 w-12 mx-auto mb-4" 
                  style={{ color: feature.color }}
                />
                <h4 className="text-xl font-semibold mb-4" style={{ color: "hsl(var(--primary-brown))" }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
