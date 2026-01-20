import React, { useState, useEffect, useRef } from 'react';
import '../styles/Highlight.css'; 

// Team member data with testimonials for Event 2024
const executives = [
    {
        name: "Faye Nikolettos",
        position: "President",
        img: "images/members/Faye.png",
        field: "BSc. Neuroscience",
        testimonial: "Directed an interdisciplinary team of undergraduate and graduate students, spearheaded collaborations with the D3 Innovation Hub, and created valuable marketing opportunities for local businesses. Can comfortably say she had the best team!"
    },
    {
        name: "Efe Ertugrul",
        position: "VP Web Development",
        img: "images/members/Efe2.png",
        field: "B.A. Computer Science",
        testimonial: "Enhanced the website's functionality by resolving key bugs, enriching the content for improved information delivery, and provided essential technical support to students."
    },
    {
        name: "Yohaï-Eliel Berreby",
        position: "VP Machine Learning",
        img: "images/members/Yohai2.png",
        field: "Ph.D. Physiology",
        testimonial: "As VP of Machine Learning, I led the Machine Learning Committee, orchestrating the development of challenges, including the neural decoding challenge, and the production of participant and jury handbooks. Throughout the event, I offered conceptual and technical support to contestants, briefed academic jury members, and contributed as a jury member myself."
    },
    {
        name: "Sabrina Du",
        position: "Machine Learning and Sponsorships Liaison",
        img: "images/members/Sabrina.png",
        field: "BSc. Neuroscience",
        testimonial: "In preparation for PharmaHacks 2024, I collaborated with the ML team to design machine learning challenges, secured sponsorships, and facilitated communication between sponsors like WolframAlpha and our team, ensuring our challenges reflected sponsor values. Throughout the hackathon, I served as a liaison between participants and the VP of Machine Learning, offering guidance and support to students. Contributing to the success of PharmaHacks 2024 was a rewarding experience."
    },
    {
        name: "Amir Rajabi Vajargah",
        position: "Machine Learning",
        img: "images/members/Amir.png",
        field: "Msc Human Genetics",
        testimonial: "Developed the genomics challenge for the hackathon, provided mentorship to two undergraduate students on the ML team, and actively supported participants by answering their questions throughout the event"
    },
    {
        name: "Chinmay Desai",
        position: "Machine Learning",
        img: "",
        field: "BSc. CompSci & Biology",
        testimonial: "I played an integral role in developing the PharmaHacks challenges, thoroughly engaging with the latest scientific research in relevant fields to ensure our topics were cutting-edge. I also contributed to setting the judging criteria and was actively involved in crafting the participant handbook, which provided comprehensive guidance and information to competitors. This dedication aimed to foster a well-organized, competitive, and educational environment for all participants."
    },
    {
        name: "Goktug Bender",
        position: "VP Sponsorship",
        img: "images/members/Goktug.png",
        field: "BA. Psychology",
        testimonial: "As VP Sponsorship for PharmaHacks, I led fundraising efforts, securing over $2750 by engaging McGill University departments and faculties. I guided a dedicated sponsorship committee, ensuring unified resource acquisition, and successfully negotiated a coffee sponsorship to enhance the participant experience."
    },
    {
        name: "Celine Sakkal",
        position: "Sponsorship",
        img: "images/members/Celine.png",
        field: "BSc Computer Science",
        testimonial: "As a member of the sponsorship committee, I played a key role in securing financial support for our hackathon by pitching the event to a wide range of organizations. Through effective negotiation, we successfully garnered the backing of 15 sponsors, including research institutions and multinational companies."
    },
    {
        name: "Alexia Botezatu",
        position: "VP Logistics",
        img: "images/members/Alexia.png",
        field: "B.A. History & Anthropology",
        testimonial: "As the VP logistics, I had the opportunity to oversee a team of dedicated members. Charged with delegating tasks, I assigned tasks to team members according to their skills and interest. As VP logistics, I was involved in communicating with participating parties, problem solving, research, merchandise design, placing orders and scheduling. I also had the chance to organise a fundraiser before the event in order to raise funds and awareness of our organization."
    },
    {
        name: "Debbie Fitopoulos",
        position: "Logistics",
        img: "images/members/Debbie.png",
        field: "BASc Biology & Anthropology",
        testimonial: "As part of the Logistics Team for PharmaHacks, alongside my esteemed colleagues Tracy and Alexia (VP), we focused on enhancing the hackathon experience through meticulous attention to detail. Our responsibilities included catering, venue setup, and decorations, as well as providing memorable keepsakes for attendees. Our collective efforts ensured an optimal environment that contributed significantly to the success of the event. I am proud to have played a role in what was acclaimed as the most successful PharmaHacks to date, amplifying the exceptional work of the entire team and participants."
    },
    {
        name: "Tracy Wang",
        position: "Logistics",
        img: "images/members/Tracy.png",
        field: "BSc. Neuroscience",
        testimonial: "My primary responsibilities included procuring essential materials necessary for the smooth execution of the hackathon. During the event, I was pivotal in managing participant sign-in, ensuring a seamless registration process for all attendees. Additionally, I played a crucial role in organizing and conducting prize raffles, and I actively participated in the post-event cleanup, contributing to the overall organization and success of the event."
    },
    {
        name: "Carine Zbibo",
        position: "VP Communications",
        img: "images/members/Carine2.png",
        field: "BSc. Pharmacology and Therapeutics",
        testimonial: "As Vice President of the Communications Team, I focused on expanding outreach by actively advertising across various platforms and engaging directly with professors, judges, and audiences to boost interest and participation. Our efforts in bridging connections between the team and external stakeholders were vital for fostering collaboration and enthusiasm. Seeing our work's positive impact on participants and professors has been incredibly motivating and drives us to continue striving for excellence."
    },
    {
        name: "Cindy Li",
        position: "Communications",
        img: "images/members/Cindy.png",
        field: "BSc. Life Sciences",
        testimonial: "As part of my involvement with PharmaHacks, I was instrumental in designing engaging promotional posters that were pivotal in marketing various events. Additionally, I managed effective communication by sending detailed emails to judges and participants, providing them with essential information about the hackathon, ensuring they were well-informed and prepared. I also played a key role in managing and enhancing PharmaHacks' presence on social media platforms, which involved regular updates and interactive engagements that significantly boosted our visibility and participant interaction."
    },
    {
        name: "Enzo Manzi-Murabukirwa",
        position: "VP Finance",
        img: "images/members/Enzo2.png",
        field: "BSc. Biochemistry",
        testimonial: "As Vice President of Finance, I managed a budget of nearly $17,000 with diligent fiscal responsibility, ensuring strategic fund allocation that supported our organization's mission. I implemented robust financial controls and maintained transparent reporting, enhancing trust and accountability within the team. My leadership in finance significantly contributed to our organization's sustainability and growth."
    },
    {
        name: "Joanne Kavouras",
        position: "Finance",
        img: "images/members/Joanne.png",
        field: "BA. Economics",
        testimonial: "I assisted in auditing the PharmaHacks Finance reports for the 2023-2024 fiscal year, which were submitted to both SSMU and SUS. I carefully reviewed and edited the budget sheets to guarantee accuracy in the financial data. This meticulous verification process was essential for maintaining transparency and accountability in our financial reporting."
    }
];

export default function Highlight() {
    // For the image carousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    // For the testimonials carousel
    const [activePage, setActivePage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const itemsPerPage = windowWidth <= 1200 ? 1 : 3;
    const totalPages = Math.ceil(executives.length / itemsPerPage);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Refs for the parallax effect
    const galleryRef = useRef(null);
    const testimonialRef = useRef(null);
    
    // Event photos
    const eventImages = [
        "images/event/IMG_0572.JPG",
        "images/event/IMG_0576.JPG",
        "images/event/IMG_0579.JPG",
        "images/event/IMG_0581.JPG",
        "images/event/IMG_0589.JPG",
        "images/event/IMG_0594.JPG",
        "images/event/IMG_0599.JPG"
    ];
    
    // Auto-rotate images
    useEffect(() => {
        let interval;
        if (isAutoPlaying && eventImages.length > 0) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % eventImages.length);
            }, 7500);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, eventImages.length]);
    
    // Parallax effect on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (galleryRef.current) {
                const scrollPosition = window.scrollY;
                galleryRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
            if (testimonialRef.current) {
                const scrollPosition = window.scrollY;
                testimonialRef.current.style.transform = `translateY(${scrollPosition * 0.08}px)`;
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Track window resize for responsive design
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Handle manual navigation for images
    const nextImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % eventImages.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };
    
    const prevImage = () => {
        setIsAutoPlaying(false);
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + eventImages.length) % eventImages.length);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };
    
    // Handle manual navigation for testimonials
    const nextTestimonialPage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActivePage(prevPage => (prevPage + 1) % totalPages);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };
    
    const prevTestimonialPage = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setActivePage(prevPage => (prevPage - 1 + totalPages) % totalPages);
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }
    };
    
    // For smooth scrolling
    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    // Create grouped testimonial pages
    const testimonialPages = [];
    for (let i = 0; i < executives.length; i += itemsPerPage) {
        testimonialPages.push(executives.slice(i, i + itemsPerPage));
    }
    
    return (
        <div className="highlight-container">
            {/* Animated background elements */}
            <div className="event-background">
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
            </div>
            
            {/* Event header */}
            <div className="event-header">
                <img src="images/welcome/pharma_logo_2024.png" alt="PharmaHacks 2024" className="event-logo-img" />
                <h2 className="event-title">Innovate • Collaborate • Transform</h2>
                <div className="event-date-badge">March 2024</div>
                
                <div className="quick-nav-buttons">
                    <button onClick={() => scrollToSection(galleryRef)} className="quick-nav-button">Gallery</button>
                    <button onClick={() => scrollToSection(testimonialRef)} className="quick-nav-button">Testimonials</button>
                </div>
            </div>
            
            {/* Gallery section */}
            <section className="event-gallery-section" ref={galleryRef}>
                <div className="section-container">
                    <h2 className="section-title">Event Gallery</h2>
                    <div className="gallery-container">
                        <button className="gallery-nav gallery-prev" onClick={prevImage}>❮</button>
                        <div className="gallery-wrapper">
                            {eventImages.map((image, index) => (
                                <div 
                                    key={index} 
                                    className={`gallery-item ${index === currentImageIndex ? 'active' : ''}`}
                                    style={{transform: `translateX(${(index - currentImageIndex) * 100}%)`}}
                                >
                                    <img src={image} alt={`Event 2024 - ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="gallery-nav gallery-next" onClick={nextImage}>❯</button>
                        <div className="gallery-dots">
                            {eventImages.map((_, index) => (
                                <span 
                                    key={index} 
                                    className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentImageIndex(index);
                                        setTimeout(() => setIsAutoPlaying(true), 10000);
                                    }}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials section */}
            <section className="event-testimonials-section" ref={testimonialRef}>
                <div className="section-container">
                    <h2 className="section-title">Team Testimonials</h2>
                    <div className={`testimonials-multi-container ${windowWidth <= 1200 ? 'testimonials-mobile-single' : ''}`}>
                        <button className="testimonial-nav testimonial-prev" onClick={prevTestimonialPage}>❮</button>
                        <div className="testimonials-slider">
                            <div 
                                className="testimonials-track" 
                                style={{ transform: `translateX(-${activePage * 100}%)` }}
                            >
                                {testimonialPages.map((page, pageIndex) => (
                                    <div key={pageIndex} className="testimonials-page">
                                        {page.map((executive, index) => (
                                            <div key={index} className="testimonial-card">
                                                <div className="testimonial-image">
                                                    {executive.img ? (
                                                        <img src={executive.img} alt={executive.name} />
                                                    ) : (
                                                        <div className="testimonial-placeholder">{executive.name.charAt(0)}</div>
                                                    )}
                                                </div>
                                                <div className="testimonial-content">
                                                    <h3>{executive.name}</h3>
                                                    <h4>{executive.position}</h4>
                                                    <p className="testimonial-field">{executive.field}</p>
                                                    <div className="testimonial-quote-container">
                                                        <p className="testimonial-quote">"{executive.testimonial}"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="testimonial-nav testimonial-next" onClick={nextTestimonialPage}>❯</button>
                    </div>
                    <div className="testimonial-dots">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <span 
                                key={index} 
                                className={`testimonial-dot ${index === activePage ? 'active' : ''}`}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setActivePage(index);
                                        setTimeout(() => {
                                            setIsAnimating(false);
                                        }, 500);
                                    }
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
