// [START helpers/recommendations.ts]
import OpenAI from 'openai';
import { researchPapers } from '@/data/names';
// ITS SO OVER

const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
  dangerouslyAllowBrowser: true
});

export const getRecommendations = async (keywords: string[]) => {
  try {
    const prompt = `Given the following keywords: ${keywords.join(
      ', '
    )}, list the most relevant research paper titles from this list: ${researchPapers.join(
      ', '
    )}. Return up to 10 titles.`;

    const completion = await openai.chat.completions.create({
      model: 'nvidia/llama-3.1-nemotron-70b-instruct',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      top_p: 1,
      max_tokens: 1024,
    });

    const response = completion.choices[0].message?.content || '';
    const recommendedTitles = response.split('\n').slice(0, 10);

    return recommendedTitles;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
};
// [END helpers/recommendations.ts]
