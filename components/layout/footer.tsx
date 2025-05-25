import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const linkClass = "text-gray-300 hover:text-white";
  const iconLinkClass = "text-gray-400 hover:text-white";
  const iconClass = "h-6 w-6";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img
              src="/banner.png"
              alt="Flyobo Logo"
              className="h-16 w-auto"
            />
            <p className="mt-4 text-sm text-gray-300">
              Making your travel dreams come true with Flyobo. We offer the best travel packages with unbeatable prices and exceptional service.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={iconLinkClass}
              >
                <Facebook className={iconClass} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={iconLinkClass}
              >
                <Instagram className={iconClass} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={iconLinkClass}
              >
                <Twitter className={iconClass} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "FAQ", href: "/#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="mt-4 space-y-2">
              {["Goa", "Kerala", "Rajasthan", "Himachal", "Andaman"].map((place) => (
                <li key={place}>
                  <Link
                    href={`/packages?location=${place}`}
                    className={linkClass}
                  >
                    {place === "Himachal" ? "Himachal Pradesh" : place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">123 Travel Street, Visakhapatnam, India - 500020</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 shrink-0 text-gray-400" />
                <span className="text-gray-300">info@flyobo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Flyobo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
