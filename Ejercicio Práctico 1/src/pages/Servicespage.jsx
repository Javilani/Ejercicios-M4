import { useServices } from "../hooks/useDoct&Serv";
import { ServiceList } from "../components/ServiceList";

export const ServicesPage = () => {
    const { servicios, loadingServices } = useServices();

    return (
        <div className="container">
            <h1 className="titulo text-center">Servicios</h1>
            {loadingServices ? (
                <p>Cargando servicios...</p>
            ) : (
                <ServiceList servicios={servicios} />
            )}
        </div>
    );
};
