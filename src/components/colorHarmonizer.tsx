import React, { useState, useEffect } from 'react';
import './../styles/colorHarmonizer.scss'

const ColorHarmonizer: React.FC = () => {
    const [hue, setHue] = useState<number>(180);
    const [circleHues, setCircleHues] = useState<number[]>([0, 90, 180, 270]);

    const getHarmonies = (h: number) => {
        return [
            { type: 'Base', val: `hsl(${h}, 70%, 50%)` },
            { type: 'Complementario', val: `hsl(${(h + 180) % 360}, 70%, 50%)` },
            { type: 'Triada A', val: `hsl(${(h + 120) % 360}, 70%, 50%)` },
            { type: 'Triada B', val: `hsl(${(h + 240) % 360}, 70%, 50%)` }
        ];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCircleHues(() => Array.from({ length: 4 }, () => Math.floor(Math.random() * 360)));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="harmonizer">
            <input
                type="range"
                min={0}
                max={360}
                value={hue}
                onChange={e => setHue(Number(e.target.value))}
            />
            <div className="palette-box">
                {getHarmonies(hue).map((c) => (
                    <div key={c.type} className="palette-item">
                        <div className="card" style={{ backgroundColor: c.val }}>
                            <span>{c.type}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cycle-box">
                {circleHues.map((h, i) => (
                    <div key={i} className="circle" style={{ backgroundColor: `hsl(${h}, 70%, 50%)` }} />
                ))}
            </div>
        </div>
    );
};

export default ColorHarmonizer;
