import { Facebook, Instagram, Twitter, Phone } from "lucide-react";

export function Header() {
  return (
    <div className="phone-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:(305)555-9663" className="text-white text-decoration-none hover:text-gray-200">
              Call us: (305) 555-WOOD (9663)
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
