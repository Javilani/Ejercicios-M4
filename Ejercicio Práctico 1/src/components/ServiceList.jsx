import PropTypes from 'prop-types';
import { ServiceCard } from './ServiceCard';

export const ServiceList = ({ servicios }) => {
    return (
        <div className='service-list'>
            {servicios.map((servicio) => (
                <ServiceCard 
                    key={servicio.id}
                    servicio={servicio.servicio}
                    descripcion={servicio.descripcion}
                />
            ))}
        </div>
    )
}

ServiceList.propTypes = {
    servicios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            servicio: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired
        })
    ).isRequired,
};