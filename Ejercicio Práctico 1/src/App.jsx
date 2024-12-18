//import './App.css'
import { DoctorPage } from './pages/DoctorPage'
import { ServicesPage } from './pages/Servicespage';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';

export const App = () => {
    return (
        <div>
            <HomePage />
            <DoctorPage />
            <ServicesPage />
            <FormPage />
        </div>
    );
}
