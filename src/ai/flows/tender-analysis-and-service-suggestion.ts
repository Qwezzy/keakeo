'use server';
/**
 * @fileOverview Analyzes a tender document and suggests relevant Keakeo Assist services.
 *
 * - analyzeTenderAndSuggestServices - A function that analyzes the tender and suggests services.
 * - AnalyzeTenderInput - The input type for the analyzeTenderAndSuggestServices function.
 * - AnalyzeTenderOutput - The return type for the analyzeTenderAndSuggestServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTenderInputSchema = z.object({
  tenderDocument: z
    .string()
    .describe("The tender document content, as a string."),
});
export type AnalyzeTenderInput = z.infer<typeof AnalyzeTenderInputSchema>;

const AnalyzeTenderOutputSchema = z.object({
  suggestedServices: z.array(z.string()).describe('An array of suggested services relevant to the tender.'),
});
export type AnalyzeTenderOutput = z.infer<typeof AnalyzeTenderOutputSchema>;

export async function analyzeTenderAndSuggestServices(input: AnalyzeTenderInput): Promise<AnalyzeTenderOutput> {
  return analyzeTenderAndSuggestServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeTenderAndSuggestServicesPrompt',
  input: {schema: AnalyzeTenderInputSchema},
  output: {schema: AnalyzeTenderOutputSchema},
  prompt: `You are an AI assistant designed to analyze tender documents and suggest relevant services offered by Keakeo Assist.

  The services offered by Keakeo Assist are:
  - Company Registration
  - CSD Report
  - B-BBEE Affidavit
  - Tax Clearance Certificate
  - Letter of Good Standing
  - Shelf Company
  - Amendments (CK)
  - Annual Returns
  - CIDB Registration
  - COIDA Registration
  - Import/Export License
  - Website Design
  - Google Ads

Analyze the following tender document and suggest the most relevant services that Keakeo Assist can provide. Respond with a JSON array of service names.

Tender Document:
{{{tenderDocument}}}
`,
});

const analyzeTenderAndSuggestServicesFlow = ai.defineFlow(
  {
    name: 'analyzeTenderAndSuggestServicesFlow',
    inputSchema: AnalyzeTenderInputSchema,
    outputSchema: AnalyzeTenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
