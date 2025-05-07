import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './styles.module.css';

type CookieType = 'necessary' | 'functional' | 'analytics' | 'marketing';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentUI: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const [isModalOpen, setIsModalOpen] = useState(true); // Add state for modal visibility

  const handleCheckboxChange = (type: CookieType) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAccept = () => {
    alert("Preferences saved: " + JSON.stringify(cookiePreferences, null, 2));
    setIsModalOpen(false); // Close the modal after saving preferences
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    setIsModalOpen(false); // Close the modal after accepting all cookies
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when the close button is clicked
  };

  return (
    <div className={styles.wrapper}>
     
      <div className={styles.container}>

        <div className={styles.cookiePreferences}>
          <div className={styles.subHeader}>
            <div className={styles.placeholder} />
            <div className={styles.placeholderGroup}>
              {Array(3).fill(null).map((_, idx) => (
                <div key={idx} className={styles.placeholder} />
              ))}
            </div>
          </div>

          <div className={styles.cardGrid}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className={styles.card}>
                <div className={styles.avatar}></div>
                <div className={styles.title}></div>
                <div className={styles.details}>
                  <div className={styles.placeholder} />
                  <div className={styles.placeholder} />
                  <div className={styles.placeholder} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.placeholder} />
            <div className={styles.footerGroup}>
              {Array(3).fill(null).map((_, idx) => (
                <div key={idx} className={styles.placeholder} />
              ))}
            </div>
          </div>
        </div>

        {isModalOpen && (  // Only render the modal if isModalOpen is true
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <div className={styles.headerIcon}>
                  <div className={styles.iconCircle}>
                    <div className={styles.iconDot}></div>
                  </div>
                  <h2 className={styles.modalTitle}>Cookie Preferences</h2>
                </div>
                <button className={styles.closeButton} onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>

              <p className={styles.modalDescription}>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By selecting your preferences, you control what data we collect.
              </p>

              <div className={styles.preferenceList}>
                {(['necessary', 'functional', 'analytics', 'marketing'] as CookieType[]).map((type) => (
                  <div key={type} className={styles.preferenceItem}>
                    <div className={styles.checkboxWrapper}>
                      <input
                        id={type}
                        type="checkbox"
                        checked={cookiePreferences[type]}
                        onChange={type === 'necessary' ? undefined : () => handleCheckboxChange(type)}
                        disabled={type === 'necessary'}
                        className={styles.checkbox}
                      />
                    </div>
                    <div className={styles.preferenceDescription}>
                      <label htmlFor={type} className={styles.preferenceLabel}>{type} Cookies</label>
                      <p className={styles.preferenceText}>
                        {{
                          necessary: 'These cookies are essential for the website to function properly. They cannot be disabled.',
                          functional: 'These cookies enable personalized features and functionality such as videos, live chat, and commenting systems.',
                          analytics: 'These cookies help us understand user behavior and improve our website through anonymous data collection.',
                          marketing: 'These cookies enable personalized advertisements across our website and third-party platforms based on your browsing activity.'
                        }[type]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.modalFooter}>
                <button 
                  onClick={handleAccept}
                  className={styles.saveButton}
                >
                  Save Preferences
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className={styles.acceptButton}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentUI;
