import { useContext } from "react";
import { DoctorsContext } from "../context/DoctorsContext";
import { DoctorList } from "../components/DoctorList";

export const DoctorPage = () => {
    const { doctores, loading } = useContext(DoctorsContext);

    return (
        <div className="container">
            <h1 className="titulo text-center">Doctores</h1>
            {loading ? (
                <p>Cargando doctores...</p>
            ) : (
                <DoctorList doctores={doctores} />
            )}
        </div>
    );
};

