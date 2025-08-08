import { useState, useLayoutEffect, useRef } from "react";

import { experiences } from "../constants/experiences";

function Experience() {
  const sortedExp = [...experiences].reverse()
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [rects, setRects] = useState<(DOMRect | undefined)[]>([]);
  const [parentRect, setParentRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    if (parentRef.current){
      setParentRect(parentRef.current.getBoundingClientRect())
    }

    const newRect = refs.current.map((el, _) => {
      if (el) {
        return el.getBoundingClientRect();
      }
    });
    setRects(newRect);
  }, []);

  const drawLine = () => {
    return rects.map((_, index) => {
      const isLeft = index % 2 === 0;
      if(rects[index] && parentRect){
        const rect = rects[index]
        const cardLeft = rect.left - parentRect.left
        const cardRight = cardLeft + rect.width
        const cardTop = rect.top - parentRect.top
        const cardMid = cardTop + rect.height/2 + 12
        const cardBottom = cardTop + rect.height
        const midX = parentRect.width/2

        if(isLeft){
          if(index===0){
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardRight}, ${cardMid} ${midX-10}, ${cardMid} ${midX}, ${cardMid+10} ${midX}, ${cardBottom+40}`} />
              </svg>
            );
          }else if(index === rects.length-1){
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardRight}, ${cardMid} ${midX-10}, ${cardMid} ${midX}, ${cardMid-10} ${midX}, ${cardTop-40}`} />
              </svg>
            );
          }else{
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardRight}, ${cardMid} ${midX-10}, ${cardMid} ${midX}, ${cardMid+10} ${midX}, ${cardBottom+40}`} />
                <polyline points={`${cardRight}, ${cardMid} ${midX-10}, ${cardMid} ${midX}, ${cardMid-10} ${midX}, ${cardTop-40}`} />
              </svg>
            );
          }
        }else{
          if(index===0){
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardLeft}, ${cardMid} ${midX+10}, ${cardMid} ${midX}, ${cardMid+10} ${midX}, ${cardBottom+40}`} />
              </svg>
            );
          }else if(index === rects.length-1){
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardLeft}, ${cardMid} ${midX+10}, ${cardMid} ${midX}, ${cardMid-10} ${midX}, ${cardTop-40}`} />
              </svg>
            );
          }else{
            return(
              <svg width={parentRect.width} height={parentRect.height} xmlns="http://www.w3.org/2000/svg" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute stroke-purple-400">
                <polyline points={`${cardLeft}, ${cardMid} ${midX+10}, ${cardMid} ${midX}, ${cardMid+10} ${midX}, ${cardBottom+40}`} />
                <polyline points={`${cardLeft}, ${cardMid} ${midX+10}, ${cardMid} ${midX}, ${cardMid-10} ${midX}, ${cardTop-40}`} />
              </svg>
            );
          }
        }
      }
    });
  }

  return (
    <section id="experience" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm tracking-[0.5em] mb-4">
            SYSTEM_LOG
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider">
            <span className="text-white">EXPERIENCE</span>
            <span className="text-cyan-400 ml-4">経験</span>
          </h2>
        </div>

        <div className="relative">
          {drawLine()}
          {/* Experience Cards */}
          <div className="flex flex-col space-y-20 relative z-10"
          ref={parentRef}>
            {sortedExp.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {!isLeft && <div className="hidden md:block md:w-1/2" />}

                  {/* Card */}
                  <div className="bg-gray-900/30 border border-purple-400/30 p-8 w-full md:w-5/12 relative hover:border-purple-400 transition-all duration-300"
                  ref={(el) => {refs.current[index] = el}}>
                    {/* Node */}
                    {/* TODO: future improvement add different start and end node */}
                    <div className="hidden md:block">
                      <div
                        className={`absolute top-1/2 ${
                          isLeft ? "-right-5" : "-left-5"
                        } w-6 h-6 bg-purple-400 rounded-full border-4 border-black`}
                      />
                      <div
                        className={`absolute top-1/2 ${
                          isLeft ? "-right-5" : "-left-5"
                        } w-6 h-6 bg-purple-400 rounded-full border-4 border-black animate-ping`}
                      />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col space-y-1 text-left">
                        <div className="text-purple-400 text-sm tracking-widest animate-pulse">
                          {exp.id}
                        </div>
                        <div className="text-cyan-400 text-xs tracking-wider">
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1 text-right">  
                        <div className="text-cyan-400 text-xs">
                          {exp.company}
                        </div>
                        <div className="text-indigo-400 text-xs">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold my-2">{exp.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="text-gray-300 text-sm list-disc ml-5 mb-4 space-y-1 text-left">
                      {exp.tasks.map((task, tIndex) => (
                        <li key={tIndex}>{task}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="bg-gray-800/50 border border-purple-400/30 px-2 py-1 text-xs text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isLeft && <div className="hidden md:block md:w-1/2" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience