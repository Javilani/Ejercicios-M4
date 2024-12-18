import PropTypes from 'prop-types';

export const DoctorCard = ({ nombre, especialidad, aniosExperiencia }) => {
    return (
        <div className="card-container">
            <div className="doctor-card">
                <div className="card-body">
                    <h4 className="card-title">Nombre: {nombre}</h4>
                    <p className="card-text">Especialidad: {especialidad}</p>
                    <p className="card-text">Años de experiencia: {aniosExperiencia}</p>
                </div>
            </div>    
        </div>
    );
}

DoctorCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    aniosExperiencia: PropTypes.number.isRequired,
};