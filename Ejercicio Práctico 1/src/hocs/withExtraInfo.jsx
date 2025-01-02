import { useState } from "react";


export default function withExtraInfo(WrappedComponent) {
    return function EnhancedComponent(props) {
        const [showDescription, setShowDescription] = useState(false);

        const handleMouseEnter = () => {
            setShowDescription(true);
        };

        const handleMouseLeave = () => {
            setShowDescription(false);
        };

        const handleClick = () => {
            setShowDescription(!showDescription);
        };

        return (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <WrappedComponent
                    {...props}
                    showDescription={showDescription}  // Pasamos la prop de la descripción
                />
            </div>
        );
    };
}
