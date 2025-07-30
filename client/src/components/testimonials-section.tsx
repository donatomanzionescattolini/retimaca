import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Retimaca's oak has transformed our steakhouse. The consistent quality and burn time gives our Miami Beach location the perfect sear every time.",
      author: "Chef Marco Rodriguez",
      restaurant: "Ocean Drive Steakhouse",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "Their cherry wood is perfect for our wood-fired pizza oven. Customers constantly compliment the authentic smoky flavor it adds to our pizzas.",
      author: "Sofia Italiano",
      restaurant: "Brickell Wood Fired Pizza",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      text: "Reliable delivery and consistent quality. Retimaca understands the demands of commercial kitchens and always delivers on time.",
      author: "James Wilson",
      restaurant: "Downtown Miami BBQ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
            What Miami Restaurants Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by the finest restaurants across Miami-Dade County
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.author} testimonial`} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h6 className="font-semibold">{testimonial.author}</h6>
                  <small className="text-gray-500">{testimonial.restaurant}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
