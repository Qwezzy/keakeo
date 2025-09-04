"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/tender-ai', label: 'Tender AI' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button asChild>
                <Link href="/contact">Get Started</Link>
            </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Logo />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                  <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      pathname === href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
               <Button asChild className="w-full mt-8">
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
