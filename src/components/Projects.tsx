import { useState } from "react";
import { projects, githubCard } from "../constants/projects";

import Eye from "../assets/icons/eye.svg?react";
import GPlay from "../assets/icons/google_play.svg?react";
import Appstore from "../assets/icons/appstore.svg?react";
import Github from "../assets/icons/github.svg?react";
import ChevronLeft from "../assets/icons/chevron_left.svg?react";
import ChevronRight from "../assets/icons/chevron_right.svg?react";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = projects.length + 1;
  const isGithubCard = currentIndex === projects.length;

  // Simple division-based grid: always 2 columns, all items half-width
  const getTechGridStyle = (techLength: number) => {
    const rows = Math.ceil(techLength / 2); // Use ceil for proper row calculation
    return {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: `repeat(${rows}, 1fr)`
    };
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <section id="projects" className="min-h-screen relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-purple-400 text-sm tracking-[0.5em] mb-4">
            PROJECT_DATABASE
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider">
            <span className="text-white">PROJECTS</span>
            <span className="text-cyan-400 ml-4">プロジェクト</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Project Cards */}
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-2xl mx-auto">
                    <div
                      className="group bg-gray-900/30 border border-purple-400/30 hover:border-purple-400 transition-all duration-300"
                    >
                      <div className="p-8 md:p-12">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex flex-col space-y-1 text-left">
                            <div className="text-purple-400 text-sm tracking-widest animate-pulse">
                              {project.id}
                            </div>
                            <div className="text-cyan-400 text-xs tracking-wider">
                              {project.category}
                            </div>
                          </div>
                          <div className={`px-3 py-1 text-xs font-bold tracking-wider ${
                            project.status === 'DEPLOYED' || project.status === 'LIVE' ? 'bg-green-400 text-black' :
                            project.status === 'ACTIVE' ? 'bg-cyan-400 text-black' :
                            project.status === 'BETA' || project.status === 'PROJECT' ? 'bg-purple-400 text-black' :
                            'bg-pink-400 text-black'
                          }`}>
                            {project.status}
                          </div>
                        </div>
                        
                        {/* Project Info */}
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-cyan-400 text-lg mb-6 tracking-wider">{project.subtitle}</p>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>
                        
                        {/* Tech Stack */}
                        <div 
                          className="grid gap-3 mb-8"
                          style={getTechGridStyle(project.tech.length)}
                        >
                          {project.tech.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="bg-gray-800/70 border border-gray-600 px-3 py-2 text-sm text-center font-mono relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-purple-400/5"></div>
                              <span className="relative z-10 text-gray-200">{tech}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className={`${project.links.demo ? 'grid md:grid-cols-2 gap-4' : 'flex justify-center'}`}>
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              className={`bg-gradient-to-r from-purple-400 to-cyan-400 text-black py-3 text-lg font-bold tracking-wider hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center transform space-x-3 ${!project.links.source ? 'w-full max-w-md' : ''}`}
                            //   style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
                            >
                              {project.links.demo.startsWith("https://play.google.com") ? <GPlay className="w-5 h-5" /> :
                              project.links.demo.startsWith("https://apps.apple.com") ? <Appstore className="w-5 h-5" /> :
                              <Eye className="w-5 h-5" />}
                              <span>SEE_PAGE</span>
                            </a>
                          )}
                          
                          {project.links.source && (
                            <a
                            href={project.links.source}
                            className={`'bg-gray-800/70 border-2 border-purple-400/30 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 py-3 text-lg font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-3 ${!project.links.demo ? 'w-full max-w-md' : ''}`}
                            // style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
                          >
                            <Github className="w-5 h-5" />
                            <span>SOURCE_CODE</span>
                          </a>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* GitHub Card */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="max-w-2xl mx-auto">
                  <div
                    className="group bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border border-purple-400/50 hover:border-cyan-400 transition-all duration-500 overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-400/20"
                    // style={{ clipPath: 'polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)' }}
                  >
                    <div className="p-8 md:p-12 text-center">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-purple-400 text-sm tracking-widest animate-pulse">
                          {githubCard.year}
                        </div>
                        <div className="bg-cyan-400 text-black px-3 py-1 text-xs font-bold tracking-wider">
                          {githubCard.status}
                        </div>
                      </div>
                      
                      {/* GitHub Icon */}
                      <div className="mb-8">
                        <Github className="w-24 h-24 mx-auto text-purple-400 group-hover:text-cyan-400 transition-colors duration-500" />
                      </div>
                      
                      {/* Card Info */}
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {githubCard.title}
                      </h3>
                      <p className="text-purple-400 text-lg mb-6 tracking-wider">{githubCard.subtitle}</p>
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">{githubCard.description}</p>
                      
                      {/* GitHub Button */}
                      <a
                        href="https://github.com/reinhart-c"
                        className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-black py-3 px-8 text-lg font-bold tracking-wider hover:from-purple-400 hover:to-cyan-400 transition-all duration-500 transform hover:scale-105 w-full max-w-md"
                        // style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
                      >
                        <div className="flex items-center space-x-3 justify-center">
                          <Github className="w-5 h-5" />
                          <span>EXPLORE_GITHUB</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-purple-400/20 border border-purple-400/30 p-3 hover:bg-purple-400/40 transition-all duration-300 backdrop-blur-sm"
            // style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}
          >
            <ChevronLeft className="w-6 h-6 text-purple-400" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-purple-400/20 border border-purple-400/30 p-3 hover:bg-purple-400/40 transition-all duration-300 backdrop-blur-sm"
            // style={{ clipPath: 'polygon(calc(100% - 20px) 0%, 0% 0%, 0% calc(100% - 20px), 20px 100%, 100% 100%, 100% 20px)' }}
          >
            <ChevronRight className="w-6 h-6 text-purple-400" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-4">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 transition-all duration-300 ${
                currentIndex === index
                  ? (index === projects.length ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-purple-400 shadow-lg shadow-purple-400/50')
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            //   style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 30%)' }}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <div className="text-purple-400 text-sm tracking-wider">
            {isGithubCard ? 'GITHUB' : `PROJECT ${String(currentIndex + 1).padStart(2, '0')} / ${String(totalItems-1).padStart(2, '0')}`}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects