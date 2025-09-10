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
    delay = 10000, // 10 seconds delay before activation
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
    if (!enabled || hasBeenShown || shouldExclude || !isActive) return;
    
    setIsTriggered(true);
    localStorage.setItem('exit-intent-shown', 'true');
  }, [enabled, hasBeenShown, shouldExclude, isActive]);

  const resetExitIntent = useCallback(() => {
    setIsTriggered(false);
  }, []);

  useEffect(() => {
    if (!enabled || hasBeenShown || shouldExclude) return;

    // Activate after delay
    const activationTimer = setTimeout(() => {
      setIsActive(true);
    }, delay);

    return () => clearTimeout(activationTimer);
  }, [enabled, hasBeenShown, shouldExclude, delay]);

  useEffect(() => {
    if (!isActive) return;

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= sensitivity && e.relatedTarget === null) {
        triggerExitIntent();
      }
    };

    // Mobile: Touch/scroll detection for exit intent
    let isScrollingUp = false;
    let lastScrollY = window.scrollY;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const touchDiff = touchY - touchStartY;
      
      // Detect upward swipe near top of screen
      if (touchDiff > 50 && window.scrollY < 100) {
        triggerExitIntent();
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingUp = currentScrollY < lastScrollY;
      
      // Trigger when scrolling up near top
      if (isScrollingUp && currentScrollY < 50) {
        triggerExitIntent();
      }
      
      lastScrollY = currentScrollY;
    };

    // Keyboard shortcuts detection
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+W, Ctrl+T, Alt+F4, Cmd+W
      if (
        (e.ctrlKey && (e.key === 'w' || e.key === 't')) ||
        (e.altKey && e.key === 'F4') ||
        (e.metaKey && e.key === 'w')
      ) {
        e.preventDefault();
        triggerExitIntent();
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, triggerExitIntent, sensitivity]);

  return {
    isTriggered,
    resetExitIntent,
    hasBeenShown
  };
};