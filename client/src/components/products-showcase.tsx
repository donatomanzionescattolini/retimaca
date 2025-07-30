import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TreePine } from "lucide-react";

export function ProductsShowcase() {
  const products = [
    {
      name: "Premium Oak",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Perfect for steakhouses and grilling. Long burn time with excellent flavor.",
      badge: "Restaurant Grade",
      badgeVariant: "default" as const
    },
    {
      name: "Hickory",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Ideal for BBQ restaurants and smokers. Strong, distinctive flavor profile.",
      badge: "Popular Choice",
      badgeVariant: "secondary" as const
    },
    {
      name: "Cherry",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Premium choice for pizza ovens. Mild, sweet flavor that enhances food.",
      badge: "Pizza Favorite",
      badgeVariant: "destructive" as const
    },
    {
      name: "Apple Wood",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Subtle, fruity flavor perfect for poultry and pork dishes.",
      badge: "Specialty",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
            Premium Restaurant Wood Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pizza oven perfection to steakhouse grilling, we supply the right wood for every culinary need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="wood-product-card text-center p-6">
              <img 
                src={product.image} 
                alt={`${product.name} for restaurants`} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h5 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--primary-brown))" }}>
                {product.name}
              </h5>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>
              <Badge variant={product.badgeVariant}>
                {product.badge}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button className="btn-primary-custom text-lg">
              <TreePine className="mr-2 h-5 w-5" />
              View All Wood Types
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
