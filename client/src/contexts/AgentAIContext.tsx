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

  // When clicking outside, minimize the chat instead of closing it completely
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check if the click was outside the chat modal and the chat is open
      if (isOpen && 
          !target.closest('.agent-ai-modal') && 
          !target.closest('.agent-ai-button') &&
          !target.closest('.minimized-chat')) {
        // Instead of closing, minimize
        setIsMinimized(true);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Keep the chat minimized until explicitly closed
  useEffect(() => {
    if (!isOpen && !isMinimized) {
      // When chat is closed (not open and not minimized), make sure it stays minimized
      setIsMinimized(true);
    }
  }, [isOpen, isMinimized]);

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