const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde el directorio de construcción
app.use(express.static(path.join(__dirname, 'build')));

// Enviar index.html para todas las solicitudes no manejadas por archivos estáticos
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
