(**04-tareas-realizar**)

**Descripción**: Aplicación CLI sencilla para crear, listar, marcar como completadas y eliminar tareas. Está construida con Node.js usando módulos propios para entrada interactiva, modelos y persistencia en JSON.

**Requisitos**

- **Node.js**: v14+ recomendada

**Instalación**

- Clona o descarga el repositorio y luego instala dependencias (si las hay):

```bash
npm install
```

**Uso**

- Ejecutar la aplicación:

```bash
node index.js
```

- La aplicación proporciona un menú interactivo para:
	- Crear una tarea
	- Listar tareas (todas / completadas / pendientes)
	- Marcar tareas como completadas
	- Eliminar tareas

**Estructura del proyecto**

- **Archivo principal**: [index.js](index.js)
- **Datos**: [db/data.json](db/data.json)
- **Ejemplos**: [examples/checkbox.mjs](examples/checkbox.mjs)
- **Helpers**:
	- [helpers/inquierer.js](helpers/inquierer.js)
	- [helpers/mensaje.js](helpers/mensaje.js)
	- [helpers/SaveFile.js](helpers/SaveFile.js)
- **Modelos**:
	- [models/tarea.js](models/tarea.js)
	- [models/tareas.js](models/tareas.js)

**Notas de desarrollo**

- El estado de las tareas se persiste en `db/data.json` mediante utilidades en `helpers/SaveFile.js`.
- `models/tareas.js` contiene la lógica para añadir, listar y actualizar tareas en memoria.

**Contribuir**

- Abre un issue o crea un pull request con mejoras o correcciones.

**Licencia**

- MIT (usa la licencia que prefieras)
