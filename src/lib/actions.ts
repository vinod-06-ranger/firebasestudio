'use server';

import { summarizeProjectTechnologies } from "@/ai/flows/summarize-project-technologies";
import { z } from "zod";

const summarySchema = z.object({
  projectDescriptions: z.array(z.string()),
});

export async function getTechnologySummary(projectDescriptions: string[]) {
  const validatedInput = summarySchema.safeParse({ projectDescriptions });

  if (!validatedInput.success) {
    return { error: "Invalid input." };
  }

  try {
    const result = await summarizeProjectTechnologies(validatedInput.data);
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate summary." };
  }
}
