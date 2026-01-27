import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-container" id="welcome">
                <div className="w-background-container">
                    {/* Animated background elements */}
                    <div className="animated-blob blob1"></div>
                    <div className="animated-blob blob2"></div>
                    <div className="animated-blob blob3"></div>
                    <div className="animated-ring ring1"></div>
                    <div className="animated-ring ring2"></div>
                    <div className="sparkle sparkle1"></div>
                    <div className="sparkle sparkle2"></div>
                    <div className="sparkle sparkle3"></div>
                    <div className="sparkle sparkle4"></div>
                    <div className="sparkle sparkle5"></div>
                    <div className="purple-particle particle1"></div>
                    <div className="purple-particle particle2"></div>
                    <div className="purple-particle particle3"></div>
                    <div className="purple-particle particle4"></div>
                    <div className="purple-particle particle5"></div>
                </div>
                
                <div className="w-title-section">
                    <img src="./images/welcome/pharma2025.png" alt="Pharmahacks 2026" className="w-title-text" />
                    
                    {/* Hackathon Date */}
                    <div className="thematic-text">
                        <span role="img" aria-label="calendar">📅</span>
                        {" "}March 21-22, 2026{" "}
                        <span role="img" aria-label="calendar">📅</span>
                    </div>

                    {/* Button to the application form */}
                    <div className="application-link">
                        <button 
                            className="apply-button"
                            type="button"
                        >
                            Applications Opening Soon!
                        </button>
                    </div>
                </div>

                <div className="dna-animation-container">
                    <div className="dna-helix">
                        {/* Add backbone strands for the DNA */}
                        <div className="dna-strand left"></div>
                        <div className="dna-strand right"></div>
                        
                        {/* Create 80 pairs of rungs for the DNA helix (doubled from 40) */}
                        {Array.from({ length: 80 }).map((_, index) => (
                            <div key={index} className="dna-pair" style={{ 
                                animationDelay: `${index * 0.15}s`,
                                top: `${index * 2.5}px`,
                                "--i": index
                            }}>
                                <div className="dna-rung left"></div>
                                <div className="dna-base left" style={{ "--i": index }}></div>
                                <div className="dna-base right" style={{ "--i": index }}></div>
                                <div className="dna-rung right"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Add floating data particles around the DNA */}
                    <div className="data-particle p1">01</div>
                    <div className="data-particle p2">10</div>
                    <div className="data-particle p3">A</div>
                    <div className="data-particle p4">G</div>
                    <div className="data-particle p5">C</div>
                    <div className="data-particle p6">T</div>
                    <div className="data-particle p7">11</div>
                    <div className="data-particle p8">00</div>
                    {/* Additional data particles for the longer DNA */}
                    <div className="data-particle p9">AT</div>
                    <div className="data-particle p10">GC</div>
                    <div className="data-particle p11">CG</div>
                    <div className="data-particle p12">TA</div>
                    <div className="data-particle p13">01</div>
                    <div className="data-particle p14">10</div>
                    <div className="data-particle p15">01</div>
                    <div className="data-particle p16">11</div>
                    {/* Additional data particles for the even longer DNA */}
                    <div className="data-particle p17">GA</div>
                    <div className="data-particle p18">TC</div>
                    <div className="data-particle p19">AG</div>
                    <div className="data-particle p20">CT</div>
                    <div className="data-particle p21">00</div>
                    <div className="data-particle p22">11</div>
                    <div className="data-particle p23">10</div>
                    <div className="data-particle p24">01</div>
                </div>
            </div>
        );
    }
}
