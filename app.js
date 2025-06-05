const express = require('express');
const app = express();
const tareaRoutes = require('./routers/tareaRoutes'); 

// Middleware para parsear JSON
app.use(express.json());

// Montar el enrutador bajo la ruta /tasks
app.use('/tarea', tareaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('tareas listo');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});