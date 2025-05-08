import { useParams, useNavigate } from 'react-router-dom';
import { Brand } from '../data/brand';
import Like from '../artifact1/cookie-consent-ui';
import Toggle from '../artifact2/cookie-consent-ui';
import Check from '../artifact3/cookie-consent-ui';
import { useState } from 'react';
import Header from './Header';

interface BrandPageProps {
    brands: Brand[];
}

// Dynamically import all .png files in src/assets
const imageModules = import.meta.glob('/src/assets/*.PNG', {
    query: '?url',
    import: 'default',
    eager: true
});


// Dynamically import all .png files in src/assets
const Module_freshityBanner = import.meta.glob('/src/assets/*.png', {
    query: '?url',
    import: 'default',
    eager: true
});

// Get the specific image by filename
const freshityBanner = Module_freshityBanner['/src/assets/freshity_banner.png'] as string;

// Create a mapping of brand.id to image URLs
const imageMap: Record<string, string> = {};
Object.entries(imageModules).forEach(([path, url]) => {
    // Extract the filename without extension (e.g., 'tesco' from '/src/assets/tesco.png')
    const fileName = path.split('/').pop()?.replace('.PNG', '') || '';
    imageMap[fileName] = url as string;
});

// Configuration for each brand's initial UI and allowed UI transitions
const brandUIConfig: Record<string, { initial: string; allowed: string[] }> = {
    tesco: { initial: 'like', allowed: ['like', 'toggle'] },
    amazon: { initial: 'like', allowed: ['like', 'toggle'] },
    mcdonalds: { initial: 'like', allowed: ['like', 'toggle'] },
    'the-perfume-shop': { initial: 'like', allowed: ['like', 'toggle'] },
    trainline: { initial: 'like', allowed: ['like', 'toggle'] },
    'slim-chickens': { initial: 'toggle', allowed: ['toggle', 'check'] },
    asda: { initial: 'like', allowed: ['like', 'toggle', 'check'] },
    temu: { initial: 'like', allowed: ['like', 'check'] },
    freshity: { initial: 'toggle', allowed: ['toggle'] },
    trainpal: { initial: 'check', allowed: ['check'] }
};

// Map UI names to components
const uiComponents: Record<string, React.ComponentType> = {
    like: Like,
    toggle: Toggle,
    check: Check
};

function BrandPage({ brands }: BrandPageProps) {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const brand = brands.find(b => b.id === id);

    if (!brand) return <div>Brand not found</div>;

    // Initialize current UI based on brand
    const config = brandUIConfig[brand.id] || { initial: 'like', allowed: ['like'] };
    const [currentUI, setCurrentUI] = useState(config.initial);

    // Get the next UI for the button (if any)
    const currentIndex = config.allowed.indexOf(currentUI);
    const nextUI = config.allowed[currentIndex + 1] || config.allowed[0];
    const hasMultipleUIs = config.allowed.length > 1;

    // Capitalize UI name for button text (e.g., 'toggle' → 'Toggle')
    const formatUIName = (ui: string) => ui.charAt(0).toUpperCase() + ui.slice(1);

    // Handle button click to cycle through allowed UIs
    const handleChangeUI = () => {
        setCurrentUI(nextUI);
    };

    // Select the current UI component
    const CurrentUIComponent = uiComponents[currentUI] || Like;

    // Get the image URL for the current brand
    const imageSrc = imageMap[brand.id] || '/fallback.png'; // Fallback image if not found

    const getUIReadableName = (ui: string): string => {
        switch (ui) {
            case 'like':
                return 'Like/Love Buttons';
            case 'toggle':
                return 'Toggle Switches';
            case 'check':
                return 'Checkboxes';
            default:
                return formatUIName(ui);
        }
    };
    

    return (
        <div className="firefox-container">
            <Header/>
            <div className="top-nav">
                <div className="nav-title">Platform - {brand.name}</div>
                <button className="refresh-button" onClick={() => navigate(-1)}>Back</button>
            </div>

            {hasMultipleUIs && (
                <button
                    className="change-ui-button"
                    onClick={handleChangeUI}
                >
                    Change Preferred Consent Mechanism to {getUIReadableName(nextUI)}

                </button>
            )}

            <div className="main-content brand-page-container">
                <div className="brand-page">
                    <div className="brand-page-header">
                        <img src={brand.logo} alt="" />
                        <div className="brand-page-title">{brand.name}</div>
                        <button className="close-button" onClick={() => navigate('/')}>×</button>
                    </div>

                    <div className="brand-page-content">
                        <img src={brand.id === "freshity" ? freshityBanner : imageSrc} alt="Banner" />
                        <CurrentUIComponent />
                        <div className="brand-cta">
                            <a href={brand.url} target="_blank" rel="noopener noreferrer" className="visit-button">
                                Visit {brand.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-links">
                    <span onClick={() => navigate('/')}>Back to Home</span>
                </div>
            </footer>
        </div>
    );
}

export default BrandPage;