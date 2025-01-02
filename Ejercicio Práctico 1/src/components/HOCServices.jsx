import ServiceList from './ServiceList';

export default function HOCExample() {
    const servicios = [
        { id: 1, servicio: "Urgencias", descripcion: "Servicio disponible 24/7 para atender cualquier tipo de emergencia." },
        { id: 2, servicio: "Ambulancia", descripcion: "Brindamos servicio de ambulancias en caso de que la emergencia sea de alta gravedad y necesites transporte o que la atención empiece en el mismo lugar de los hechos." },
        { id: 3, servicio: "Farmacia", descripcion: "Dentro del hospital contamos con una farmacia, nunca ha sido tan fácil conseguir los medicamentos que necesitas!" },
        { id: 4, servicio: "Consulta", descripcion: "Ofrecemos consultas médicas con profesionales altamente capacitados en diversas áreas de la salud." },
        { id: 5, servicio: "Especialidades", descripcion: "En este hospital ofrecemos una amplia gama de servicios en especialidades médicas, que incluyen cardiología, pediatría, ginecología, ortopedia, y más." }
    ];

    return (
        <div>
            <h2>Ejemplo de Componentes de Orden Superior</h2>
            <ServiceList servicios={servicios} />
        </div>
    );
}
