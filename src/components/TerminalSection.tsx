
import React, { useState, useEffect } from 'react';

const TerminalSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const terminalCommands = [
    { command: 'npm install express mongoose dotenv', output: '✓ Dependencies installed successfully' },
    { command: 'node app.js', output: '🚀 Server running on port 3000' },
    { command: 'npm test', output: '✅ All tests passing (24/24)' },
    { command: 'docker build -t api .', output: '📦 Image built successfully' },
    { command: 'kubectl apply -f deployment.yaml', output: '🔄 Deployment updated' },
    { command: 'echo "Portfolio ready!"', output: '🎉 Portfolio ready!' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });

    const terminalElement = document.getElementById('terminal');
    if (terminalElement) {
      observer.observe(terminalElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || currentLine >= terminalCommands.length) return;

    const command = terminalCommands[currentLine];
    let charIndex = 0;

    const typeCommand = () => {
      const typeInterval = setInterval(() => {
        setCurrentText(command.command.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex >= command.command.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentText('');
          }, 1000);
        }
      }, 50);
    };

    const delay = currentLine * 2000;
    const timer = setTimeout(typeCommand, delay);

    return () => clearTimeout(timer);
  }, [isVisible, currentLine]);

  return (
    <section id="terminal" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Live Development
        </h2>

        <div className="terminal rounded-lg p-6 scroll-reveal">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="ml-4 text-gray-400 text-sm">alex@portfolio:~/projects</span>
          </div>

          <div className="space-y-3">
            {terminalCommands.slice(0, currentLine).map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center">
                  <span className="text-blue-400">$</span>
                  <span className="ml-2 text-white">{item.command}</span>
                </div>
                <div className="text-green-400 ml-4">{item.output}</div>
              </div>
            ))}

            {currentLine < terminalCommands.length && (
              <div className="flex items-center">
                <span className="text-blue-400">$</span>
                <span className="ml-2 text-white">
                  {currentText}
                  <span className="typing-cursor"></span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
