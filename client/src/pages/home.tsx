import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductsShowcase } from "@/components/products-showcase";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactForm } from "@/components/contact-form";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      
      {/* Service Areas Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Commercial Restaurant Wood Supply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve Miami-Dade County with premium cooking wood for restaurants, 
              pizzerias, steakhouses, and commercial kitchens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Restaurant wood burning oven" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Serving Miami's Finest Restaurants
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                From South Beach to Downtown Miami, we deliver premium cooking wood to restaurants 
                that demand the highest quality for their wood-fired ovens, grills, and smokers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  Miami-Dade County Coverage
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  2-3 Day Delivery
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  Commercial Volume Pricing
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  Restaurant Quality Standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ProductsShowcase />
      <StatsSection />

      {/* About Section */}
      <section className="section-padding section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Miami restaurant kitchen with wood burning equipment" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Welcome to Retimaca
              </h2>
              <p className="text-lg mb-6">
                <strong>You've made an important and wise decision.</strong> You can TRUST Retimaca 
                to provide not only the Best Quality Restaurant Wood products, but also the Best Service 
                anywhere in Miami-Dade County.
              </p>
              <p className="text-lg mb-6">
                Call Us Mon-Fri 8am to 5pm. We are here for your restaurant. 
                <strong className="block mt-2">(305) 555-WOOD (9663)</strong>
              </p>
              <p className="mb-6">
                We also accept email orders at{" "}
                <a href="mailto:orders@retimaca.com" className="font-medium" style={{ color: "hsl(var(--primary-brown))" }}>
                  orders@retimaca.com
                </a>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold mb-2" style={{ color: "hsl(var(--primary-brown))" }}>
                    🏆 Certified Products
                  </h6>
                  <p className="text-sm text-gray-600">
                    All wood meets USDA standards and Florida state regulations for commercial food service.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold mb-2" style={{ color: "hsl(var(--primary-brown))" }}>
                    🚚 Reliable Delivery
                  </h6>
                  <p className="text-sm text-gray-600">
                    2-3 day delivery throughout Miami-Dade County with scheduled route service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
