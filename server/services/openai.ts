import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const OPENAI_MODEL = "gpt-4o";

// Initialize the OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Website information for context
const websiteContext = `
Bharat Technologies is a cutting-edge technology company specializing in:
- Artificial Intelligence solutions and human-AI collaboration
- Cloud computing and multi-cloud infrastructure
- Cybersecurity and defense technologies
- Space technology
- Industry-specific solutions for agriculture, healthcare, and life support systems
- Banking and financial technology
- Digital transformation and consulting services

The company offers both products and services, with a focus on innovation and state-of-the-art technology solutions for businesses and government organizations.
`;

// Conversation history type
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface AgentAIRequest {
  message: string;
  conversationHistory: {
    text: string;
    sender: 'user' | 'ai';
  }[];
}

// Function to generate AI responses
export async function generateAgentResponse(request: AgentAIRequest): Promise<string> {
  try {
    // Convert conversation history to OpenAI format
    const messages: Message[] = [
      {
        role: 'system',
        content: `You are an AI agent for Bharat Technologies. You are helpful, knowledgeable, and professional.
        
        ${websiteContext}
        
        Your role is to assist users with information about Bharat Technologies' products, services, and capabilities.
        Always maintain a professional tone while being friendly and approachable. If you don't know the answer to
        a specific question, offer to connect the user with a human representative who can help them further.
        
        Do not make up information that isn't provided in the context. If asked about specific pricing, project details, 
        or other information not available to you, politely explain that you'd need to connect them with a sales representative.`
      }
    ];

    // Add conversation history
    for (const msg of request.conversationHistory) {
      messages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      });
    }

    // Add the current message
    messages.push({
      role: 'user',
      content: request.message
    });

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again later or contact our support team for immediate assistance.";
  }
}