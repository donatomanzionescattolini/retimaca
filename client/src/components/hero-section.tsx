import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Flame, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section 
      className="hero-section flex items-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold mb-6">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl mb-8 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button className="btn-primary-custom text-lg">
                <Flame className="mr-2 h-5 w-5" />
                {t('hero.viewProducts')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="btn-secondary-custom text-lg">
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.getQuote')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
