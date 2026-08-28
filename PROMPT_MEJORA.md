# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: package.json ===
{
  "name": "bank-api",
  "version": "1.0.0",
  "description": "API REST para operaciones de cuentas bancarias.",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "4.17.1",
    "mongoose": "6.0.0"
  },
  "devDependencies": {
    "dotenv": "10.0.0",
    "jest": "27.0.0"
  }
}

// === ARCHIVO: src/index.js ===
const express = require('express');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/accounts', accountRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// === ARCHIVO: src/models/account.js ===
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true, unique: true },
  balance: { type: Number, required: true },
  owner: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);

// === ARCHIVO: src/controllers/accountController.js ===
const Account = require('../models/account');

const createAccount = async (req, res) => {
  const account = new Account(req.body);
  await account.save();
  res.status(201).send(account);
};

const getAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.send(accounts);
};

const getAccountById = async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send(account);
};

const updateAccount = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send(account);
};

const deleteAccount = async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  if (!account) return res.status(404).send({ message: 'Account not found' });
  res.send({ message: 'Account deleted' });
};

module.exports = {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount
};

// === ARCHIVO: src/routes/accountRoutes.js ===
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.createAccount);
router.get('/', accountController.getAccounts);
router.get('/:id', accountController.getAccountById);
router.put('/:id', accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

module.exports = router;

// === ARCHIVO: src/middlewares/errorHandler.js ===
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
};

module.exports = errorHandler;

// === ARCHIVO: src/services/bankCoreService.js ===
const axios = require('axios');

const validateAccountOperation = async (accountNumber) => {
  try {
    const response = await axios.post(`https://bankcore.example.com/validate`, { accountNumber });
    return response.data;
  } catch (error) {
    throw new Error('Bank core validation failed');
  }
};

module.exports = { validateAccountOperation };

// === ARCHIVO: src/config/database.js ===
const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Database connected');
};

module.exports = connectDB;

// === ARCHIVO: tests/account.test.js ===
const request = require('supertest');
const app = require('../src/index');

describe('Account API', () => {
  it('should create a new account', async () => {
    const res = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('accountNumber', '1234567890');
  });

  it('should get all accounts', async () => {
    const res = await request(app).get('/api/accounts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should get an account by ID', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app).get(`/api/accounts/${account.body._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', account.body._id);
  });

  it('should update an account', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app)
     .put(`/api/accounts/${account.body._id}`)
     .send({ balance: 2000 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('balance', 2000);
  });

  it('should delete an account', async () => {
    const account = await request(app)
     .post('/api/accounts')
     .send({
        accountNumber: '1234567890',
        balance: 1000,
        owner: 'John Doe'
      });
    const res = await request(app).delete(`/api/accounts/${account.body._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Account deleted');
  });
});
```
