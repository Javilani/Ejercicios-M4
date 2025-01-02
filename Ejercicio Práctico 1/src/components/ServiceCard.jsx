import PropTypes from 'prop-types';

export const ServiceCard = ({ servicio, descripcion, showDescription }) => {
    return (
        <div className="service-card">
            <div className="card-body">
                <h4 className="card-title">{servicio}</h4>
                {showDescription && <p className="service-card-text">{descripcion}</p>}
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    servicio: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    showDescription: PropTypes.bool.isRequired,  // Recibimos la prop de la descripción
};
