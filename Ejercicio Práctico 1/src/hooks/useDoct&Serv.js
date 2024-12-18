import { useState, useEffect } from "react";

export const useDoctores = () => {
    const [ doctores, setDoctores ] = useState([]);

    useEffect(() => {
        // Simula una API para los doctores
        setDoctores([
            { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", aniosExperiencia: 15 },
            { id: 2, nombre: "Dra. Ana Gómez", especialidad: "Neurología", aniosExperiencia: 10 },
            { id: 3, nombre: "Dr. Carlos Ruiz", especialidad: "Pediatría", aniosExperiencia: 8 },
        ]);
    }, []);

    return { doctores };
}

export const useServices = () => {
    const [ servicios, setServicios ] = useState([]);

    useEffect(() => {
        // Simula API de servicios
        setServicios([
            { id: 1, servicio: "Urgencias", descripcion: "Servicio disponible 24/7 para atender cualquier tipo de emergencia." },
            { id: 2, servicio: "Ambulancia", descripcion: "Brindamos servicio de ambulancias en caso de que la emergencia sea de alta gravedad y necesites transpore o que la atención empiece en el mismo lugar de los hechos." },
            { id: 3, servicio: "Farmacia", descripcion: "Dentro del hospital contamos con una farmacia, nunca ha sido tan fácil conseguir los medicamentos que necesitas!" },
            { id: 4, servicio: "Consulta", descripcion: "Ofrecemos consultas médicas con profesionales altamente capacitados en diversas áreas de la salud." },
            { id: 5, servicio: "Especialidades", descripcion: "En este hospital ofrecemos una amplia gama de servicios en especialidades médicas, que incluyen cardiología, pediatría, ginecología, ortopedia, y más." }
        ]);
    }, []);

    return { servicios };
}