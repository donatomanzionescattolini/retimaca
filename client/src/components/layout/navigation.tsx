import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar-custom fixed top-9 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <a className="text-white text-2xl font-bold hover:text-gray-200">
              Retimaca
            </a>
          </Link>
          
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-full lg:top-0 left-0 lg:left-auto right-0 lg:right-auto bg-[rgba(139,69,19,0.95)] lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0">
              <li>
                <Link href="/">
                  <a className="block text-white hover:text-gray-200 py-2 lg:py-0 font-medium">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="block text-white hover:text-gray-200 py-2 lg:py-0 font-medium">
                    Wood Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="block text-white hover:text-gray-200 py-2 lg:py-0 font-medium">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="block text-white hover:text-gray-200 py-2 lg:py-0 font-medium">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
