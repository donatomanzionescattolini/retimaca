import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Send, Phone, Mail, MapPin, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { InsertContactRequest } from "@shared/schema";

export function ContactForm() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [selectedWoodType, setSelectedWoodType] = useState<string>("");

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      restaurantName: "",
      contactPerson: "",
      phone: "",
      email: "",
      woodType: "",
      quantity: "",
      deliveryAddress: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your quote request! We will contact you within 24 hours.",
      });
      form.reset();
      setSelectedWoodType("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactRequest) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="section-padding section-bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="contact-form">
              <h4 className="text-2xl font-semibold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Request Quote
              </h4>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="restaurantName">{t('contact.form.restaurantName')} *</Label>
                    <Input
                      id="restaurantName"
                      {...form.register("restaurantName")}
                      placeholder={t('contact.form.restaurantName')}
                    />
                    {form.formState.errors.restaurantName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.restaurantName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      {...form.register("contactPerson")}
                      placeholder="Your Name"
                    />
                    {form.formState.errors.contactPerson && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.contactPerson.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      placeholder="(305) 555-0123"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="chef@restaurant.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="woodType">Wood Type *</Label>
                    <Select
                      value={selectedWoodType}
                      onValueChange={(value) => {
                        setSelectedWoodType(value);
                        form.setValue("woodType", value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Wood Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oak">Premium Oak</SelectItem>
                        <SelectItem value="hickory">Hickory</SelectItem>
                        <SelectItem value="cherry">Cherry</SelectItem>
                        <SelectItem value="apple">Apple Wood</SelectItem>
                        <SelectItem value="mixed">Mixed Variety</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.woodType && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.woodType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity Needed</Label>
                    <Input
                      id="quantity"
                      {...form.register("quantity")}
                      placeholder="e.g., 2 cords, 50 bags"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliveryAddress">Restaurant Delivery Address *</Label>
                  <Input
                    id="deliveryAddress"
                    {...form.register("deliveryAddress")}
                    placeholder="123 Ocean Drive, Miami Beach, FL 33139"
                  />
                  {form.formState.errors.deliveryAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.deliveryAddress.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Additional Requirements or Notes</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
                    placeholder="Special delivery instructions, preferred delivery dates, or other requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary-custom text-lg w-full md:w-auto"
                  disabled={contactMutation.isPending}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contactMutation.isPending ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="contact-form">
              <h4 className="text-2xl font-semibold mb-6" style={{ color: "hsl(var(--primary-brown))" }}>
                Contact Information
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h6 className="font-semibold mb-2 flex items-center">
                    <Phone className="mr-2 h-5 w-5" style={{ color: "hsl(var(--primary-brown))" }} />
                    Phone
                  </h6>
                  <p className="mb-1">
                    <a href="tel:(305)555-9663" className="text-gray-700 hover:text-[hsl(var(--primary-brown))]">
                      (305) 555-WOOD (9663)
                    </a>
                  </p>
                  <small className="text-gray-500">Mon-Fri 8am - 5pm</small>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2 flex items-center">
                    <Mail className="mr-2 h-5 w-5" style={{ color: "hsl(var(--primary-brown))" }} />
                    Email
                  </h6>
                  <p>
                    <a href="mailto:orders@retimaca.com" className="text-gray-700 hover:text-[hsl(var(--primary-brown))]">
                      orders@retimaca.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2 flex items-center">
                    <MapPin className="mr-2 h-5 w-5" style={{ color: "hsl(var(--primary-brown))" }} />
                    Service Area
                  </h6>
                  <p className="mb-1">Miami-Dade County</p>
                  <small className="text-gray-500">All restaurant locations</small>
                </div>
                
                <div>
                  <h6 className="font-semibold mb-2 flex items-center">
                    <Truck className="mr-2 h-5 w-5" style={{ color: "hsl(var(--primary-brown))" }} />
                    Delivery
                  </h6>
                  <p className="mb-1">2-3 Business Days</p>
                  <small className="text-gray-500">Scheduled route delivery available</small>
                </div>

                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Wood delivery truck for Miami restaurants" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
