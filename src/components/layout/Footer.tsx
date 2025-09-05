import Link from 'next/link';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/tender-ai', label: 'Tender AI' },
];

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your partner in business compliance and growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navLinks.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                <ul role="list" className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Email: <a href="mailto:info@keakeo.co.za" className="hover:text-primary">info@keakeo.co.za</a></li>
                    <li>Phone: <a href="tel:+27781796354" className="hover:text-primary">+27 78 179 6354</a></li>
                </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Keakeo Assist. All rights reserved. | Powered by{' '}
            <a
              href="https://khemo.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              Khemo IT Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
