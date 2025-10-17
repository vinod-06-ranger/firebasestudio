'use server';

/**
 * @fileOverview Summarizes the key technologies used across all projects.
 *
 * - summarizeProjectTechnologies - A function that summarizes the technologies used in projects.
 * - SummarizeProjectTechnologiesInput - The input type for the summarizeProjectTechnologies function.
 * - SummarizeProjectTechnologiesOutput - The return type for the summarizeProjectTechnologies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectTechnologiesInputSchema = z.object({
  projectDescriptions: z.array(
    z.string().describe('A description of a project.')
  ).describe('An array of project descriptions.'),
});
export type SummarizeProjectTechnologiesInput = z.infer<typeof SummarizeProjectTechnologiesInputSchema>;

const SummarizeProjectTechnologiesOutputSchema = z.object({
  summary: z.string().describe('A summary of the key technologies used across all projects.'),
});
export type SummarizeProjectTechnologiesOutput = z.infer<typeof SummarizeProjectTechnologiesOutputSchema>;

export async function summarizeProjectTechnologies(input: SummarizeProjectTechnologiesInput): Promise<SummarizeProjectTechnologiesOutput> {
  return summarizeProjectTechnologiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectTechnologiesPrompt',
  input: {schema: SummarizeProjectTechnologiesInputSchema},
  output: {schema: SummarizeProjectTechnologiesOutputSchema},
  prompt: `You are an expert at identifying key technologies from project descriptions and summarizing them.\n\nSummarize the key technologies used across all projects based on the following descriptions:\n\n{% each projectDescriptions %}\n- {{{this}}}{% endeach %}\n\nProvide a concise summary of the technologies, highlighting the most prominent ones.`,
});

const summarizeProjectTechnologiesFlow = ai.defineFlow(
  {
    name: 'summarizeProjectTechnologiesFlow',
    inputSchema: SummarizeProjectTechnologiesInputSchema,
    outputSchema: SummarizeProjectTechnologiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
