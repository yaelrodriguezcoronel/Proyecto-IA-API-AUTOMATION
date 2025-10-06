# API de Cuentas de Depósito - Proyecto de Prueba

## 1. Descripción General

Este proyecto se centra en la definición, prueba y documentación de una API de ejemplo para un microservicio bancario llamado `cuentas-deposito`. El objetivo de la API es permitir la consulta de cuentas de débito asociadas a un número de cliente específico.

El proyecto abarca el ciclo de vida completo de la definición de una API, incluyendo:
- **Especificación:** Creación de un archivo Swagger (OpenAPI).
- **Pruebas:** Diseño de una matriz de casos de prueba (positivos, negativos y de rendimiento), una colección de Postman para la ejecución y un script para la automatización.
- **Visualización:** Un dashboard interactivo para visualizar las métricas y resultados de las pruebas.
- **Documentación:** Documentos formales que detallan tanto la especificación de la API como el proceso de desarrollo.

## 2. Contenido del Repositorio

- `swagger.yaml`: La especificación formal de la API en formato OpenAPI 3.0.
- `test-cases.xlsx`: La matriz detallada de casos de prueba.
- `postman_collection.json`: La colección de Postman utilizada para ejecutar las pruebas de la API.
- `dashboard.html`: Un dashboard interactivo para visualizar los resultados de las pruebas.
- `reports.js`: El archivo de datos que alimenta el dashboard.
- `run_tests.bat`: Un script para ejecutar la colección de Postman de forma automatizada.
- `API_Documentation.docx`: La documentación técnica detallada de la API.
- `Project_Interaction_Log.docx`: Un registro completo de las interacciones y comandos utilizados para construir este proyecto.

## 3. Ejecución Automatizada de Pruebas

Para ejecutar la suite de pruebas de la API de forma automatizada, sigue estos pasos.

### Prerrequisitos

Asegúrate de tener **Node.js** y **npm** instalados. Luego, necesitas instalar **Newman**, el ejecutor de colecciones de Postman desde la línea de comandos. Si no lo tienes, abre una terminal y ejecuta el siguiente comando:

```bash
npm install -g newman
```

### Instrucciones de Ejecución

1.  Navega al directorio del proyecto.
2.  Haz doble clic en el archivo `run_tests.bat`.

Esto abrirá una ventana de la terminal, ejecutará automáticamente todos los tests definidos en la colección `postman_collection.json` y mostrará los resultados directamente en la consola.

## 4. Visualización del Dashboard

Para ver las métricas y los resultados de las pruebas de una manera gráfica:
1.  Abre el archivo `dashboard.html` en cualquier navegador web.

El dashboard mostrará gráficos sobre el estado y tipo de las pruebas, así como una tabla detallada con los resultados de cada caso.
