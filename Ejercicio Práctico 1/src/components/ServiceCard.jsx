import PropTypes from 'prop-types';

export const ServiceCard = ({ servicio, descripcion }) => {
    return (
        <div className="card-container">
            <div className="service-card">
            <div className="card-body">
                <h4 className="card-title">{servicio}</h4>
                <p className="service-card-text">{descripcion}</p>
            </div>
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    servicio: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};