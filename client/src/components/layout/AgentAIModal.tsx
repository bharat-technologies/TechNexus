import { useState, useRef, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Minimize } from 'lucide-react';
import { useAgentAI } from '@/contexts/AgentAIContext';

// No longer need component props as we use context
const AgentAIModal = () => {
  const { isOpen, isMinimized, messages, toggleChat, setIsOpen, setIsMinimized, addMessage } = useAgentAI();
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message through the context
    addMessage({
      text: input,
      sender: 'user',
      timestamp: new Date()
    });
    
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
      
      addMessage({
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      });
      
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Render minimized chat bubble if minimized
  if (isMinimized) {
    return (
      <div 
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-purple-600 text-white rounded-full 
                   shadow-lg flex items-center justify-center cursor-pointer 
                   hover:bg-purple-700 transition-colors duration-300 minimized-chat"
        onClick={toggleChat}
      >
        <span className="text-xl font-bold">AI</span>
      </div>
    );
  }

  // If not open or minimized, render nothing
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && setIsOpen(false)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm agent-ai-modal" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden agent-ai-modal">
          <div className="flex items-center justify-between pt-4 px-6">
            <Dialog.Title className="text-lg font-semibold">Agent AI</Dialog.Title>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setIsMinimized(true);
                  setIsOpen(false);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1 agent-ai-button"
                aria-label="Minimize"
              >
                <Minimize size={18} />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1 agent-ai-button"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
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
              This is a simulated Agent AI. For complex inquiries, please use email or phone options.
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AgentAIModal;