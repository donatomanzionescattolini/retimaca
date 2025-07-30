import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "hsl(var(--dark-slate))" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h5 className="text-xl font-bold mb-4">Retimaca</h5>
            <p className="mb-4 text-gray-300">
              Miami's premier supplier of premium cooking wood for restaurants, 
              pizzerias, and commercial kitchens throughout Miami-Dade County.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-300 hover:text-white">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-white">About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4">Wood Types</h6>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Premium Oak</span></li>
              <li><span className="text-gray-300">Hickory</span></li>
              <li><span className="text-gray-300">Cherry</span></li>
              <li><span className="text-gray-300">Apple Wood</span></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-semibold mb-4">Contact Info</h6>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:(305)555-9663" className="text-gray-300 hover:text-white">
                  (305) 555-WOOD
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:orders@retimaca.com" className="text-gray-300 hover:text-white">
                  orders@retimaca.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">Miami-Dade County</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 mb-2 md:mb-0">
              © 2024 Retimaca. All rights reserved.
            </p>
            <p className="text-gray-300">
              Licensed & Certified for Commercial Food Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
