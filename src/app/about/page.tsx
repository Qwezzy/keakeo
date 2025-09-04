import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Eye, Gem } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-card">
         <Image
            src="https://picsum.photos/1920/1080"
            alt="Abstract background"
            fill
            className="object-cover opacity-10"
            data-ai-hint="abstract background"
          />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
            About Keakeo Assist
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            Empowering businesses to thrive through streamlined compliance and expert guidance. We are your dedicated partners in success.
          </p>
        </div>
      </section>
      
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/600"
                alt="Our team at work"
                layout="fill"
                objectFit="cover"
                data-ai-hint="diverse team"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline text-foreground sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Keakeo Assist was founded with a simple yet powerful goal: to demystify the complexities of business administration and compliance for South African entrepreneurs. We saw firsthand how talented business owners were getting bogged down by paperwork, regulatory hurdles, and red tape.
              </p>
              <p className="mt-4 text-muted-foreground">
                We decided to create a one-stop solution, combining expert knowledge with innovative technology to provide a seamless, efficient, and friendly service. Today, we proudly support hundreds of businesses, from startups to established enterprises, helping them stay compliant, competitive, and focused on growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="flex justify-center items-center mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline text-foreground">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To simplify business compliance and administration, empowering entrepreneurs to focus on innovation and growth.
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center items-center mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline text-foreground">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To be the most trusted and technologically advanced business support partner for SMEs in South Africa.
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center items-center mx-auto h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline text-foreground">Our Values</h3>
              <p className="mt-2 text-muted-foreground">
                We operate with integrity, prioritize our clients, embrace innovation, and are committed to excellence in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Ready to simplify your business?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Let's work together to achieve your business goals.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
