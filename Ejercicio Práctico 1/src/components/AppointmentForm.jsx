import PropTypes from "prop-types";
import React from "react";

export const AppointmentForm = ({ formData, onInputChange, onSubmit, resetForm, error }) => {
    let nameInput = null;

    const setNameInputRef = (element) => {
        nameInput = element;
    };

    const focusNameField = () => {
        if (nameInput) {
            nameInput.focus();
        }
    };

    return (
        <React.Fragment>
            <h2>Formulario de Citas</h2>
            <div className="form-card">
                <div className="card-body">
                {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
                    <form
                        className="contact-form"
                        onSubmit={(e) => {
                            onSubmit(e);
                            focusNameField(); // Enfocar después de enviar
                        }}
                    >
                        <div className="mb-3">
                            <input
                                ref={setNameInputRef} // Callback ref
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="doctorname"
                                className="form-control"
                                placeholder="Nombre del doctor"
                                value={formData.doctorname}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="time"
                                name="time"
                                className="form-control"
                                value={formData.time}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn-enviar">
                                Enviar
                            </button>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button
                                type="button"
                                className="btn-enviar"
                                onClick={(e) => {
                                    e.preventDefault();
                                    resetForm(); // Limpia el formulario
                                    focusNameField(); // Enfoca el campo
                                }}
                            >
                                Limpiar Formulario
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

AppointmentForm.propTypes = {
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        doctorname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    error: PropTypes.string,
};
