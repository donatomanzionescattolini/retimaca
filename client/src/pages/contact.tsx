import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Truck, Award } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Contact Retimaca
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to supply your Miami restaurant with premium cooking wood? 
              Get in touch with our team for personalized service and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Service Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--primary-brown))" }} />
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-sm text-gray-600">Mon-Fri: 8am - 5pm</p>
                <p className="text-sm text-gray-600">Sat-Sun: Emergency only</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--accent-green))" }} />
                <h4 className="font-semibold mb-2">Service Area</h4>
                <p className="text-sm text-gray-600">All of Miami-Dade County</p>
                <p className="text-sm text-gray-600">Restaurant delivery only</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--secondary-chocolate))" }} />
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-sm text-gray-600">2-3 business days</p>
                <p className="text-sm text-gray-600">Scheduled routes available</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--primary-brown))" }} />
                <h4 className="font-semibold mb-2">Quality Guaranteed</h4>
                <p className="text-sm text-gray-600">USDA certified wood</p>
                <p className="text-sm text-gray-600">Restaurant grade quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Service Areas Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Miami-Dade County Coverage
            </h2>
            <p className="text-xl text-gray-600">
              We deliver premium restaurant wood throughout Miami-Dade County
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <ul className="space-y-2">
                  <li>• Miami Beach</li>
                  <li>• Downtown Miami</li>
                  <li>• Brickell</li>
                  <li>• Coral Gables</li>
                  <li>• Coconut Grove</li>
                  <li>• Wynwood</li>
                  <li>• Design District</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Aventura</li>
                  <li>• Bal Harbour</li>
                  <li>• Doral</li>
                  <li>• Homestead</li>
                  <li>• Kendall</li>
                  <li>• Pinecrest</li>
                  <li>• And more...</li>
                </ul>
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h4 className="font-semibold mb-3" style={{ color: "hsl(var(--primary-brown))" }}>
                  Delivery Notes:
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Commercial restaurant deliveries only</li>
                  <li>• Minimum order quantities may apply</li>
                  <li>• Special delivery arrangements available</li>
                  <li>• Emergency delivery service upon request</li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Retimaca delivery truck serving Miami restaurants" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
