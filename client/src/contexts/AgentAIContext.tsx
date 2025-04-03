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

  // No outside click handler needed here. 
  // The Dialog component in AgentAIModal.tsx has onOpenChange that handles this behavior.

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