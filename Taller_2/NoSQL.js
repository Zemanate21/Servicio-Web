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
}