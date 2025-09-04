import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We provide a comprehensive suite of services designed to support your business at every stage. From foundational registrations to strategic growth, Keakeo Assist is your trusted partner.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{service.longDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
