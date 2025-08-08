import React from "react";
import { skillCategories } from "../constants/skillCategories";
import { aboutMe } from "../constants/aboutMe";

function About() {
    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-purple-400 text-sm tracking-[0.5em] mb-4">PROFILE_DATA</div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-wider">
                            <span className="text-white">ABOUT</span>
                            <span className="text-cyan-400 ml-4">プロフィール</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 text-left">
                            <div className="bg-gray-900/30 border border-purple-400/30 hover:border-purple-400 p-8 flex flex-col transition-all duration-300"
                                style={{ clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)' }}>
                                <div className="text-purple-400 text-xs tracking-widest mb-4">SYSTEM_INFO</div>
                                <p className="text-gray-300 leading-relaxed mb-4 grow">
                                    {aboutMe.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <div className="mt-6 flex items-center space-x-4">
                                    <div className="w-3 h-3 bg-purple-400 animate-pulse"></div>
                                    <span className="text-purple-400 text-sm tracking-widest">SYSTEM_ONLINE</span>
                                </div>
                            </div>

                        <div className="grid grid-cols-2 gap-6">
                            {skillCategories.map((skill, index) => (
                                <div
                                    key={index}
                                    className={`bg-gray-900/50 border border-${skill.color}-400/30 p-6 hover:border-${skill.color}-400 transition-all duration-300 group`}
                                    style={{ clipPath: 'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)' }}
                                >
                                    <skill.icon className={`w-8 h-8 text-${skill.color}-400 mb-4 transition-transform fill-current`} />
                                    
                                    <h3 className="text-lg font-bold mb-1">{skill.title}</h3>
                                    <p className={`text-${skill.color}-400 text-xs mb-4 tracking-widest`}>{skill.subtitle}</p>
                                    <div className="space-y-1">
                                        {skill.techs.map((tech, techIndex) => (
                                            <div key={techIndex} className="text-xs text-gray-400">{tech}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About