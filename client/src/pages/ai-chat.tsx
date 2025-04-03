import { useState, useRef, useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ApiResponse {
  success: boolean;
  message: string;
  usingFallback?: boolean;
  fallbackInfo?: string;
}

const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Bharat Agent AI. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  const [fallbackInfo, setFallbackInfo] = useState<string | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Agent AI - Bharat Technologies';
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Prepare conversation history for API
      const conversationHistory = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp.toISOString()
      }));
      
      // Add current message
      conversationHistory.push({
        text: userMessage.text,
        sender: 'user',
        timestamp: new Date().toISOString()
      });
      
      // Call the Agent AI API
      const response = await apiRequest('POST', '/api/agent-ai', {
        message: userMessage.text,
        conversationHistory
      });
      
      const data = await response.json() as ApiResponse;
      
      if (data.success) {
        // Add AI response to the chat
        const aiMessage: Message = {
          id: messages.length + 2,
          text: data.message,
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        
        // Check for fallback notifications
        if (data.usingFallback) {
          setUsingFallback(true);
          setFallbackInfo(data.fallbackInfo || "Using simplified responses due to service limitations.");
        } else {
          setUsingFallback(false);
          setFallbackInfo(null);
        }
      } else {
        // Handle API error
        const errorMessage: Message = {
          id: messages.length + 2,
          text: "I'm sorry, I encountered an error. Please try again later.",
          sender: 'ai',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Error communicating with Agent AI API:", error);
      
      // Add error message to chat
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later.",
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <main>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Agent AI</h1>
          <p className="text-lg text-center mt-4 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Get instant answers and support through our artificial intelligence agent
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden" data-aos="fade-up">
              <div className="bg-black text-white p-4 flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-black"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold">Bharat Agent AI</h3>
                  <p className="text-sm text-gray-300">Online</p>
                </div>
              </div>
              
              <div className="h-96 p-4 overflow-y-auto bg-gray-50">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-3/4 rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-black text-white rounded-br-none' 
                          : 'bg-gray-200 text-black rounded-bl-none'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-gray-200 text-black rounded-lg rounded-bl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSubmit} className="p-4 border-t">
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Type your message..."
                  />
                  <button 
                    type="submit" 
                    className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors duration-300"
                    disabled={isTyping}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
                
                {usingFallback && fallbackInfo && (
                  <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-800 p-2 rounded-md text-sm">
                    <div className="flex items-start">
                      <AlertCircle className="h-4 w-4 mt-0.5 mr-1.5 flex-shrink-0" />
                      <span>{fallbackInfo}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            <div className="mt-12 bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
              <h3 className="font-poppins font-semibold text-xl mb-4">How Can Our Agent AI Help You?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium mb-1">Product Information</h4>
                    <p className="text-sm text-gray-600">Get details about our products and services</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-question-circle"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium mb-1">Technical Support</h4>
                    <p className="text-sm text-gray-600">Get answers to common technical questions</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium mb-1">Schedule Meetings</h4>
                    <p className="text-sm text-gray-600">Help arrange meetings with our experts</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow flex items-start">
                  <div className="text-xl text-black mr-3 mt-1">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium mb-1">Documentation</h4>
                    <p className="text-sm text-gray-600">Find relevant documentation and guides</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center" data-aos="fade-up">
              <p className="text-gray-600 mb-6">
                Need to speak with a human? Our customer support team is available to assist you.
              </p>
              <a href="/#contact" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 inline-block">
                Contact Support Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiChat;
