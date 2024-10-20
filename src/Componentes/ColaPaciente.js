import React from "react";
import Paciente from './Paciente';

function ColaPacientes({ pacientes}) {
    return (
        <div class="alert alert-light" role="alert">
            <h2>Pacientes en la Cola</h2>
            {pacientes.length === 0 ? (
                <p>No hay Pacientes en la Cola</p>
            ): (
                
                pacientes.map((paciente, index) => (
                <div class="alert alert-secondary" role="alert">
                    <cite title="Source Title"><Paciente key={index} paciente={paciente} /></cite>
                </div>
                ))
            )
            }
        </div>
    );
}

export default ColaPacientes;