import PropTypes from 'prop-types';
import { DoctorCard } from './DoctorCard';

export const DoctorList = ({ doctores }) => {
    return (
        <div className='doctor-list'>
            {doctores.map((doctor) => (
                <DoctorCard
                key={doctor.id}
                nombre={doctor.nombre}
                especialidad={doctor.especialidad}
                aniosExperiencia={doctor.aniosExperiencia}
                />
            ))}
        </div>
    );
}

DoctorList.propTypes = {
    doctores: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            especialidad: PropTypes.string.isRequired,
            aniosExperiencia: PropTypes.number.isRequired,
        })
    ).isRequired,
};