const reports = [
    {
        "id": "CT-001",
        "type": "Positiva",
        "description": "Validar la respuesta exitosa de la API con un número de cliente válido.",
        "status": "Exitoso",
        "responseTime": 150
    },
    {
        "id": "CT-002",
        "type": "Negativa",
        "description": "Validar la respuesta de la API con un número de cliente inválido (no numérico).",
        "status": "Exitoso",
        "responseTime": 80
    },
    {
        "id": "CT-003",
        "type": "Negativa",
        "description": "Validar la respuesta de la API con un cuerpo de solicitud vacío.",
        "status": "Exitoso",
        "responseTime": 90
    },
    {
        "id": "CT-004",
        "type": "Negativa",
        "description": "Validar la respuesta de la API sin el campo 'numCliente' en el cuerpo de la solicitud.",
        "status": "Exitoso",
        "responseTime": 120
    },
    {
        "id": "CT-005",
        "type": "Rendimiento",
        "description": "Validar el tiempo de respuesta de la API bajo una carga de 100 solicitudes por segundo.",
        "status": "Exitoso",
        "responseTime": 180
    },
    {
        "id": "CT-006",
        "type": "Rendimiento",
        "description": "Validar el comportamiento de la API bajo una carga de estrés de 500 solicitudes por segundo.",
        "status": "Exitoso",
        "responseTime": 850
    }
];