
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const loadingSteps = [
    'Initializing Node.js runtime...',
    'Loading Express framework...',
    'Connecting to MongoDB cluster...',
    'Setting up Redis cache...',
    'Configuring Docker containers...',
    'Establishing AWS connections...',
    'Starting development server...',
    'Compiling TypeScript modules...',
    'Optimizing API endpoints...',
    'Running security checks...',
    'Loading portfolio data...',
    'Portfolio ready! 🚀'
  ];

  useEffect(() => {
    const typeText = (text: string, stepIndex: number) => {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        setCurrentText(text.slice(0, charIndex + 1));
        charIndex++;
        
        if (charIndex >= text.length) {
          clearInterval(typeInterval);
          
          setTimeout(() => {
            if (stepIndex < loadingSteps.length - 1) {
              setCurrentStep(stepIndex + 1);
            } else {
              setIsCompleted(true);
            }
          }, stepIndex === loadingSteps.length - 1 ? 800 : 400);
        }
      }, 40);
    };

    typeText(loadingSteps[currentStep], currentStep);
  }, [currentStep]);

  const progress = ((currentStep + 1) / loadingSteps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="terminal p-8 rounded-lg max-w-md w-full mx-4 relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400 text-sm ml-4 font-mono">alex@portfolio:~$</span>
        </div>
        
        {/* Terminal Content */}
        <div className="space-y-1 min-h-[300px]">
          {loadingSteps.slice(0, currentStep).map((step, index) => (
            <div key={index} className="text-sm flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span className="text-gray-300">{step}</span>
            </div>
          ))}
          
          <div className="text-sm flex items-center">
            <span className="text-yellow-400 mr-2">►</span>
            <span className="text-green-400">{currentText}</span>
            <span className="typing-cursor text-green-400"></span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Success Animation */}
        {isCompleted && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🚀</div>
              <div className="text-green-400 text-xl font-mono">System Ready!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
