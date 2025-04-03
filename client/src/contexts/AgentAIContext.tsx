import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiRequest } from '@/lib/queryClient';

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
  sendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
};

const AgentAIContext = createContext<AgentAIState | undefined>(undefined);

export const AgentAIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    // Add user message to chat
    const userMessage: Omit<Message, 'id'> = {
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    addMessage(userMessage);
    setIsLoading(true);
    
    try {
      // Prepare conversation history for the API
      const conversationHistory = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender,
        timestamp: msg.timestamp.toISOString()
      }));
      
      // Add the new user message
      conversationHistory.push({
        text,
        sender: 'user',
        timestamp: new Date().toISOString()
      });
      
      // Call the AI API
      console.log('Sending to Agent AI API:', { message: text, conversationHistory });
      
      const response = await apiRequest('POST', '/api/agent-ai', {
        message: text,
        conversationHistory
      });
      
      console.log('Agent AI API response status:', response.status);
      const data = await response.json();
      console.log('Agent AI API response data:', data);
      
      if (data.success) {
        // Add AI response to chat
        const aiMessage: Omit<Message, 'id'> = {
          text: data.message,
          sender: 'ai',
          timestamp: new Date(),
        };
        
        addMessage(aiMessage);
      } else {
        // Handle error
        const errorMessage: Omit<Message, 'id'> = {
          text: "I'm sorry, I encountered an error. Please try again later.",
          sender: 'ai',
          timestamp: new Date(),
        };
        
        addMessage(errorMessage);
      }
    } catch (error) {
      console.error("Error sending message to AI:", error);
      
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      
      // Add error message
      const errorMessage: Omit<Message, 'id'> = {
        text: "I'm sorry, I'm having trouble connecting. Please try again later.",
        sender: 'ai',
        timestamp: new Date(),
      };
      
      addMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
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
        toggleChat,
        sendMessage,
        isLoading
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