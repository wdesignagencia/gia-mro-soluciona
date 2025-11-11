import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
  enabled?: boolean;
  delay?: number;
  sensitivity?: number;
  excludePaths?: string[];
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    enabled = true,
    delay = 1000, // 1 second delay before activation
    sensitivity = 50, // pixels from top edge for desktop detection
    excludePaths = ['/contato', '/contact']
  } = options;

  const [isTriggered, setIsTriggered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Check if already shown in this session
  const hasBeenShown = localStorage.getItem('exit-intent-shown') === 'true';
  
  // Check if current path should be excluded
  const currentPath = window.location.pathname;
  const shouldExclude = excludePaths.some(path => currentPath.includes(path));

  const triggerExitIntent = useCallback(() => {
    if (!enabled || shouldExclude || !isActive) return;
    
    setIsTriggered(true);
  }, [enabled, shouldExclude, isActive]);

  const resetExitIntent = useCallback(() => {
    setIsTriggered(false);
  }, []);

  const markAsShown = useCallback(() => {
    localStorage.setItem('exit-intent-shown', 'true');
  }, []);

  useEffect(() => {
    if (!enabled || shouldExclude) return;

    // Activate after delay
    const activationTimer = setTimeout(() => {
      setIsActive(true);
    }, delay);

    return () => clearTimeout(activationTimer);
  }, [enabled, shouldExclude, delay]);

  useEffect(() => {
    if (!isActive) return;

    // Desktop: Mouse leave detection (real exit intent only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= sensitivity && e.relatedTarget === null) {
        triggerExitIntent();
      }
    };

    // Add event listener
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isActive, triggerExitIntent, sensitivity]);

  return {
    isTriggered,
    resetExitIntent,
    markAsShown,
    hasBeenShown
  };
};