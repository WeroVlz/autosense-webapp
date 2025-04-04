import '../config.js';
import asyncHandler from '../utils/asyncHandler.js'
import OpenAI from 'openai';
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/customErrors.js'



const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

export const askChat = asyncHandler(async (req, res) => {
    try{
        const { prompt, car } = req.body;
        if (!prompt) throw new BadRequestError('Prompt is required');
        if (!car || !car.make || !car.model || !car.year) throw new BadRequestError('Car details are required');

        const systemPrompt = `You are an AI assistant that only answers car-related questions. The user has a ${car.make} ${car.model} (${car.year}). Stay on topic and provide helpful car-related advice.`;

        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            store: true,
            input: [
                { role: 'system', content: systemPrompt},
                { role: 'user', content: prompt}
            ]
        });

        const outputText = response.output?.[0]?.content?.[0]?.text || 'No response';
        res.json({ reply: outputText })

    } catch (error){
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error communicating with OpenAI'})
    }
});
