import React from 'react';


function GestorCola({ cola, atenderPaciente }) {
    function obtenerPacienteActual() {
        if (cola.length === 0) {
            return "No hay pacientes en la cola.";
        }
        const pacienteActual = cola[0];
        return `${pacienteActual.nombre} (Edad: ${pacienteActual.edad}, Sintoma: ${pacienteActual.sintoma})`;
    }
    function obtenerSiguientePaciente() {
        if (cola.length <= 1) {
            return "No hay más pacientes.";
        }
        const siguientePaciente = cola[1];
        return `${siguientePaciente.nombre} (Edad: ${siguientePaciente.edad}, Sintoma: ${siguientePaciente.sintom})`;
    }
    function obtenerPacientesRestantes() {
        return cola.length;
    }
    return (
        <div class="card">
            <div class="card-body">
            <h1>Gestión de Cola de Pacientes</h1>
            <p class="alert alert-info" role="alert">Paciente actual: {obtenerPacienteActual()}</p>
            <p class="alert alert-light" role="alert">Próximo paciente: {obtenerSiguientePaciente()}</p>
            <p>Pacientes restantes: {obtenerPacientesRestantes()}</p>
            <button type="button" class="btn btn-outline-success" onClick={atenderPaciente}>
                Atender Paciente
            </button>
            </div>
        </div >
    );
}
export default GestorCola;
