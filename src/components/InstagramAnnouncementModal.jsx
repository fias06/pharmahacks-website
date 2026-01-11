import React, { useState, useEffect } from 'react';
import '../styles/InstagramAnnouncementModal.css';

const InstagramAnnouncementModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const announcementExpiry = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

  useEffect(() => {
    // Check local storage for the announcement data
    const storedData = localStorage.getItem('announcementData');
    if (storedData) {
      const data = JSON.parse(storedData);
      const now = new Date().getTime();
      if (now - data.timestamp < announcementExpiry) {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }
    }

    // Cleanup function to remove the class and restore scroll when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  };

  if (!isVisible) return null;

  const imageUrl ="/images/welcome/ss120.png";
  const description = "Come join PharmaHacks for a workshop led by Yuan Ding! Yuan is a MSc student in human genetics at McGill.The workshop will cover linear regression, clustering, and Bayesian statistics.Date: January 16th, 2024Time: 4:00pm - 6:00pmLocation: Trottier Building 2110, Sign up using the QR code or using the link in our bio. We hope to see you there! 💻";

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>&times;</span>
        <img src={imageUrl} alt="Announcement" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InstagramAnnouncementModal;



