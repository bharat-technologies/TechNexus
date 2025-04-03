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
      text: "Hello! I'm Bharat Agent AI. How can I help you today?",
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
      setMessages([{
        id: 1,
        text: "Hello! I'm Bharat Agent AI. How can I help you today?",
        sender: 'ai',
        timestamp: new Date()
      }]);
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
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-robot text-black"></i>
              </div>
              <div>
                <h3 className="font-poppins font-semibold">Bharat Agent AI</h3>
                <p className="text-sm text-gray-300">Online</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-grow h-[350px] p-4 overflow-y-auto bg-gray-50">
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
                autoFocus
              />
              <button 
                type="submit" 
                className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AgentAIModal;