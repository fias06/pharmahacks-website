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
                        <Member img="2025_members/Onur_Gul.jpg" n="Onur Gul" position="President" field="U3 Mathematics/Computer Science" className = "vp-border"/>
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
                        <Member img="2025_members/Celine.jpg" n="Celine Sakkal" position=" VP Sponsorship" field="U2 Computer Science" className="vp-border"/>
                        <Member img="2025_members/Yue_Qian_Zhang.jpg" n="Yue Qian Zhang" position="Sponsorship Coordinator" field="U1 Med-P"className="non-vp-border"/>
                        <Member img="2025_members/Marie.jpg" n="Marie Pyun" position="Sponsorship Coordinator" field="U2 Biology and Math"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Finance</span></div> 
                    <div className='m-list'>
                    <Member img="2025_members/Tracy.jpg" n="Tracy Wang" position=" VP Finance" field="U3 Neuroscience" className="vp-border"/>
                    <Member img="2025_members/Zi_Yu_Choo.jpg" n="Zi Yu Choo" position=" Finance Coordinator" field="Finance (exchange)" className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Logistics</span></div> 
                    <div className='m-list'>
                    <Member img="2025_members/Stephen_Blackburn.jpg" n="Stephen Blackburn" position="VP Logistics" field="U1 Finance" className="vp-border"/>
                    <Member img="2025_members/Jackson_Yu.jpg" n="Jackson Yu" position="Logistics Coordinator" field="U3 Bioengineering"className="non-vp-border"/>
                    <Member img="2025_members/Alina_Weng.jpg" n="Alina Weng" position="Logistics Coordinator" field="U2 Bioengineering"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Communications</span></div> 
                    <div className='m-list'>
                    <Member img="2025_members/Cindy.jpg" n="Cindy Li" position="VP Communications" field="U2 Neuroscience" className="vp-border"/>
                    <Member img="2025_members/Ryan_Mazaheri.JPG" n="Ryan Mazaheri" position="Communications committee" field="U2 Pharmacology" className="non-vp-border"/>
                    <Member img="2025_members/Lisa.jpg" n="Lisa Kawwas" position="Communications Coordinator" field="U2 Pharmacology" className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Machine Learning</span></div> 
                    <div className='m-list'>
                    <Member img="2025_members/Theodor_Semerdzhiev.png" n="Theodor Semerdzhiev" position="VP Machine Learning" field="U3 Computer Science" className="vp-border"/>
                    <Member img="2025_members/Dowoo_Kim.jpg" n="Dowoo Kim" position="ML & Sponsorship Liason" field="U3 Statistics/Computer Science" className="non-vp-border"/>
                    <Member img="2025_members/Aymen.jpg" n="Aymen Boustani" position="Machine Learning" field="U4 Mechanical Engineering, Minor Applied AI"className="non-vp-border"/>
                    <Member img="2025_members/Dev_Patel.jpg" n="Dev Patel" position="Machine Learning" field="Computer Science Graduate"className="non-vp-border"/>
                    </div>
                    <div className='m-committees'><span>Web Development</span></div> 
                    <div className='m-list'>
                    <Member img="2025_members/Saif_Shaikh.jpg" n="Saif Shaikh" position="VP Web Development" field="U1 Mathematics/Computer Science" className ="vp-border"/>
                    </div>
                </div>
            </div>
        </div>
    )}
}
