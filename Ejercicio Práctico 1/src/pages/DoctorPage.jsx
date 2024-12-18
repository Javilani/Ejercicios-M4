import { useDoctores } from "../hooks/useDoct&Serv";
import { DoctorList } from "../components/DoctorList";

export const DoctorPage = () => {
    const { doctores } = useDoctores();

    return (
        <div className="container">
            <h1 className="titulo text-center">Doctores</h1>
            <DoctorList doctores={doctores} />
        </div>
    )
}