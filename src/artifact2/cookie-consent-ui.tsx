import React, { useState } from 'react';
import styles from './style.module.css';

const CookieConsentUI: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [consents, setConsents] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type: keyof typeof consents) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setConsents((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleClose = () => setVisible(false);

  return (
    <div className={styles.container}>
     
      {visible && (
        <div className={styles.consentOverlay}>
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3 className={styles.panelTitle}>Cookie Preferences</h3>
              <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">×</button>
            </div>

            <p className={styles.panelDesc}>
              We use cookies to enhance your browsing experience. Please select which cookies you would like to enable.
            </p>

            <div className={styles.toggleOptions}>
              {[
                {
                  type: 'essential',
                  label: 'Essential Cookies',
                  desc: 'Required for basic website functionality and security. Cannot be disabled.',
                  icon: '🔒',
                  disabled: true,
                },
                {
                  type: 'analytics',
                  label: 'Analytics Cookies',
                  desc: 'Help us understand how you use our website so we can improve the experience.',
                  icon: '📊',
                  disabled: false,
                },
                {
                  type: 'marketing',
                  label: 'Marketing & Personalization',
                  desc: 'Allow us to provide personalized content and recommendations based on your preferences.',
                  icon: '❤️',
                  disabled: false,
                },
              ].map(({ type, label, desc, icon, disabled }) => (
                <div key={type} className={styles.toggleOption}>
                  <div className={styles.optionInfo}>
                    <div className={styles.optionIcon}>{icon}</div>
                    <div className={styles.optionText}>
                      <div className={styles.optionLabel}>{label}</div>
                      <div className={styles.optionDesc}>{desc}</div>
                    </div>
                  </div>
                  <label className={styles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={consents[type as keyof typeof consents]}
                      onChange={() => handleToggle(type as keyof typeof consents)}
                      disabled={disabled}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              ))}
            </div>

            <div className={styles.consentButtons}>
              <button onClick={handleClose} className={`${styles.btn} ${styles.btnOutline}`}>
                Reject All
              </button>
              <button onClick={handleClose} className={`${styles.btn} ${styles.btnPrimary}`}>
                Save Preferences
              </button>
            </div>

            <div className={styles.footerNote}>
              You can change your preferences anytime in our privacy settings.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentUI;