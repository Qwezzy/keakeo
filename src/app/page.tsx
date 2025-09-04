import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Briefcase,
  FileText,
  BadgePercent,
  Target,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';

const featuredServices = SERVICES.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Business meeting"
            fill
            className="object-cover opacity-10"
            data-ai-hint="business meeting"
          />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Streamline Your Business Success with Keakeo Assist
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                From company registration to tender applications, we provide expert assistance to navigate the complexities of business compliance and growth in South Africa.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/tender-ai">
                    Analyze Your Tender
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Comprehensive Solutions for Your Business
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We offer a wide range of services to ensure your business stays compliant and competitive.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="link" asChild className="mt-4">
                      <Link href="/services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                  Your Trusted Partner in Business Growth
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  At Keakeo Assist, we're more than just a service provider. We are your dedicated partner, committed to simplifying your journey and empowering your success.
                </p>
                <dl className="mt-10 space-y-8">
                  <div className="flex gap-x-4">
                    <dt className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Target className="h-6 w-6" />
                      </div>
                    </dt>
                    <dd className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">Expert Guidance.</strong> Our team possesses deep knowledge of South African business regulations, ensuring accurate and efficient service delivery.
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                    </dt>
                    <dd className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">AI-Powered Insights.</strong> Leverage our cutting-edge AI tool to quickly identify the services you need for any tender, saving you time and effort.
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                    </dt>
                    <dd className="text-muted-foreground">
                      <strong className="font-semibold text-foreground">Reliable & Timely.</strong> We pride ourselves on our professionalism and commitment to meeting deadlines, so you can focus on what you do best.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-10 lg:mt-0 relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="https://picsum.photos/600/450"
                    alt="Team collaborating"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="team collaboration"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Ready to take the next step?
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Let us handle the paperwork so you can focus on your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/tender-ai">Try Our AI Tool</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
