"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  analyzeTenderAndSuggestServices,
  AnalyzeTenderOutput,
} from "@/ai/flows/tender-analysis-and-service-suggestion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { SERVICES } from '@/lib/constants';

const formSchema = z.object({
  tenderDocument: z.string().min(50, {
    message: "Please enter at least 50 characters from the tender document.",
  }),
});

export default function TenderAnalysisForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeTenderOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tenderDocument: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeTenderAndSuggestServices({ tenderDocument: values.tenderDocument });
      if (result) {
        setAnalysisResult(result);
        toast({
            title: "Analysis Complete!",
            description: "We've suggested some services based on your tender.",
        });
      } else {
        throw new Error("The analysis returned an empty result.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "There was a problem analyzing the document. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const getServiceIcon = (serviceName: string) => {
    const service = SERVICES.find(s => s.title === serviceName);
    return service ? <service.icon className="mr-2 h-4 w-4" /> : <Sparkles className="mr-2 h-4 w-4" />;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Lightbulb className="h-6 w-6 text-primary" />
          Analyze Tender Document
        </CardTitle>
        <CardDescription>
          Paste the requirements or summary section of your tender document below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="tenderDocument"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Tender Document</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'The bidder must provide a valid Tax Clearance Certificate, be registered on the CSD, and have a CIDB grading of 2GB...'"
                      className="min-h-[200px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Analyze and Suggest Services
                </>
              )}
            </Button>
          </form>
        </Form>

        {error && (
            <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        
        {analysisResult && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold font-headline mb-4">Suggested Services</h3>
            {analysisResult.suggestedServices.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                {analysisResult.suggestedServices.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-base py-2 px-4 bg-primary/10 border-primary/20 text-primary-foreground hover:bg-primary/20">
                      {getServiceIcon(service)}
                      {service}
                    </Badge>
                ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No specific services could be identified from the text provided. You can try being more descriptive or contact us for a manual review.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
