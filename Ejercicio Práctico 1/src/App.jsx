//import './App.css'
import { DoctorPage } from './pages/DoctorPage'
import { ServicesPage } from './pages/Servicespage';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';
import DoctorsProvider from './context/DoctorsContext';

export const App = () => {
    return (
        <DoctorsProvider>
            <HomePage />
            <DoctorPage />
            <ServicesPage />
            <FormPage />
        </DoctorsProvider>
    );
}
