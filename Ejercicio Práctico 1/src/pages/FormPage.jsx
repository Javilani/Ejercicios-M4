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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

    return (
        <div className="container">
            <h1 className="titulo">Sistema de Citas</h1>
            <AppointmentForm
                formData={formData}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
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
