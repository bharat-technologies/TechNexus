import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const OPENAI_MODEL = "gpt-4o";

// Initialize the OpenAI client with fallback handling
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || 'dummy',
  defaultQuery: { timeout: 30000 },
  defaultHeaders: { 'OpenAI-Beta': 'assistants=v1' }
});

// Set fallback mode if API key is missing
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY not found. AI responses will be limited to basic responses.');
  process.env.OPENAI_API_QUOTA_EXCEEDED = 'true';
}

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

    try {
      // Call OpenAI API
      console.log('Calling OpenAI API with messages:', JSON.stringify(messages, null, 2));
      
      const response = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 500
      });
      
      console.log('OpenAI API response:', JSON.stringify(response.choices[0].message, null, 2));
      
      return response.choices[0].message.content || "I'm sorry, I couldn't generate a response. Please try again.";
    } catch (error: any) {
      // Check for rate limit or quota errors
      if (error.status === 429 || (error.error && error.error.type === 'insufficient_quota')) {
        console.log('OpenAI API quota exceeded or rate limited. Switching to basic agent mode.');
        // Set a flag for routes to check
        process.env.OPENAI_API_QUOTA_EXCEEDED = 'true';
        
        // Use predefined responses based on user's message
        const userMessage = request.message.toLowerCase();
        
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
          return "Hello! I'm Agent AI from Bharat Technologies. How can I assist you today?";
        }
        
        if (userMessage.includes('cloud') || userMessage.includes('cloud computing') || userMessage.includes('cloud services')) {
          return "Bharat Technologies offers comprehensive cloud computing services, including multi-cloud infrastructure, cloud migration, and cloud-native application development. Would you like me to connect you with a specialist to discuss your specific needs?";
        }
        
        if (userMessage.includes('ai') || userMessage.includes('artificial intelligence') || userMessage.includes('machine learning')) {
          return "At Bharat Technologies, we specialize in advanced AI solutions and human-AI collaboration tools. Our AI expertise extends across computer vision, natural language processing, and predictive analytics. Would you like to learn more about how our AI solutions can benefit your business?";
        }
        
        if (userMessage.includes('security') || userMessage.includes('cyber') || userMessage.includes('cybersecurity')) {
          return "Cybersecurity is a core focus area at Bharat Technologies. We offer comprehensive security solutions including threat detection, vulnerability assessment, and secure network architecture. Would you like to speak with one of our security experts?";
        }
        
        if (userMessage.includes('contact') || userMessage.includes('speak') || userMessage.includes('email') || userMessage.includes('call')) {
          return "You can contact our team using the 'Email Us' or 'Call Us' options in the navigation menu. Alternatively, fill out the contact form at the bottom of the homepage, and one of our representatives will get back to you promptly.";
        }
        
        if (userMessage.includes('defence') || userMessage.includes('defense') || userMessage.includes('military')) {
          return "Bharat Technologies provides advanced defense and military technology solutions, including secure communications systems, intelligence tools, and specialized hardware for defense applications. For detailed information on our defense technologies, I recommend scheduling a consultation with our defense sector specialists.";
        }
        
        if (userMessage.includes('space') || userMessage.includes('satellite') || userMessage.includes('aerospace')) {
          return "Our space technology division at Bharat Technologies develops cutting-edge solutions for satellite communications, space-based monitoring systems, and aerospace applications. We work with both government and private space agencies to advance space exploration and satellite technology.";
        }
        
        if (userMessage.includes('agriculture') || userMessage.includes('farming') || userMessage.includes('farm')) {
          return "Bharat Technologies offers specialized agriculture technology solutions including precision farming tools, smart irrigation systems, crop monitoring with AI, and data analytics for yield optimization. Would you like to learn more about how our agricultural solutions can improve efficiency and productivity?";
        }
        
        if (userMessage.includes('banking') || userMessage.includes('finance') || userMessage.includes('payment')) {
          return "Our banking and financial technology solutions include secure payment systems, fraud detection, regulatory compliance tools, and digital banking platforms. Bharat Technologies helps financial institutions modernize their infrastructure while maintaining the highest security standards.";
        }
        
        if (userMessage.includes('healthcare') || userMessage.includes('medical') || userMessage.includes('health')) {
          return "Bharat Technologies' healthcare solutions combine AI diagnostics, secure patient data management, telemedicine platforms, and advanced medical imaging systems. We're committed to improving patient outcomes through innovative technology while ensuring data privacy and security.";
        }
        
        // Default fallback response
        return "Thank you for your interest in Bharat Technologies. We offer cutting-edge solutions in AI, cloud computing, cybersecurity, defense technologies, and more. To provide you with the most accurate information, I'd recommend speaking with one of our specialists. Would you like me to help connect you with someone from our team?";
      } else {
        // Forward other API errors
        throw error;
      }
    }
  } catch (error) {
    console.error('Error generating AI response:', error);
    // Log more detailed error information
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our support team for immediate assistance.";
  }
}