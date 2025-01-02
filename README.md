
# Ejercicios M4

## Menú de Navegación
- [Ejercicio Práctico 1](#ejercicio-practico-1)  
- [Ejercicio Práctico 2](#ejercicio-practico-2)  


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


## Ejercicio Práctico 2

### Renderización de Datos con DOM Virtual

ReactJS utiliza el Virtual DOM para mejorar el rendimiento de las aplicaciones, como la interfaz del hospital. En lugar de actualizar directamente el DOM real cada vez que cambia el estado o las propiedades de un componente, React crea una copia del DOM en memoria llamada Virtual DOM. Luego, compara esta copia con el DOM anterior para identificar solo las diferencias, lo que permite realizar actualizaciones más rápidas y eficientes.

Este proceso de comparación y actualización solo de los cambios necesarios reduce significativamente el tiempo y los recursos requeridos para actualizar la interfaz. Por ejemplo, si solo se actualiza un doctor en la lista, React solo modificará esa parte del DOM real, sin necesidad de volver a renderizar toda la lista. Esto mejora la velocidad y la experiencia del usuario, especialmente en aplicaciones con componentes dinámicos o grandes cantidades de datos, como los listados de doctores o servicios en un hospital.

### Formulario de Citas Médicas con Referencias en React

El componente, `AppointmentForm`, utiliza **referencias** en React para interactuar directamente con el DOM. Esto mejora la experiencia del usuario al permitir que el campo de nombre se enfoque automáticamente después de acciones clave como enviar o limpiar el formulario.

- **Callback Ref**: Se utiliza `setNameInputRef` para asignar una referencia al campo de entrada de nombre.
- **Enfoque Automático**: La función `focusNameField` se llama al enviar o limpiar el formulario, enfocando automáticamente el campo de nombre para facilitar la interacción.

#### Uso de Fragmentos (`<React.Fragment>`) en el Formulario de Citas Médicas

En este mismo componente utilizamos **fragmentos de React** (`<React.Fragment>`) para envolver múltiples elementos JSX sin introducir nodos adicionales en el DOM. Esto es útil para mantener un DOM limpio y eficiente, especialmente en aplicaciones grandes o complejas.

- **Mantiene el DOM Limpio**: Al usar un fragmento, evitamos introducir elementos como `<div>` que no tienen relevancia semántica o funcional, reduciendo la complejidad del DOM.
- **Mejora del Rendimiento**: Menos nodos en el DOM implican una mejora en el rendimiento, especialmente en aplicaciones con muchos componentes.
- **Legibilidad del Código**: Facilita la estructura del componente al permitir que múltiples elementos JSX coexistan sin un contenedor adicional.

### Uso de React Context para Gestión de Estado Global

Se utilizó **React Context** para gestionar el estado global relacionado con los doctores en la aplicación. Esto nos permite compartir datos, como la lista de doctores y su estado de carga, entre múltiples componentes sin necesidad de pasar propiedades de manera manual a través de varios niveles de la jerarquía de componentes.

- **Estado Centralizado**: Toda la información relacionada con los doctores (lista y estado de carga) está centralizada en el contexto, evitando redundancia en los componentes.
- **Prop Drilling Eliminado**: No es necesario pasar manualmente las propiedades a través de varios niveles de componentes.
- **Fácil Escalabilidad**: Si en el futuro necesitas compartir más datos o funcionalidades, simplemente los agregas al contexto.

### Uso de PropTypes para Validar Propiedades en los Componentes

Se implementó **PropTypes** para garantizar que los datos pasados a los componentes cumplan con los tipos esperados. Esto mejora la robustez de la aplicación al permitir identificar errores durante el desarrollo si las propiedades no coinciden con los tipos especificados.

**Ejemplo**: El componente `DoctorCard` muestra información de un doctor, como su nombre, especialidad y años de experiencia. Usamos **PropTypes** para validar que las propiedades recibidas tienen los tipos correctos:

        DoctorCard.propTypes = {
                nombre: PropTypes.string.isRequired,
                especialidad: PropTypes.string.isRequired,
                aniosExperiencia: PropTypes.number.isRequired,
        };

### Uso de Componentes de Orden Superior (HOC)

Se utilizó un **Componente de Orden Superior (HOC)** llamado `withExtraInfo` para añadir funcionalidades adicionales a componentes existentes sin modificar directamente su implementación. Este HOC permite gestionar eventos interactivos como mostrar u ocultar información adicional al interactuar con un componente.

### Uso de React Profiler en el Componente `DoctorList`

El Profiler se implementó para medir el tiempo de renderización del componente DoctorList, que muestra una lista de doctores obtenida de un contexto.
- Función de callback para el Profiler:

        const onRenderCallback = (
                id, 
                phase, 
                actualDuration
        ) => {
                console.log(`Component: ${id}`);
                console.log(`Phase: ${phase}`);
                console.log(`Actual duration: ${actualDuration}ms`);
        };

- Envolviendo el Componente con `Profiler`:
El componente DoctorList está envuelto en un Profiler para medir su rendimiento. Se le asigna un identificador único (id="DoctorList") y una función de callback (onRenderCallback) que se ejecuta después de cada renderizado.



## Screenshots

- Uso del Componente de Orden Superior (HOC):
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1735778260/servicio_mng29b.png)


- Enfoque Automático:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1735778255/formulario_chzudt.png)


- Implementación de `Profiler`:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1735778249/profiler_jndawu.png)
## Authors

- Javier Lagos

