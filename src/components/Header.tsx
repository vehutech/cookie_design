import './header.css';

const Header = () => {
    return (
        <div className="project-header">
            <div className="header-top">
                <div className="logo-container">
                    <img src="https://logo.clearbit.com/bournemouth.ac.uk" alt="Bournemouth University Logo" />
                </div>
                <div className="project-info">
                    <h1 className="project-title">Research Project</h1>
                    <h2 className="project-topic">
                        Designing a Privacy-Centric Cookie Consent Interface to Enhance User Understanding and Compliance
                    </h2>
                    <p className="author-name">By: Temitope Timothy Alabi</p>
                    <p className="degree">MSc Cyber Security</p>
                    <div className="tags">
                        <span className="tag">Cybersecurity</span>
                        <span className="tag secondary">Privacy</span>
                        <span className="tag tertiary">User Experience</span>
                    </div>
                </div>
            </div>
            <div className="header-footer">
                Bournemouth University | 2025
            </div>
        </div>
    )
}

export default Header