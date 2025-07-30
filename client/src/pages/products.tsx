import { Header } from "@/components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Flame, Clock, Thermometer } from "lucide-react";

export default function Products() {
  const woodTypes = [
    {
      name: "Premium Oak",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "The gold standard for steakhouses and grilling. Premium oak provides long burn times with consistent heat output and excellent flavor enhancement.",
      features: ["Long burn time", "Consistent heat", "Excellent for grilling", "Minimal smoke"],
      bestFor: ["Steakhouses", "Grilling", "General cooking"],
      badge: "Most Popular",
      badgeVariant: "default" as const
    },
    {
      name: "Hickory",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Perfect for BBQ restaurants and smokers. Hickory delivers a strong, distinctive flavor that's become synonymous with authentic barbecue.",
      features: ["Strong flavor", "Great for smoking", "High heat output", "Long burning"],
      bestFor: ["BBQ restaurants", "Smoking", "Ribs and brisket"],
      badge: "BBQ Choice",
      badgeVariant: "secondary" as const
    },
    {
      name: "Cherry",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "The premium choice for pizza ovens. Cherry wood provides mild, sweet flavor that enhances food without overpowering delicate ingredients.",
      features: ["Mild sweet flavor", "Beautiful color", "Clean burning", "Food-friendly smoke"],
      bestFor: ["Pizza ovens", "Poultry", "Pork", "Delicate foods"],
      badge: "Pizza Favorite",
      badgeVariant: "destructive" as const
    },
    {
      name: "Apple Wood",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Subtle, fruity flavor perfect for fine dining establishments. Apple wood provides a delicate smoke that complements rather than dominates.",
      features: ["Subtle fruity flavor", "Gentle smoke", "Even burning", "Premium quality"],
      bestFor: ["Fine dining", "Poultry", "Pork", "Fish"],
      badge: "Specialty",
      badgeVariant: "outline" as const
    },
    {
      name: "Pecan",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Rich, nutty flavor ideal for southern cuisine and seafood restaurants. Pecan wood burns clean and provides excellent flavor enhancement.",
      features: ["Rich nutty flavor", "Clean burning", "Medium heat", "Versatile use"],
      bestFor: ["Southern cuisine", "Seafood", "Poultry", "Vegetables"],
      badge: "Regional Special",
      badgeVariant: "outline" as const
    },
    {
      name: "Mixed Hardwood",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "A carefully balanced blend of premium hardwoods. Perfect for restaurants that want consistent performance with varied flavor profiles.",
      features: ["Balanced flavor", "Consistent burn", "Cost effective", "Reliable supply"],
      bestFor: ["General cooking", "Volume users", "Mixed cuisines"],
      badge: "Value Choice",
      badgeVariant: "secondary" as const
    }
  ];

  const additionalProducts = [
    {
      name: "Wood Chips",
      description: "Perfect for adding smoky flavor without the full heat of logs",
      sizes: ["5lb bags", "10lb bags", "Bulk quantities"]
    },
    {
      name: "Wood Chunks",
      description: "Ideal for gas grills and shorter cooking times",
      sizes: ["3-4 inch pieces", "Various wood types", "Restaurant packaging"]
    },
    {
      name: "Kiln-Dried Logs",
      description: "Premium kiln-dried logs for immediate use",
      sizes: ["16-18 inch lengths", "Split and ready", "Moisture content <20%"]
    },
    {
      name: "Natural Charcoal",
      description: "High-quality hardwood charcoal for traditional grilling",
      sizes: ["Restaurant grade", "Long burning", "Minimal ash production"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Premium Restaurant Wood Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pizza oven perfection to steakhouse grilling, we supply the right wood 
              for every culinary need in Miami-Dade County
            </p>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Thermometer className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--primary-brown))" }} />
              <h4 className="font-semibold mb-2">Kiln Dried</h4>
              <p className="text-sm text-gray-600">Moisture content below 20% for optimal burning</p>
            </div>
            <div className="text-center">
              <Flame className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--accent-green))" }} />
              <h4 className="font-semibold mb-2">Food Safe</h4>
              <p className="text-sm text-gray-600">USDA certified for commercial food service</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--secondary-chocolate))" }} />
              <h4 className="font-semibold mb-2">Fast Delivery</h4>
              <p className="text-sm text-gray-600">2-3 day delivery throughout Miami-Dade</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" style={{ color: "hsl(var(--primary-brown))" }} />
              <h4 className="font-semibold mb-2">Expert Support</h4>
              <p className="text-sm text-gray-600">Professional advice for your cooking needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Wood Types */}
      <section className="section-padding section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Premium Wood Types
            </h2>
            <p className="text-xl text-gray-600">
              Each wood type is carefully selected for specific cooking applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {woodTypes.map((wood, index) => (
              <Card key={index} className="wood-product-card h-full">
                <div className="relative">
                  <img 
                    src={wood.image} 
                    alt={`${wood.name} for restaurants`} 
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    variant={wood.badgeVariant} 
                    className="absolute top-4 right-4"
                  >
                    {wood.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: "hsl(var(--primary-brown))" }}>
                    {wood.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {wood.description}
                  </p>
                  
                  <div className="mb-4">
                    <h6 className="font-semibold mb-2">Features:</h6>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {wood.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="font-semibold mb-2">Best For:</h6>
                    <div className="flex flex-wrap gap-2">
                      {wood.bestFor.map((use, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Additional Products
            </h2>
            <p className="text-xl text-gray-600">
              Complete your restaurant's wood supply needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalProducts.map((product, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-4" style={{ color: "hsl(var(--primary-brown))" }}>
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.sizes.map((size, i) => (
                      <li key={i}>• {size}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for pricing and delivery information. 
              Our team will help you choose the perfect wood for your restaurant's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary-custom text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="text-lg border-2"
                style={{ borderColor: "hsl(var(--primary-brown))", color: "hsl(var(--primary-brown))" }}
              >
                <a href="tel:(305)555-9663" className="flex items-center">
                  Call (305) 555-WOOD
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
