import React, { createContext, useContext, useState } from 'react';

type ContactModalType = 'email' | 'call' | 'ai' | 'main' | null;

interface ContactContextType {
  contactModal: ContactModalType;
  openContactModal: (type: ContactModalType) => void;
  closeContactModal: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contactModal, setContactModal] = useState<ContactModalType>(null);

  const openContactModal = (type: ContactModalType) => {
    setContactModal(type);
  };

  const closeContactModal = () => {
    setContactModal(null);
  };

  return (
    <ContactContext.Provider value={{ 
      contactModal, 
      openContactModal, 
      closeContactModal
    }}>
      {children}
    </ContactContext.Provider>
  );
};

// Use a named function declaration for better compatibility with Fast Refresh
export function useContact(): ContactContextType {
  const context = useContext(ContactContext);
  
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  
  return context;
}