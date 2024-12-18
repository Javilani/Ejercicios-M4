import { useServices } from "../hooks/useDoct&Serv";
import { ServiceList } from "../components/ServiceList";

export const ServicesPage = () => {
    const { servicios } = useServices();
    return (
        <div className="container">
            <h1 className="titulo text-center">Servicios</h1>
            <ServiceList servicios={servicios} />
        </div>
    )
}