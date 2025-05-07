import { useState } from 'react';
import styles from './style.module.css';

function CookieConsentUI () {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);

  const handleOptionClick = (option: string) => {
    console.log(`Cookie option selected: ${option}`);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  return (
    <div className={styles.website_container}>
      {visible && (
        <div className={styles.cookie_consent} role="dialog" aria-modal="true">
          <div className={styles.cookie_container}>
            <div className={styles.cookie_header}>
              <h2 className={styles.cookie_title}>Cookie Preferences</h2>
              <button
                className={styles.close_button}
                onClick={handleClose}
                aria-label="Close cookie preferences"
              >
                ×
              </button>
            </div>

            <p className={styles.cookie_desc}>
              We use cookies to enhance your browsing experience and analyze site traffic.
              Choose how you'd like us to use cookies:
            </p>

            <div className={styles.cookie_options}>
              {[
                {
                  type: 'love',
                  icon: '❤️',
                  title: 'Love it!',
                  desc: 'Accept all cookies and get the full personalized experience with recommendations',
                },
                {
                  type: 'like',
                  icon: '👍',
                  title: 'Like it',
                  desc: 'Accept essential and analytics cookies only, without personalization',
                },
                {
                  type: 'no-thanks',
                  icon: '👎',
                  title: 'No thanks',
                  desc: 'Accept only essential cookies necessary for site function',
                },
              ].map(({ type, icon, title, desc }) => (
                <button
                  key={type}
                  className={`${styles.cookie_option} ${styles[type + '_icon'] || ''}`}
                  onClick={() => handleOptionClick(type)}
                >
                  <div className={`${styles.option_icon}`}>{icon}</div>
                  <div className={styles.option_title}>{title}</div>
                  <div className={styles.option_desc}>{desc}</div>
                </button>
              ))}
            </div>

            <div className={styles.cookie_footer}>
              You can change your preferences anytime in our privacy settings.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsentUI;
