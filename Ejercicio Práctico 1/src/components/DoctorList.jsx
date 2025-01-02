import { useContext } from "react";
import { Profiler } from "react";
import { DoctorsContext } from "../context/DoctorsContext";
import { DoctorCard } from "./DoctorCard";

export const DoctorList = () => {
    const { doctores, loading } = useContext(DoctorsContext);

    // Función de callback para el Profiler
    const onRenderCallback = (
        id, 
        phase, 
        actualDuration
    ) => {
        console.log(`Component: ${id}`);
        console.log(`Phase: ${phase}`);
        console.log(`Actual duration: ${actualDuration}ms`);
    };

    if (loading) {
        return <p>Cargando doctores...</p>;
    }

    return (
        // Envolviendo el componente DoctorList con el Profiler
        <Profiler id="DoctorList" onRender={onRenderCallback}>
            <div className="doctor-list">
                {doctores.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        nombre={doctor.nombre}
                        especialidad={doctor.especialidad}
                        aniosExperiencia={doctor.aniosExperiencia}
                    />
                ))}
            </div>
        </Profiler>
    );
};
