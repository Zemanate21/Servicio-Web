const Paciente = {
    Id_Paciente:"564654635663",
    Nombre: {
        Nombres: "Andres Felipe",
        Apellidos: "Dorado Guzman"
    },
    Fecha_Nacimiento: "2004-01-21",
    Identificacion: {
        Tipo: "CC",
        Numero: "1063807353"
    },
    Contacto: {
        Telefono: "3117629466",
        Correo: "dguzman786@gmail.com",
        Direccion: "Carrera 21 #14-61 Timbio-Cauca"
    },
    Seguro: {
        Proveedor: "Fomag",
        Numero_Poliza: "SC123456789",
        Cobertura: "Completa"
    },
    Alergias: [
        {
            Sustancia: "Penicilina",
            Reaccion: "Erupción cutánea",
            Severidad: "Moderada"
        },
        {
            Sustancia: "Maní",
            Reaccion: "Anafilaxia",
            severidad: "Severa"
        }
    ],
    Historial_Familiar: [
        {
            Nombre: {
                Nombres:  "Juan Carlos",
                Apellidos: "Dorado Navia"
            },
            Parentesco: "Padre",
            Condicion: "Diabetes Tipo 2",
            Edad_Diagnostico: "45"
        },
        {
            Nombre: {
                Nombres: "Ana Carolina",
                Apellidos: "Guzman Navarro"
            },
            Parentesco: "Madre",
            Condicion: "Hipertension",
            Edad_Diagnostico: "40"
        }
    ],
    Visitas: [
        {
            Id_Visitas: 1
        }
    ]
}

const Visitas = [
    {
        Id_Visitas:  1,
        Fecha_Visita:  "2020-01-01",
        Motivo:  "Consulta de rutina",
        Doctor: {
            Nombre: "Juan Carlos",
            Apellidos: "Dorado Navia",
            Especialidad: "Medicina General"
        },
        Diagnostico: "Saludable",
        Medicamentos: "Sin medicamentos"
    },
    {
        Id_Visitas:  2,
        Fecha_Visita:  "2020-01-15",
        Motivo:  "Consulta de rutina",
        Doctor: {
            Nombre: "Ana Carolina",
            Apellidos: "Guzman Navia",
            Especialidad: "Pediatría"
        },
        Diagnostico: "Saludable",
        Medicamentos: "Sin medicamentos"
    },
    {
        Id_Visitas:  3,
        Fecha_Visita:  "2020-02-01",
        Motivo:  "Analisis de sangre",
        Doctor: {
            Nombre: "Juan Carlos",
            Apellidos: "Dorado Navia",
            Especialidad: "Medicina General"
        },
        Diagnostico:  "Saludable",
        Medicamentos: "Sin medicamentos"
    }
]
