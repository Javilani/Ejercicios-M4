import { useState } from "react";
import { AppointmentForm } from "../components/AppointmentForm";

export const FormPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        doctorname: "",
        date: "",
        time: "",
    });

    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del campo "name" para que solo contenga letras y espacios
        if (typeof formData.name !== "string" || !/^[a-zA-Z\s]+$/.test(formData.name)) {
            setError("El nombre solo debe contener letras y espacios.");
            return;
        }

        // Si la validación pasa, limpian el error y envían los datos
        setError(""); // Limpiar error si todo está bien
        console.log("Formulario enviado:", formData);

        // Guarda la cita en el estado
        setAppointments([...appointments, formData]);

        // Limpia el formulario
        setFormData({
            name: "",
            doctorname: "",
            date: "",
            time: "",
        });
    };

    const resetForm = () => {
        setFormData({
            name: "",
            doctorname: "",
            date: "",
            time: "",
        });
        setError(""); // Limpiar cualquier error al resetear el formulario
    };

    return (
        <div className="container">
            <h1 className="titulo">Sistema de Citas</h1>
            <AppointmentForm
                formData={formData}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
                resetForm={resetForm}
                error={error} // Pasamos el error como prop al AppointmentForm
            />
            <div>
                <h2 className="titulo">Citas Enviadas</h2>
                <ul>
                    {appointments.map((appointment, index) => (
                        <li key={index}>
                            {appointment.name} - {appointment.doctorname} - {appointment.date} - {appointment.time}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
