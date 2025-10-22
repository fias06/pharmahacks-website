import React from 'react';
import Member from '../components/Member';
import '../styles/Members.css';
// import Typical from 'react-typical';

export default class Members extends React.Component{
    render(){return(
        <div>
            <div className='members-container'>
                <div className='m-prez'>
                    <div className='m-committees'><span>Pharmahacks President</span></div>  
                    <div className='m-prezImg'>
                        <Member img="2024_members/Onur_Gul.png" n="Onur Gul" position="President" field="U2 Mathematics/Computer Science" className = "vp-border"/>
                    </div>
                    {/* <div className='m-prezText'>
                        <span> "We are a group of students passionate about facilitating the transition of students from academia to industry by organizing <br/>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    ' Hackathons."', 1000,
                                    ' Workshops."', 1000,
                                    ' Networking Events."', 1000
                                ]}
                            />
                            <br/>
                            <p className='m-presQuotation'><i>-Ozhan, Pharmhacks President</i></p>
                        </span>
                    </div> */}
                </div>
            </div>

            <div className="members-container" id="members">
                <div>
                    <div className='m-committees'><span>Sponsorship</span></div>          
                    <div className='m-list'>
                        <Member img="2024_members/Celine.png" n="Celine Sakkal" position=" VP Sponsorship" field="U1 Computer Science" className="vp-border"/>
                        <Member img="2024_members/Antonin.png" n="Antonin Beranger" position="Sponsorship Coordinator" field="U2 Economics and Computer Science"className="non-vp-border"/>
                        <Member img="2024_members/Marie.png" n="Marie Pyun" position="Sponsorship Coordinator" field="U1 Biology and Math"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Finance</span></div> 
                    <div className='m-list'>
                    <Member img="2024_members/Ali.png" n="Ali Douba" position=" VP Finance" field="U4 Finance, Analytics, and Sustainability" className="vp-border"/>
                    <Member img="2024_members/Shahd.png" n="Shahd Audi" position=" Finance Coordinator" field="U3 Kinesiology" className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Logistics</span></div> 
                    <div className='m-list'>
                    <Member img="2024_members/Tracy.png" n="Tracy Wang" position="VP Logistics" field="U2 Neuroscience" className="vp-border"/>
                    <Member img="2024_members/Zhi.png" n="Zhi Jun Liu" position="Logistics Coordinator" field="U1 Med-P"className="non-vp-border"/>
                    <Member img="2024_members/Tanjin.jpg" n="Tanjin Sultana" position="Logistics Coordinator" field="U2 Bioengineering"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Communications</span></div> 
                    <div className='m-list'>
                    <Member img="2024_members/Cindy.png" n="Cindy Li" position="Co-VP Communications" field="U1 Neuroscience" className="vp-border"/>
                    <Member img="2024_members/Kathleen.jpg" n="Kathleen Brown" position="Co-VP Communications" field="U3 Anatomy and Cell Biology" className="vp-border"/>
                    <Member img="2024_members/Lisa.png" n="Lisa Kawwas" position="Communications Coordinator" field="U1 Pharmacology and Therapeutics" className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Machine Learning</span></div> 
                    <div className='m-list'>
                    <Member img="2024_members/Ozhan.png" n="Ozhan Dehghani" position="VP Machine Learning" field="M1 Neuro AI" className="vp-border"/>
                    <Member img="2024_members/Leila.png" n="Leila Daoud" position="ML & Sponsorship Liason" field="U0 Mechanical Engineering" className="non-vp-border"/>
                    <Member img="2024_members/Aymen.png" n="Aymen Boustani" position="Machine Learning" field="U4 Mechanical Engineering, Minor Applied AI"className="non-vp-border"/>
                    <Member img="2024_members/Dev.png" n="Dev Patel" position="Machine Learning" field="Computer Science Graduate"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Web Development</span></div> 
                    <div className='m-list'>
                    <Member img="2024_members/Onur_Gul.png" n="Onur Gul" position="VP Web Development" field="U2 Mathematics/Computer Science" className ="vp-border"/>
                    </div>
                </div>
            </div>
        </div>
    )}
}
