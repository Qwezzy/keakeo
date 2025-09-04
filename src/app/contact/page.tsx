import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're here to help. Whether you have a question about our services or need expert advice for your business, feel free to reach out.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-headline text-foreground">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:info@keakeo.co.za" className="text-lg text-foreground hover:text-primary">
                    info@keakeo.co.za
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+27123456789" className="text-lg text-foreground hover:text-primary">
                    +27 12 345 6789
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-foreground">
                    123 Business Lane, Pretoria, South Africa
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
