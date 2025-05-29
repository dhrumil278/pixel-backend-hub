
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingSteps = [
    'Initializing Node.js runtime...',
    'Loading modules...',
    'Connecting to backend...',
    'Setting up Express server...',
    'Configuring database connections...',
    'Starting application...',
    'Portfolio ready.'
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
            }
          }, 500);
        }
      }, 50);
    };

    typeText(loadingSteps[currentStep], currentStep);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="terminal p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <div className="space-y-2">
          {loadingSteps.slice(0, currentStep).map((step, index) => (
            <div key={index} className="text-sm">
              <span className="text-gray-400">$</span> {step}
            </div>
          ))}
          
          <div className="text-sm">
            <span className="text-gray-400">$</span> {currentText}
            <span className="typing-cursor"></span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
