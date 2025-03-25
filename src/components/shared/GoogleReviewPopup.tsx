
import { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

const GoogleReviewPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      const hasDismissed = localStorage.getItem('reviewPopupDismissed');
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    localStorage.setItem('reviewPopupDismissed', 'true');
  };

  const handleReview = () => {
    window.open('https://g.page/r/CUjxtuqeT4K6EB0/review', '_blank');
    handleDismiss();
  };

  if (dismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in">
      <div className="p-4">
        <button 
          onClick={handleDismiss} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-medium">Rate your experience</span>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Enjoyed your experience with Departure Diaries? We'd love your feedback on Google!
        </p>
        
        <button
          onClick={handleReview}
          className="w-full py-2 bg-travel-600 hover:bg-travel-700 text-white rounded-md transition-colors font-medium text-sm"
        >
          Review us on Google
        </button>
      </div>
    </div>
  );
};

export default GoogleReviewPopup;
