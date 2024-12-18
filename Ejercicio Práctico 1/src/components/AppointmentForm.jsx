import PropTypes from "prop-types";

export const AppointmentForm = ({ formData, onInputChange, onSubmit }) => {
    return (
        <div>
            <h2>Formulario de Citas</h2>
            <div className="form-card">
                <div className="card-body">
                    <form className="contact-form" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input
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
                    </form>
                </div>
            </div>
        </div>
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
};