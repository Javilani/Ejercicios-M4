import PropTypes from 'prop-types';
import { ServiceCard } from './ServiceCard';
import withExtraInfo from '../hocs/withExtraInfo';

// Aplicamos el HOC a la tarjeta de servicio
const EnhancedServiceCard = withExtraInfo(ServiceCard);

export const ServiceList = ({ servicios }) => {
    return (
        <div className='service-list'>
            {servicios.map((servicio) => (
                <EnhancedServiceCard
                    key={servicio.id}
                    servicio={servicio.servicio}
                    descripcion={servicio.descripcion}
                />
            ))}
        </div>
    );
};

ServiceList.propTypes = {
    servicios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            servicio: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired
        })
    ).isRequired,
};
