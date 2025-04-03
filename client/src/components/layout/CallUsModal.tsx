import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface CallUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallUsModal: React.FC<CallUsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-200" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl transition-all duration-200 data-[state=open]:animate-contentShow sm:p-8">
          <Dialog.Title className="text-xl font-bold mb-2">Call Our Team</Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-4">
            We're available Monday through Friday, 9am to 6pm IST.
          </Dialog.Description>
          
          <div className="py-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-phone text-3xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">+123 456 7890</h3>
              <p className="text-gray-600 mb-4">
                Our technical support team is ready to assist you with any questions about our products and services.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="font-medium">Sales</div>
                  <div className="text-sm text-gray-600">Ext. 101</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="font-medium">Support</div>
                  <div className="text-sm text-gray-600">Ext. 102</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="font-medium">Billing</div>
                  <div className="text-sm text-gray-600">Ext. 103</div>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <div className="font-medium">Partnerships</div>
                  <div className="text-sm text-gray-600">Ext. 104</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <Dialog.Close asChild>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Close
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CallUsModal;