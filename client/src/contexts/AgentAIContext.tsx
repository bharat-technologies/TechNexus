import React, { createContext, useContext, useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

type AgentAIState = {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  setIsOpen: (isOpen: boolean) => void;
  setIsMinimized: (isMinimized: boolean) => void;
  addMessage: (message: Omit<Message, 'id'>) => void;
  toggleChat: () => void;
};

const AgentAIContext = createContext<AgentAIState | undefined>(undefined);

export const AgentAIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Agent AI, your virtual assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const addMessage = (message: Omit<Message, 'id'>) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { ...message, id: prevMessages.length + 1 },
    ]);
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else if (isOpen) {
      setIsMinimized(true);
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  // The outside click handler is implemented below
  
  // Handle the behavior when clicking outside the chat
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // If the click is outside the modal, and not on a button that interacts with the modal,
      // and the modal is open, then minimize it instead of closing it
      if (isOpen && 
          !target.closest('.agent-ai-modal') && 
          !target.closest('.agent-ai-button') && 
          !target.closest('.minimized-chat')) {
        setIsMinimized(true);
        setIsOpen(false);
      }
    };
    
    // Add the event listener
    document.addEventListener('mousedown', handleOutsideClick);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <AgentAIContext.Provider
      value={{
        isOpen,
        isMinimized,
        messages,
        setIsOpen,
        setIsMinimized,
        addMessage,
        toggleChat
      }}
    >
      {children}
    </AgentAIContext.Provider>
  );
};

export const useAgentAI = (): AgentAIState => {
  const context = useContext(AgentAIContext);
  if (!context) {
    throw new Error('useAgentAI must be used within an AgentAIProvider');
  }
  return context;
};