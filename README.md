
# Ejercicios M4

## Menú de Navegación
- [Ejercicio Práctico 1](#ejercicio-practico-1)  


## Ejercicio Práctico 1

Este proyecto es una aplicación web para gestionar citas médicas en un hospital ficticio llamado Hospital Akilar. La aplicación permite a los usuarios ver información sobre los doctores y los servicios ofrecidos, así como gestionar citas médicas.

### Tecnologías utilizadas

- **React:** Librería de JavaScript para construir interfaces de usuario.
- **React Hooks:** Utilizados para manejar el estado y efectos secundarios en los componentes.
- **Bootstrap:** Framework de diseño responsivo para la maquetación y estilo de los componentes.

### Estructura del Proyecto

#### 1. Doctores
La aplicación permite a los usuarios ver información sobre los doctores del hospital. Los doctores tienen un nombre, especialidad y años de experiencia, y se presentan en una lista de tarjetas (`DoctorCard`). Estas tarjetas están dispuestas en un diseño responsivo.

**Componentes principales:**

- `DoctorCard`: Muestra la información de cada doctor.
- `DoctorList`: Muestra una lista de todos los doctores.

**Uso de hooks:**

- `useState`: Se utiliza para gestionar el estado de los doctores en el componente `DoctorList`.
- `useEffect`: El hook `useEffect` se usa para simular la carga de datos desde una API. Cuando el componente `DoctorList` se monta, el `useEffect` actualiza el estado de los doctores utilizando `setDoctores`. Esto permite que los doctores se muestren en la aplicación de forma dinámica.

        export const useDoctores = () => {
                const [ doctores, setDoctores ] = useState([]);

                useEffect(() => {
                        // Simula una API para los doctores
                        setDoctores([
                                { 
                                        id: 1, 
                                        nombre: "Dr. Juan Pérez", 
                                        especialidad: "Cardiología", 
                                        aniosExperiencia: 15 
                                },
                                // ... otros doctores
                        ]);
                }, []);

                return doctores;
        };
- `map()`: Se usa para iterar sobre la lista de doctores y renderizar cada uno con el componente `DoctorCard`.


### 2. Servicios Médicos
El componente Servicios permite mostrar los servicios médicos ofrecidos por el hospital, como consultas generales, exámenes médicos, etc. Cada servicio se presenta en una tarjeta.

**Componentes principales:**

- `ServiceCard`: Muestra la información de cada servicio.
- `ServiceList`: Muestra una lista de todos los servicios.
**Uso de hooks:**

- `useState`: Se utiliza para gestionar el estado de los servicios en el componente `ServiceList`.
- `useEffect`: El hook `useEffect` se utiliza para simular la carga de datos de los servicios desde una API. Al igual que con los doctores, cuando el componente `ServiceList` se monta, el `useEffect` actualiza el estado de los servicios utilizando `setServicios`. Esto permite que los servicios se muestren dinámicamente en la aplicación.

        export const useServices = () => {
                const [ servicios, setServicios ] = useState([]);

                useEffect(() => {
                        // Simula API de servicios
                        setServicios([
                                { 
                                        id: 1, 
                                        servicio: "Urgencias", 
                                        descripcion: "Servicio disponible 24/7 para
                                        atender cualquier tipo de emergencia." 
                                },
                                // ... otros servicios
                        ]);
                }, []);

                return servicios;
        };
- `map()`: Se usa para iterar sobre la lista de servicios y renderizar cada uno con el componente `ServiceCard`.

#### 3. Sistema de Citas
El sistema de citas permite a los usuarios seleccionar un doctor, una fecha y una hora para su cita médica. Los formularios están construidos usando `useState` para manejar el estado de las entradas de los usuarios.

**Componentes principales:**

- `AppointmentForm`: Formulario para crear una cita.
- `FormPage`: Página que contiene el formulario de cita.
**Uso de hooks:**

- `useState`: Se utiliza para gestionar el estado de los datos del formulario (nombre del paciente, doctor seleccionado, fecha y hora). 

        const [formData, setFormData] = useState({
                name: "",
                doctorname: "",
                date: "",
                time: "",
        });

- `handleChange()`: Función para actualizar el estado de cada campo en el formulario.

        const handleChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                });
        };

- `handleSubmit()`: Función que se llama al enviar el formulario, para mostrar los datos en consola y limpiar el formulario después de enviarlo.

        const handleSubmit = (e) => {
                e.preventDefault();
                console.log("Formulario enviado desde App:", formData);
                setFormData({
                        name: "",
                        doctorname: "",
                        date: "",
                        time: "",
                });
        };

### Instalación
1. Clona el repositorio
2. Navega al directorio del proyecto

        cd '.\Ejercicio Práctico 1\'

3. Instala las dependencias:

        npm install

4. Inicia la aplicación

        npm run dev

La aplicación se abrirá en http://localhost:5173/


## Authors

- Javier Lagos
## Screenshots

- Uso de React Developer Tools:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734559159/react-dev-tool_qnwgtb.png)


- Vista inicial de la página:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734559170/homepage_brqkz3.png)


- Formulario de reserva de citas:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734559177/cita_lsh5i7.png)

## Authors

- Javier Lagos

