import { useState, useRef, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AgentAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgentAIModal = ({ isOpen, onClose }: AgentAIModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm BharatAI, your virtual assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    },
    {
      id: 2,
      text: "I can answer questions about our products, services, or schedule a call with one of our human experts.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset chat when modal is opened
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm BharatAI, your virtual assistant. How can I help you today?",
          sender: 'ai',
          timestamp: new Date()
        },
        {
          id: 2,
          text: "I can answer questions about our products, services, or schedule a call with one of our human experts.",
          sender: 'ai',
          timestamp: new Date()
        }
      ]);
      setInput('');
      setIsTyping(false);
    }
  }, [isOpen]);

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

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiResponses = [
        "I understand your question. Let me provide you with more information about our cloud services.",
        "Thank you for your interest in Bharat Technologies. Our team specializes in that area and can help you implement a custom solution.",
        "That's a great question about our AI capabilities. We offer a range of intelligent solutions that can be tailored to your specific needs.",
        "I'd be happy to connect you with one of our specialists who can provide more detailed information about that topic.",
        "Our security protocols are designed to offer maximum protection while maintaining performance. Would you like me to explain more about our approach?"
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
          <Dialog.Title className="text-lg font-semibold pt-4 px-6">AI Assistant</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 pb-2 px-6">
            Get immediate answers from our AI-powered virtual assistant.
          </Dialog.Description>
          
          <div className="bg-gray-100 rounded-lg mx-6 p-4 h-80 overflow-y-auto mb-4">
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex items-start ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <i className="fas fa-robot text-purple-600 text-sm"></i>
                    </div>
                  )}
                  <div 
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.sender === 'user' 
                        ? 'bg-black text-white ml-auto' 
                        : 'bg-white text-gray-800'
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
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-robot text-purple-600 text-sm"></i>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Type your message..."
                autoFocus
              />
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2 text-center">
              This is a simulated AI assistant. For complex inquiries, please use email or phone options.
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AgentAIModal;