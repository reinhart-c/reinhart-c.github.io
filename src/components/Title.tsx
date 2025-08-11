import { useState, useEffect } from 'react';
import { titles } from '../constants/titles';

function Title() {
  const [glitchText, setGlitchText] = useState('REINHART CHRISTOPHER');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);


  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    const originalText = 'REINHART CHRISTOPHER';
    
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const glitchedText = originalText
          .split('')
          .map(char => Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        setGlitchText(glitchedText);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6 mt-15">
      <div className="text-center max-w-6xl">
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-wider">
              <span className="text-purple-400">{glitchText.split(' ')[0]}</span>
              <br />
              <span className="text-white">{glitchText.split(' ')[1]}</span>
            </h1>
          </div>
          <div className="h-16 flex items-center justify-center mb-8">
              <div className="text-center transition-all duration-1000 ease-in-out">
                <div className="text-2xl md:text-4xl font-bold text-indigo-400 tracking-wider">
                  MULTIDICIPLINARY DEVELOPER
                </div>
              </div>
            </div>
            <div className="h-16 flex items-center justify-center mb-8">
              <div className="text-center transition-all duration-1000 ease-in-out">
                <div className="text-xl md:text-3xl font-bold text-cyan-400 tracking-wider mb-2">
                  {titles[currentTitleIndex].text}
                </div>
                <div className="text-purple-400 text-sm tracking-widest opacity-80">
                  {titles[currentTitleIndex].subtitle}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Title