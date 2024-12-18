

export const HomePage = () => {
    return (
        <div className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary custom-img">
                <div className="col-lg-6 custom-background">
                    <h1 className="page-title">Hospital Akilar</h1>
                    <p className="lead my-3">Bienvenidos a Akilar, donde su salud y bienestar son nuestra prioridad. Nos comprometemos a brindarle atención médica de calidad con un equipo profesional, cálido y dedicado a mejorar su calidad de vida. Su salud está en buenas manos.</p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="mis-vis row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Misión</h3>
                            <p className="card-text mb-auto">Nuestra misión es ofrecer servicios médicos integrales, accesibles y de alta calidad, apoyados en la innovación tecnológica y el compromiso humano. Trabajamos día a día para mejorar la vida de nuestros pacientes, promoviendo una atención personalizada y segura.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mis-vis row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Visión</h3>
                            <p className="card-text mb-auto">Ser un hospital de referencia en la región, reconocido por su excelencia médica, atención centrada en el paciente y el continuo desarrollo de nuestros profesionales. Promovemos un entorno innovador y colaborativo que contribuye al bienestar y la salud de nuestra comunidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}