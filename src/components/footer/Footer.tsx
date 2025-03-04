import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900">
  <div className="container px-4 md:px-6 py-16 mx-auto">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">ProductX</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Transforming the way teams work with AI-powered productivity tools.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Mail className="h-4 w-4" />
            <span>contact@productx.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>123 Innovation Street, Tech City, TC 12345</span>
          </div>
        </div>
      </div>

      {/* Product Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Product</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="#features"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/changelog"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Changelog
            </Link>
          </li>
          <li>
            <Link
              href="/documentation"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Documentation
            </Link>
          </li>
        </ul>
      </div>

      {/* Company Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/press"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Press
            </Link>
          </li>
          <li>
            <Link
              href="/partners"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              Partners
            </Link>
          </li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Subscribe to our newsletter for product updates, news, and exclusive offers.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </div>

    {/* Social Links and Bottom Bar */}
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
        <div className="flex gap-4">
          <Link
            href="https://facebook.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://youtube.com"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:underline">
            Cookie Policy
          </Link>
          <span>© {new Date().getFullYear()} ProductX Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}