import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const DoctorsContext = createContext();

// Crear el provider
export default function DoctorsProvider({ children }) {
    const [doctores, setDoctores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una API para los doctores
        setTimeout(() => {
            setDoctores([
                { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", aniosExperiencia: 15 },
                { id: 2, nombre: "Dra. Ana Gómez", especialidad: "Neurología", aniosExperiencia: 10 },
                { id: 3, nombre: "Dr. Carlos Ruiz", especialidad: "Pediatría", aniosExperiencia: 8 },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <DoctorsContext.Provider value={{ doctores, loading }}>
            {children}
        </DoctorsContext.Provider>
    );
}