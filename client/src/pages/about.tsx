import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Truck, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              About Retimaca
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miami's trusted partner for premium restaurant wood supply since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Our Story
              </h2>
              <p className="text-lg mb-6">
                Founded in 2009, Retimaca began as a family business with a simple mission: 
                to provide Miami's restaurants with the highest quality cooking wood available. 
                What started as a small operation serving local pizzerias has grown into 
                Miami-Dade County's premier commercial wood supplier.
              </p>
              <p className="text-lg mb-6">
                We understand that great food starts with quality ingredients, and that includes 
                the wood used in your ovens and grills. Every piece of wood we supply is 
                carefully selected, properly kiln-dried, and certified to meet the strict 
                standards required for commercial food service.
              </p>
              <p className="text-lg">
                Today, we're proud to serve over 150 restaurants across Miami-Dade County, 
                from intimate bistros to world-renowned steakhouses. Our commitment to quality, 
                reliability, and exceptional service has made us the trusted choice for 
                Miami's culinary professionals.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Retimaca wood storage facility" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--primary-brown))" }} />
                <h4 className="text-xl font-semibold mb-4">Quality First</h4>
                <p className="text-gray-600">
                  Every piece of wood meets our rigorous quality standards and restaurant requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--accent-green))" }} />
                <h4 className="text-xl font-semibold mb-4">Family Values</h4>
                <p className="text-gray-600">
                  As a family business, we treat every customer like part of our extended family.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--secondary-chocolate))" }} />
                <h4 className="text-xl font-semibold mb-4">Reliability</h4>
                <p className="text-gray-600">
                  Consistent delivery schedules and dependable service you can count on.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--accent-green))" }} />
                <h4 className="text-xl font-semibold mb-4">Food Safety</h4>
                <p className="text-gray-600">
                  All products are certified and meet USDA standards for commercial food service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards to ensure our wood products are safe and suitable for commercial food service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Badge variant="outline" className="mb-4 text-lg px-4 py-2">USDA Certified</Badge>
                <h4 className="text-xl font-semibold mb-4">USDA Standards</h4>
                <p className="text-gray-600">
                  All our wood products meet strict USDA standards for firewood and unprocessed wood used in food service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Badge variant="outline" className="mb-4 text-lg px-4 py-2">FL State Approved</Badge>
                <h4 className="text-xl font-semibold mb-4">Florida State Certified</h4>
                <p className="text-gray-600">
                  Certificate – Section 581.031F.S./Rule 5B-65 – DPI FW 2017-01. Approved by the State of Florida.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Food Safe</Badge>
                <h4 className="text-xl font-semibold mb-4">Food Safety Compliant</h4>
                <p className="text-gray-600">
                  Our wood is kiln-dried and processed to eliminate pests and contaminants, ensuring food safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the family behind Miami's premier restaurant wood supplier
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--primary-brown))" }}>
                    The Retimaca Family
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our family business is built on generations of experience in wood processing and 
                    a deep understanding of the restaurant industry's needs. With my wife, son, and daughter 
                    all involved in day-to-day operations, we ensure that every customer receives the personal 
                    attention and quality service that only a family business can provide.
                  </p>
                  <p className="text-lg text-gray-600">
                    From taking your order to delivering your wood, our family is committed to supporting 
                    your restaurant's success with reliable service and premium products.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
