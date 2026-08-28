# Construcción de una API REST en el dominio de banca

El objetivo es construir una API REST que maneje operaciones de cuentas bancarias. La API debe soportar creación, lectura, actualización y eliminación de cuentas. Debe asegurar la consistencia de los datos y manejar adecuadamente los errores del dominio. Los actores involucrados son el 'originador de créditos', el'motor antifraude' y el 'core bancario'. La API debe soportar un throughput de 1 500 solicitudes por segundo en hora pico.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Node.js Express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de datos

**Objetivo:** Establecer las entidades y relaciones necesarias para manejar cuentas bancarias.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar las entidades clave en el dominio de las cuentas bancarias.
- Definir las relaciones entre estas entidades.
- Establecer las reglas de validación y consistencia para las operaciones CRUD.

**Entregable:** Modelo de datos documentado con entidades, relaciones y reglas de validación.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la estructura de una cuenta bancaria y las operaciones que se pueden realizar sobre ella.
- Piensa en cómo garantizar la consistencia de los datos entre las diferentes operaciones.

</details>

### Fase 2: Implementación de endpoints básicos

**Objetivo:** Crear endpoints para las operaciones CRUD de cuentas bancarias.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar endpoints para crear, leer, actualizar y eliminar cuentas bancarias.
- Asegurar que los endpoints manejen adecuadamente los errores del dominio.
- Garantizar la idempotencia de las operaciones de creación y actualización.

**Entregable:** Endpoints básicos implementados y funcionando para las operaciones CRUD de cuentas bancarias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los errores del dominio, como cuentas inexistentes o intentos de actualización con datos inválidos.
- Piensa en cómo garantizar la idempotencia de las operaciones de creación y actualización.

</details>

### Fase 3: Integración con el core bancario

**Objetivo:** Integrar la API con el core bancario para validar operaciones.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar la integración con el core bancario para validar las operaciones de cuentas bancarias.
- Asegurar que la API maneje adecuadamente las respuestas del core bancario.
- Garantizar la trazabilidad de las operaciones para auditoría.

**Entregable:** API integrada con el core bancario, manejando adecuadamente las respuestas y garantizando la trazabilidad de las operaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar las respuestas del core bancario, incluyendo errores y casos de éxito.
- Piensa en cómo garantizar la trazabilidad de las operaciones para fines de auditoría.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las entidades y relaciones en el modelo de datos de cuentas bancarias?
- **paraQueSirve**: ¿Para qué sirven los endpoints implementados en la API?
- **comoSeUsa**: ¿Cómo se usa la integración con el core bancario para validar operaciones?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir en las operaciones de cuentas bancarias y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la integración con el core bancario para validar operaciones?

## Criterios de Evaluacion

- Definir correctamente el modelo de datos para cuentas bancarias.
- Implementar endpoints básicos para las operaciones CRUD.
- Integrar la API con el core bancario y manejar adecuadamente las respuestas.
- Garantizar la trazabilidad de las operaciones para auditoría.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
