import React, {useState} from 'react';
import './../styles/contrastChecker.scss'

const ConstrastChecker: React.FC = () => {
    const [bgColor, setBgColor] = useState<string>('#fb5899');
    return (
        <>
            <section className="contrast-tool">
                <h3>Prueba de contraste</h3>
                <input 
                type="color" 
                value={bgColor} 
                onChange={(e) => setBgColor(e.target.value)} 
                />
            </section>

            <div 
            className="preview-box" 
            style={{ backgroundColor: bgColor }}>
                <p style={{ color: '#000000' }}>Texto de ejemplo</p>
                <p style={{ color: '#ffffff' }}>Texto de ejemplo</p>
            </div>
        </>
    );
};

export default ConstrastChecker;