import { useEffect, useState } from 'react';

/**
 * Hook to detect if the current page is in CMS editing mode
 * 
 * CMS mode can be activated in three ways:
 * 1. The URL path includes '/cms'
 * 2. The URL query includes 'cms=true'
 * 3. The localStorage has 'cms_mode' set to 'true'
 * 
 * @returns boolean indicating if current page is in CMS mode
 */
export function useCmsMode(): boolean {
  const [isCmsMode, setIsCmsMode] = useState<boolean>(false);
  
  useEffect(() => {
    const checkCmsMode = () => {
      const inCmsPath = window.location.pathname.includes('/cms');
      const hasCmsParam = new URLSearchParams(window.location.search).get('cms') === 'true';
      const hasCmsLocalStorage = localStorage.getItem('cms_mode') === 'true';
      
      return inCmsPath || hasCmsParam || hasCmsLocalStorage;
    };
    
    setIsCmsMode(checkCmsMode());
    
    // Update when URL changes
    const handleUrlChange = () => {
      setIsCmsMode(checkCmsMode());
    };
    
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);
  
  return isCmsMode;
}

/**
 * Enables CMS mode in localStorage
 */
export function enableCmsMode(): void {
  localStorage.setItem('cms_mode', 'true');
}

/**
 * Disables CMS mode in localStorage
 */
export function disableCmsMode(): void {
  localStorage.removeItem('cms_mode');
}