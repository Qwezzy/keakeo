import TenderAnalysisForm from './TenderAnalysisForm';

export default function TenderAIPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
              Tender Qualification AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Unsure which services you need for a tender? Paste the tender requirements below, and our AI will instantly analyze it and suggest the relevant Keakeo Assist services to get you compliant and ready to bid.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <TenderAnalysisForm />
          </div>
        </div>
      </section>
    </>
  );
}
